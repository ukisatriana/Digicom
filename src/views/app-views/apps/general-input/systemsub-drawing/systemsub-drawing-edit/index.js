import React from 'react'
// import ProductForm from '../ProductForm';
import { useParams } from 'react-router-dom';
import SystemSubForm from '../SystemsubForm';

const EditSystemSubDrawing = () => {
	const params = useParams();

	return (
		<SystemSubForm mode="EDIT" param={params}/>
	)
}

export default EditSystemSubDrawing
