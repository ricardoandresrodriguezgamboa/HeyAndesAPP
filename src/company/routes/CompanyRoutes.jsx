import React from 'react'
import { CompanyNamePage, CompanyPage } from '../pages'
import { Navigate, Route, Routes } from 'react-router-dom';

export const CompanyRoutes = () => {
  return (
    <Routes>
        <Route path="/company" element={ <CompanyPage /> } />
        <Route path="/company_name/:com_id" element={ <CompanyNamePage /> } />
        <Route path="/*" element={ <Navigate to="/company" /> } />
    </Routes>
  )
}
