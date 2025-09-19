require('dotenv').config();
const mongoose = require('mongoose');

// Поврзете се со базата
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mern-ecommerce')
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Најдете ги сите users
    const User = mongoose.model('User', new mongoose.Schema({}, { strict: false }));
    const users = await User.find({});
    
    console.log('\n=== Users in database ===');
    console.log('Total users:', users.length);
    
    if (users.length === 0) {
      console.log('No users found! Did you run the seed script?');
    } else {
      users.forEach((user, index) => {
        console.log(`\n${index + 1}. Email: ${user.email}`);
        console.log(`   Username: ${user.username || 'N/A'}`);
        console.log(`   ID: ${user._id}`);
        console.log(`   Has password: ${user.password ? 'Yes' : 'No'}`);
      });
    }
    
    // Проверете дали demo корисникот постои
    const demoUser = await User.findOne({ email: 'demo@gmail.com' });
    console.log('\n=== Demo user check ===');
    if (demoUser) {
      console.log('✅ Demo user EXISTS in database');
      console.log('   Email:', demoUser.email);
      console.log('   Username:', demoUser.username);
    } else {
      console.log('❌ Demo user NOT FOUND in database');
      console.log('   Try running: npm run seed');
    }
    
    process.exit(0);
  })
  .catch(err => {
    console.error('Database connection error:', err);
    process.exit(1);
  });
