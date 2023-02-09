import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUserIdentity } from '../redux/reducer/userSpecificSlice';


export function PatientDetailPage(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitClickHandler = async (e) => {
        e.preventDefault()   
        dispatch(removeUserIdentity())
        navigate('/')
      }

    return (
        <div>
            <div className="row no-margin align-items-center">
                <div className="col-md-6 no-padding">
                    <img className="h-50px" src="/Group 2.png" alt="logo..."/>
                </div>
                <div className="col-md-6 no-padding">
                    <div className="d-flex align-items-center justify-content-end">
    
                        <input className="landing-nav-btn p-1 mx-5" type = {"submit"} value = {"Logout"} onClick = {(e) => submitClickHandler(e)}/>

                    </div>                
                </div>
            </div>
             <img src = "/patient_detail_image.png"/>
        </div>
    );
};
