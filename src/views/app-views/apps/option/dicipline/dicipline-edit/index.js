import React from 'react'
import { useParams } from 'react-router-dom';
import DiciplineForm from '../DiciplineForm';

const EditDiciplineKnowledge = () => {
	const params = useParams();

	return (
		<DiciplineForm mode="EDIT" param={params}/>
	)
}

export default EditDiciplineKnowledge