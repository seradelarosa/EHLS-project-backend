const mongoose = require('mongoose');

const missionSchema = new mongoose.Schema ({
  title: {
    type: String,
    // required: true
  },
  description: {
    type: String,
    // required: true
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  report: {
    type: [String]
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const employeeSchema = new mongoose.Schema ({
  fullname: {
    type: String,
    // required: true,
  },
  age: {
    type: Number,
    // required: true,
  },
  role: {
    type: String,
    // required: true,
  },
  permissions: {
    type: [String],
    // required: true,
  },
  files: {
    type: [String],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  missions: {
    type: [missionSchema],
    default: []
  },
  employees: {
    type: [employeeSchema],
    default: []
  }
});

// do not return hashed password in res
userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.hashedPassword;
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
