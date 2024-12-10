import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AUTH_TOKEN } from 'constants/AuthConstant';
import FirebaseService from 'services/FirebaseService';
import AuthService from 'services/AuthService';
import { auth, db } from 'configs/FirebaseConfig'; // Pastikan Firebase terhubung di sini
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { getDoc } from 'firebase/firestore';

export const initialState = {
	loading: false,
	message: '',
	showMessage: false,
	redirect: '',
	token: localStorage.getItem(AUTH_TOKEN) || null
}

export const signIn = createAsyncThunk('auth/login', async (data, { rejectWithValue }) => {
	const { email, password } = data;
	try {
		// Login dengan Firebase
		const userCredential = await signInWithEmailAndPassword(auth, email, password);
		const user = userCredential.user;

		// Ambil role dari Firestore
		const userDoc = await getDoc(doc(db, 'users', user.uid));
		const userData = userDoc.data();

		// Token diambil dari Firebase Auth
		const token = await user.getIdToken();

		// Simpan token ke localStorage
		localStorage.setItem(AUTH_TOKEN, token);

		return { token, role: userData.role }; // Kembalikan role
	} catch (err) {
		return rejectWithValue(err.message || 'Error during login');
	}
});

export const signUp = createAsyncThunk('auth/register', async (data, { rejectWithValue }) => {
	const { email, password, role } = data;
	try {
		// Buat akun baru di Firebase
		const userCredential = await createUserWithEmailAndPassword(auth, email, password);
		const user = userCredential.user;

		// Simpan role ke Firestore
		await setDoc(doc(db, 'users', user.uid), {
			email: user.email,
			role: role, // Tambahkan role ke Firestore
		});

		// Token diambil dari Firebase Auth
		const token = await user.getIdToken();

		// Simpan token ke localStorage
		localStorage.setItem(AUTH_TOKEN, token);
		return { token, role };
	} catch (err) {
		return rejectWithValue(err.message || 'Error during registration');
	}
});

export const signOut = createAsyncThunk('auth/logout',async () => {
    const response = await FirebaseService.signOutRequest()
	localStorage.removeItem(AUTH_TOKEN);
    return response.data
})

export const signInWithGoogle = createAsyncThunk('auth/signInWithGoogle', async (_, { rejectWithValue }) => {
    try {
		const response = await AuthService.loginInOAuth()
		const token = response.data.token;
		localStorage.setItem(AUTH_TOKEN, token);
		return token;
	} catch (err) {
		return rejectWithValue(err.response?.data?.message || 'Error')
	}
})

export const signInWithFacebook = createAsyncThunk('auth/signInWithFacebook', async (_, { rejectWithValue }) => {
    try {
		const response = await AuthService.loginInOAuth()
		const token = response.data.token;
		localStorage.setItem(AUTH_TOKEN, token);
		return token;
	} catch (err) {
		return rejectWithValue(err.response?.data?.message || 'Error')
	}
})


export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		authenticated: (state, action) => {
			state.loading = false
			state.redirect = '/'
			state.token = action.payload
		},
		showAuthMessage: (state, action) => {
			state.message = action.payload
			state.showMessage = true
			state.loading = false
		},
		hideAuthMessage: (state) => {
			state.message = ''
			state.showMessage = false
		},
		signOutSuccess: (state) => {
			state.loading = false
			state.token = null
			state.redirect = '/'
		},
		showLoading: (state) => {
			state.loading = true
		},
		signInSuccess: (state, action) => {
			state.loading = false
			state.token = action.payload
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(signIn.pending, (state) => {
				state.loading = true
			})
			.addCase(signIn.fulfilled, (state, action) => {
				state.loading = false;
				state.redirect = '/';
				state.token = action.payload;
				state.role = action.payload.role; // Simpan role
			})
			.addCase(signIn.rejected, (state, action) => {
				state.message = action.payload
				state.showMessage = true
				state.loading = false
			})
			.addCase(signOut.fulfilled, (state) => {
				state.loading = false
				state.token = null
				state.redirect = '/'
			})
			.addCase(signOut.rejected, (state) => {
				state.loading = false
				state.token = null
				state.redirect = '/'
			})
			.addCase(signUp.pending, (state) => {
				state.loading = true
			})
			.addCase(signUp.fulfilled, (state, action) => {
				state.loading = false;
				state.redirect = '/';
				state.token = action.payload;
				state.role = action.payload.role; // Simpan role
			})
			.addCase(signUp.rejected, (state, action) => {
				state.message = action.payload
				state.showMessage = true
				state.loading = false
			})
			.addCase(signInWithGoogle.pending, (state) => {
				state.loading = true
			})
			.addCase(signInWithGoogle.fulfilled, (state, action) => {
				state.loading = false
				state.redirect = '/'
				state.token = action.payload
			})
			.addCase(signInWithGoogle.rejected, (state, action) => {
				state.message = action.payload
				state.showMessage = true
				state.loading = false
			})
			.addCase(signInWithFacebook.pending, (state) => {
				state.loading = true
			})
			.addCase(signInWithFacebook.fulfilled, (state, action) => {
				state.loading = false
				state.redirect = '/'
				state.token = action.payload
			})
			.addCase(signInWithFacebook.rejected, (state, action) => {
				state.message = action.payload
				state.showMessage = true
				state.loading = false
			})
	},
})

export const { 
	authenticated,
	showAuthMessage,
	hideAuthMessage,
	signOutSuccess,
	showLoading,
	signInSuccess
} = authSlice.actions

export default authSlice.reducer