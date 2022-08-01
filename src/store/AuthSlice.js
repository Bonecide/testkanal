import { createSlice } from '@reduxjs/toolkit'
const templateState = JSON.parse (localStorage.getItem('isAuthHere'))
const initialState = {
    isAuth : templateState ? templateState : false
}

export const authSlice = createSlice({
    
    name: 'auth',
    initialState,
    reducers : {
       setAuth : (state) => {
            state.isAuth = true
            localStorage.setItem('isAuthHere' , JSON.parse(true))
       },
       deleteAuth : (state) => {
            state.isAuth = false
            localStorage.setItem('isAuthHere' , JSON.parse(false))
        }

    }
});
export const { setAuth,deleteAuth } = authSlice.actions

export default authSlice.reducer