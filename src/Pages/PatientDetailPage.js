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
                <div className="col-md-6 col-6 no-padding">
                    <img className="h-50px" src="/Group 2.png" alt="logo..."/>
                </div>
                <div className="col-md-6 col-6 no-padding">
                    <div className="d-flex align-items-center justify-content-end">
    
                        <input className="landing-nav-btn p-1 mx-5" type = {"submit"} value = {"Logout"} onClick = {(e) => submitClickHandler(e)}/>

                    </div>                
                </div>
            </div>
            <div className="row no-margin">
                <div className="col-md-1 no-padding bg-blue">
                    <div className="d-flex align-items-center justify-content-around flex-column h-100vh">
                        <span className="text-white rotate-270">Self Help</span>
                        <span className="text-white rotate-270">Non Operative</span>
                    </div>
                </div>
                <div className="col-md-11 w-90">
                    <div className="frame-box-container mar-top-15px w-100">
                        <div className="d-flex">
                            <span className="bg-white border-radius-10 frame-box">Activity Modification</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="frame-box-container mar-top-15px w-75">
                            <div className="d-flex">
                                <span className="bg-white border-radius-10 frame-box m-left">Simple Excercises</span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-lg-end justify-content-start">
                        <div className="frame-box-container mar-top-15px w-lg-50 w-100 m-right">
                            <div className="d-flex">
                                <span className="bg-white border-radius-10 frame-box">Walking Aid / Simple Excercise Programmes</span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="frame-box-container mar-top-15px w-lg-25 w-75">
                            <div className="d-flex">
                                <span className="bg-white border-radius-10 frame-box">Well being</span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-lg-center justify-content-sm-startss justify-content-start">
                        <div className="frame-box-container mar-top-15px w-lg-75 w-100">
                            <div className="d-flex">
                                <span className="bg-white border-radius-10 frame-box">Pysiotherapy / Structure Excercise Programmmes</span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="frame-box-container mar-top-15px w-lg-50 w-75">
                            <div className="d-flex">
                                <span className="bg-white border-radius-10 frame-box">Hip replacement</span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-start">
                        <div className="frame-box-container mar-top-15px w-lg-50 w-75">
                            <div className="d-flex">
                                <span className="bg-white border-radius-10 frame-box">Glucosamine & chondroitin</span>
                            </div>
                        </div>
                    </div>
                    <div className="frame-box-container mar-top-15px">
                        <div className="d-flex">
                            <span className="bg-white border-radius-10 frame-box">Surface Replacement</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
