require('dotenv').config()
const mongoose = require("mongoose")

exports.connectToDB = async () => {
    // Fallback решение
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/mern-ecommerce';
    
    console.log('Connecting to MongoDB:', mongoUri);
    
    try {
        await mongoose.connect(mongoUri);
        console.log('connected to DB');
    } catch (error) {
        console.log('DB connection error:', error);
    }
}