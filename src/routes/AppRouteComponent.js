import React from 'react';
import { LoggedInRoutes } from './LoggedInRoutes';
import { NotLoggedInRoutes } from './NotLoggedInRoutes';


export function AppRouteComponent({ isHasAuth }){
    return (
        <>
            { isHasAuth ? <LoggedInRoutes/> : <NotLoggedInRoutes /> }
        </>
    );
};

