import axios from 'axios'

const baseURL = process.env.REACT_APP_API_URL || 'http://mern-ecommerce.local:8080/api';
console.log('Using API base URL:', baseURL);

export const axiosi = axios.create({
    withCredentials: true, 
    baseURL: baseURL
})