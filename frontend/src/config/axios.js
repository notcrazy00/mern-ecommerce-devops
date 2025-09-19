import axios from 'axios'

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:8000';
console.log('Using API base URL:', baseURL);

export const axiosi = axios.create({
    withCredentials: true, 
    baseURL: baseURL
})