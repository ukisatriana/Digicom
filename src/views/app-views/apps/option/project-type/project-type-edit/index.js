import React from 'react'
import { useParams } from 'react-router-dom';
import ProjectTypeForm from '../ProjectTypeForm';

const EditProjectType = () => {
	const params = useParams();

	return (
		<ProjectTypeForm mode="EDIT" param={params}/>
	)
}

export default EditProjectType