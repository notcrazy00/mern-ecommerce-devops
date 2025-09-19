require('dotenv').config()
const jwt = require('jsonwebtoken')

exports.generateToken = (payload, passwordReset = false) => {
    // Додајте fallback за сите environment variables
    const secretKey = process.env.SECRET_KEY || 'mern-secret-key-2024';
    const loginExpiration = process.env.LOGIN_TOKEN_EXPIRATION || '30d';
    const resetExpiration = process.env.PASSWORD_RESET_TOKEN_EXPIRATION || '2m';
    
    return jwt.sign(payload, secretKey, {
        expiresIn: passwordReset ? resetExpiration : loginExpiration
    });
}