import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';


export const CommProcedure = () => {
  
 <Routes>
  <Route path="*" element={<Navigate to="comm-procedure-list" replace />} />
 </Routes>
 
}

export default CommProcedure;