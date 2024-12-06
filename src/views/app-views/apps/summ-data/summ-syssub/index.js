import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';


export const SummSystemSub = () => {
  
 <Routes>
  <Route path="*" element={<Navigate to="summ-syssub-list" replace />} />
 </Routes>
 
}

export default SummSystemSub;