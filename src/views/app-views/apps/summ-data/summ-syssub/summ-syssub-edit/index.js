import React from 'react'
import { useParams } from 'react-router-dom';
import SummSysSubForm from '../SummSyssubForm';

const EditSumSyssub = () => {
	const params = useParams();

	return (
		<SummSysSubForm mode="EDIT" param={params}/>
	)
}

export default EditSumSyssub