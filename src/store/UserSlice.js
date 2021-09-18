import { createSlice } from '@reduxjs/toolkit'

const initialValue = [
    {
        fname: "",
        email: "",
        nomor: "",
        negara: "Selected",
        bio: ""
    }]

export const UserSlice = createSlice({
    name: "databaru",
    initialState: {
        userdata: initialValue
    },

    reducers: {
        passData: (state, action) => {
            const newData = {
                ...action.payload
            }
            state.userdata = [...state.userdata, newData]
        }
    }
})

export const { passData } = UserSlice.actions;
export default UserSlice.reducers;