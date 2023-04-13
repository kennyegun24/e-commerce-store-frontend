import axios from "axios";

const BASE_URL = 'http://localhost:3000/api/v1'

// const TOKEN = 'dsjfskskgbsjfu etjgeutetvrv'

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

// export const userRequest = axios.create({
//     baseURL: BASE_URL,
//     headers: { 'Authorization': `Bearer ${TOKEN}` }
// })