import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    profile: {},
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserMiniProfile: (state, action) => {
            state.profile = action.payload;
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUserMiniProfile, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer;