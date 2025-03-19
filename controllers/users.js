const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/user');

const verifyToken = require('../middleware/verify-token');

router.get('/', verifyToken, async (req, res) => {
  try {
    const users = await User.find({});

    res.json(users);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

router.get('/:userId', verifyToken, async (req, res) => {
  try {
    if (req.user._id !== req.params.userId) {
      return res.status(403).json({ err: "Unauthorized" });
    }

    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({ err: 'User not found.' });
    }

    res.json({ user });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

// GET	users	200	/users/:userId/employees	get index of employees
router.get('/:userId/employees', verifyToken, async (req, res) => {
  try {
    if (req.user._id !== req.params.userId) {
      return res.status(403).json({ err: "Unauthorized" });
    }

    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({ err: 'User not found.' });
    }

    const employees = user.employees;

    res.status(200).json({ employees });
  } catch (err) {
    console.log(err);
  }
})

// POST	users	201	/users/:userId/employees	create new employee	
router.post('/:userId/employees', verifyToken, async (req, res) => {
  try {
    if (req.user._id !== req.params.userId) {
      return res.status(403).json({ err: "Unauthorized" });
    }

    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({ err: 'User not found.' });
    }

    // permissions and files default to an array
    const { fullname, age, role, permissions = [], files = [] } = req.body;

    // make sure employees at least have these things
    // perms and files optional
    if (!fullname || !age || !role) {
      return res.status(400).json({ err: "Missing required employee fields" });
    }

    const newEmployee = {
      // creates a unique id from employee schema _id: true;
      fullname,
      age,
      role,
      permissions,
      files,
      // link employee directly to the MongoDB ObjectId instead of params
      user: user._id,
    };

    user.employees.push(newEmployee);
    await user.save();

    res.status(201).json({ employee: newEmployee, message: "Employee added successfully" });

  } catch (err) {
    console.log(err);
  }
});

// GET	users	200	/users/:userId/employees:employeeId	get one employee's details
router.get('/:userId/employees/:employeeId', verifyToken, async (req, res) => {
  try {
    if (req.user._id !== req.params.userId) {
      return res.status(403).json({ err: "Unauthorized" });
    }

    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ err: "User not found" });
    }

    // searches user.employees array of subdocuments for an employee where _id matches req.params.employeeId
    // when a req is made to /:userId/employees/:employeeId, Express extracts values from the url and stores them in req.params
    const employee = user.employees.id(req.params.employeeId);
    if (!employee) {
      return res.status(404).json({ err: "Employee not found" });
    }

    res.status(200).json({ employee });
  } catch (err) {
    console.log(err);
  }
});

// PUT	users	200	/users/:userId/employees:employeeId	edit an employee	
// DELETE	users	200	/users/:userId/employees:employeeId	delete an employee	
// GET	users	200	/users/:userId/missions/	get index of missions	
// GET	users	200	/users/:userId/missions/:missionId	get one mission's details	
// PUT	users	200	/users/:userId/missions/:missionId	edit an mission


module.exports = router;
