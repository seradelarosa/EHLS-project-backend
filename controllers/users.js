const express = require('express');
const router = express.Router();

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
    if (req.user._id !== req.params.userId){
      return res.status(403).json({ err: "Unauthorized"});
    }

    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({ err: 'User not found.'});
    }

    res.json({ user });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

// GET	users	200	/users/:userId/employees	get index of employees
router.get('/:userId/employees', verifyToken, async (req, res) => {
  try {
    if (req.user._id !== req.params.userId){
      return res.status(403).json({ err: "Unauthorized"});
    }

    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({ err: 'User not found.'});
    }

    const employees = user.employees;

    res.status(200).json({employees});
  } catch (err) {
    console.log(err);
  }
})

// POST	users	201	/users/:userId/employees	create new employee	
router.post('/:userId/employees', verifyToken, async (req, res) => {
  try {
    if (req.user._id !== req.params.userId){
      return res.status(403).json({ err: "Unauthorized"});
    }

    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({ err: 'User not found.'});
    }

    // extract these values from req.body
    // permissions and files default to empty array
    const { fullname, age, role, permissions = [], files = []} = req.body;

    // make sure employees at least have these things
    // perms and files optional
    if (!fullname || !age || !role) {
      return res.status(400).json({ err: "Missing required employee fields" });
    }

    const newEmployee = {
      fullname,
      age,
      role,
      // defaults to empty array if not provided
      permissions,
      //defaults to empty array if not provided
      files, 
      user: req.params.userId,
    };

    user.employees.push(newEmployee);
    await user.save();

    res.status(201).json({ employee: newEmployee, message: "Employee added successfully" });

  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

// Route definitions

	

// GET	users	200	/users/:userId/employees:employeeId	get one employee's details	
// PUT	users	200	/users/:userId/employees:employeeId	edit an employee	
// DELETE	users	200	/users/:userId/employees:employeeId	delete an employee	
// GET	users	200	/users/:userId/missions/	get index of missions	
// GET	users	200	/users/:userId/missions/:missionId	get one mission's details	
// PUT	users	200	/users/:userId/missions/:missionId	edit an mission
