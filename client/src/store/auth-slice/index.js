const { createSlice } = require('@reduxjs/toolkit');



const initialState = {
    isAuthenticated: false,
    isloading: false,
    user: null,
}



const authSlice = createSlice({
  name: 'auth',
  initialState,
    reducers: {
        setUser: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        }
    },
})

export const { setUser } = authSlice.actions;
export default authSlice.reducer;