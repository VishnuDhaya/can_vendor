import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { LandingPage } from '../Pages/LandingPage';
import { PatientDetailPage } from '../Pages/PatientDetailPage';

export function LoggedInRoutes(){
    return (
        <Routes>
            <Route path = "/" element = {<LandingPage />} />
            <Route path = "/patient_details" element = {<PatientDetailPage />} />
        </Routes>
    );
};
    