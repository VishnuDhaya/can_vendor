import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loggedIn: false,
}

const UserSpecificSlice = createSlice({
    name: 'userDetailsSlice',
    initialState,
    reducers: {
        setUserIdentity: (state) => {
            return {
                ...state,
                loggedIn: true,
            }
        },
        removeUserIdentity: (state) => {
            return {
                ...state,
                loggedIn: false,
            }
        }
    },
    
});

export const { setUserIdentity, removeUserIdentity } = UserSpecificSlice.actions;
export default UserSpecificSlice.reducer;