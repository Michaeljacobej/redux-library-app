import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState:{
        user:null,
    },
    reducers : {
      
        login(state,action){
          return{
            ...state,  
            isAuth:true,
            user:action.payload
          }
        }, 
        
        logout(state,action){
          
          return{
          ...state,
          isAuth : false,
          user: null
            }
        },
        
    },
})







export const {login , logout} = userSlice.actions

export default userSlice.reducer;