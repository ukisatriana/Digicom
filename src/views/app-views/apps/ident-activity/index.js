import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';


export const IdentActivity = () => {
  
 <Routes>
  <Route path="*" element={<Navigate to="ident-activity-list" replace />} />
 </Routes>
 
}

export default IdentActivity;