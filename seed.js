//required mongoose 
const mongoose = require('mongoose');

require('./config/database');

  // seeded the userdata 
const userMl = require('./models/user')
const userData = require('./userData');

userMl.deleteMany({},(err,result) => console.log(result)); 

  userMl.create(userData, function (err, user) {
      console.log(user)
      mongoose.connection.close();
  });

// seeded the apptdata 
const apptMl = require('./models/appointment')
const apptData = require('./apptData');

apptMl.deleteMany({},(err, result) => console.log(result)); 

  apptMl.create(apptData, function (err,appt ) {
    console.log(appt)
      mongoose.connection.close();
  });
