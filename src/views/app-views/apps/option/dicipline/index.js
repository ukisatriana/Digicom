import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';


export const DataDicipline = () => {
  
 <Routes>
  <Route path="*" element={<Navigate to="diciplin-list" replace />} />
 </Routes>
 
}

export default DataDicipline;