import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';


export const DataProjectDivisi = () => {
  
 <Routes>
  <Route path="*" element={<Navigate to="project-divisi-list" replace />} />
 </Routes>
 
}

export default DataProjectDivisi;