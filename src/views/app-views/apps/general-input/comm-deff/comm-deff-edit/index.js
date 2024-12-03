import React from 'react'
import { useParams } from 'react-router-dom';
import CommDeffForm from '../CommDeffForm';

const EditCommDeff = () => {
	const params = useParams();

	return (
		<CommDeffForm mode="EDIT" param={params}/>
	)
}

export default EditCommDeff