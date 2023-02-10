import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserIdentity } from '../redux/reducer/userSpecificSlice';



export const LandingPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userEntry, setUserEntry] = useState({"email": "", "password": ""})
    let email = "adminc2d@gmail.com"
    let password = "Password*123"

    const userEntryHandler = (val, key) => {
      setUserEntry({
        ...userEntry,
        [key]: val
      });
    }

    const submitClickHandler = async (e) => {
        e.preventDefault()
        if(email === userEntry.email && password === userEntry.password){   
            dispatch(setUserIdentity())
            navigate('/patient_details')
        }else{
            alert("Credentials invalid")
        }
      }
    

    return(
        <>
            <div className="row no-margin align-items-center">
                <div className="col-6 no-padding">
                    <img className="h-50px" src="/Group 2.png" alt="logo..."/>
                </div>
                <div className="col-6 no-padding">
                    <div className="d-flex align-items-center justify-content-end">
                        <div className="p-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="user.png" alt="user..."/>
                            <span className="ps-2">Login</span>
                        </div>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <div className="d-flex flex-column px-4 py-2">  
                                <span className="my-2">Email ID</span>                          
                                <input className="p-1 mb-2 login-input" id="email" value = {userEntry.email} onChange={(e) => userEntryHandler(e.target.value, "email")}/>
                                <span className="my-1">Password</span>   
                                <input className="p-1 mt-1 mb-2 login-input" type = "password" id="password" value = {userEntry.password} onChange = {(e) => userEntryHandler(e.target.value, "password")} />
                                <input className="landing-nav-btn p-1 w-100 mt-1" type = {"submit"} value = {"Login"} onClick = {(e) => submitClickHandler(e)}/>
                                <button className="landing-nav-btn p-1 w-100 d-block d-md-none mt-2">Free Trial</button> 
                            </div>                      
                        </div>
                        <button className="landing-nav-btn p-1 mx-5 d-none d-md-block">Free Trial</button>
                    </div>                
                </div>
            </div>
            <div className="row no-margin align-items-center">
                <div className="col-md-6 col-xs-12 no-padding mt-res">
                    <div className="mw-300 m-auto">            
                        <h1>Mindfullness For Everyone, Anywhere</h1> 
                        <p className="text-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...</p>
                        <button className="landing-nav-btn px-3 py-1 w-50 mt-1 bg-color-gray text-white">Try for free</button> 
                    </div>                          
                </div>
                <div className="col-md-6 col-xs-12 no-padding position-relative mt-res">
                    <img className="w-100" src="/banner.png" alt="banner..."/>
                    <div className="banner-person-position position-absolute banner-person-box">
                        <img src="/banner_person.png" alt="bannerperson..." className="w-100"/>
                    </div>
                </div>
            </div>
        </>
    );
};
