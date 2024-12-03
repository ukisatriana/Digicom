import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';


export const DataCommDeff = () => {
  
 <Routes>
  <Route path="*" element={<Navigate to="comm-deff-list" replace />} />
 </Routes>
 
}

export default DataCommDeff;