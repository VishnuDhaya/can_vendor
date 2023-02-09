import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { LandingPage } from '../Pages/LandingPage';

export function NotLoggedInRoutes(){
    return (
        <Routes>
            <Route path = "/" element = {<LandingPage />} />
            <Route path = "/patient_details" element = {<Navigate to={"/"}/>} />
        </Routes>
    );
};