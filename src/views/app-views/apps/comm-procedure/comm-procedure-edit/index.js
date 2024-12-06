import React from 'react'
// import ProductForm from '../ProductForm';
import { useParams } from 'react-router-dom';
import CommProcedureForm from '../CommProcedureForm';

const EditCommProcedure = () => {
	const params = useParams();

	return (
		<CommProcedureForm mode="EDIT" param={params}/>
	)
}

export default EditCommProcedure
