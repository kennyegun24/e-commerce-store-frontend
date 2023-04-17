import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchOrders = createAsyncThunk('order/fetchOrders', async (TOKEN) => {
    const BASE_URL = 'http://localhost:3000/api/v1'
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': `Bearer ${TOKEN}` }
    })
    const get = await userRequest.get('store/orders')
    delete get.headers
    return get.data
})

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orders: [],
        status: false,
        total: 0
    },
    reducers: {},
    extraReducers(reducer) {
        reducer
            .addCase(fetchOrders.pending, (state) => {
                const isFulfilled = state;
                isFulfilled.status = 'Pending';
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                const isFulfilled = state;
                isFulfilled.status = 'Fulfilled';
                isFulfilled.total = action.payload.data.length > 1 ? action.payload.data.map((one) => one.quantity).reduce((a, b) => a + b) : 0
                isFulfilled.orders = action.payload.data;
            })
    }

})

export default orderSlice.reducer;