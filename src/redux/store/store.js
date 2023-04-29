import axios from "axios"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { userRequest } from "../../allRequests"

export const getStore = createAsyncThunk('stores/getOwnerStores', async (TOKEN) => {
    const BASE_URL = 'http://localhost:4000/api/v1'
    // const TOKEN = currentUser.data.token
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': `Bearer ${TOKEN}` }
    })
    const get = await userRequest.get('store/show')
    delete get.headers
    return get.data
})

const storeSlice = createSlice({
    name: 'store',
    initialState: {
        products: [],
        status: null
    },
    reducers: {},
    extraReducers(reducer) {
        reducer
            .addCase(getStore.pending, (state, action) => {
                const isFulfilled = state;
                isFulfilled.status = 'Pending';
            })
            .addCase(getStore.fulfilled, (state, action) => {
                const isFulfilled = state;
                isFulfilled.status = 'Fulfilled';
                isFulfilled.products = action.payload.data;
            })
    }
})

export default storeSlice.reducer