import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';


export const DataProjectType = () => {
  
 <Routes>
  <Route path="*" element={<Navigate to="project-type-list" replace />} />
 </Routes>
 
}

export default DataProjectType;