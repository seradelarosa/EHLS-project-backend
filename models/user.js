const mongoose = require('mongoose');

const missionSchema = new mongoose.Schema ({
  title: {
    type: String,
  },
  description: {
    type: String,
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
// Ensure _id is generated for mission subdocuments
}, { _id: true });

const employeeSchema = new mongoose.Schema ({
  fullname: {
    type: String,
  },
  age: {
    type: Number,
  },
  role: {
    type: String,
  },
  permissions: {
    type: [String],
  },
  files: {
    type: [String],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
  // Ensure _id is generated for employee subdocuments
}, { _id: true });

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
