import { configureStore } from '@reduxjs/toolkit';
import userSpecificSlice from './reducer/userSpecificSlice';

export default configureStore({
    reducer: {
        userDetailsState: userSpecificSlice
    }
}); 
