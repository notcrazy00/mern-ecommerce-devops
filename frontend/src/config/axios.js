import axios from 'axios'

// Хардкодиран базен URL за тестирање
const baseURL = 'http://localhost:8000';

console.log('Using API base URL:', baseURL);

export const axiosi = axios.create({
    withCredentials: true, 
    baseURL: baseURL
})