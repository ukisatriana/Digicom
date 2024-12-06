import React from 'react'
import { useParams } from 'react-router-dom';
import IdentActivityForm from '../IdentActivityForm';

const EditIdentActivity = () => {
	const params = useParams();

	return (
		<IdentActivityForm mode="EDIT" param={params}/>
	)
}

export default EditIdentActivity