import React from 'react'
import { CompanyRoutes } from '../company/routes/CompanyRoutes'
import { Navigate, Route, Routes } from 'react-router-dom';
 
export const AppRouter = () => {
  return (
        <Routes>
             <Route path="/*" element={ <CompanyRoutes /> } />
        </Routes>
  )
}
