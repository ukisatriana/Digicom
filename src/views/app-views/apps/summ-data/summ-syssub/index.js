import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';


export const SummSystemSub = () => {
  
 <Routes>
  <Route path="*" element={<Navigate to="systemsub-drawing-list" replace />} />
 </Routes>
 
}

export default SummSystemSub;