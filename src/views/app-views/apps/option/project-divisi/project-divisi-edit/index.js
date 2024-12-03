import React from 'react'
import { useParams } from 'react-router-dom';
import ProjectDivisiForm from '../ProjectDivisiForm';

const EditProjectDivisi = () => {
	const params = useParams();

	return (
		<ProjectDivisiForm mode="EDIT" param={params}/>
	)
}

export default EditProjectDivisi