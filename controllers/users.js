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

    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ err: err.message });
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
    res.status(500).json({ err: err.message });
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

    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

// PUT	users	200	/users/:userId/employees:employeeId	edit an employee
router.put('/:userId/employees/:employeeId', verifyToken, async (req, res) => {
  try {
    if (req.user._id !== req.params.userId) {
      return res.status(403).json({ err: "Unauthorized" });
    }

    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ err: "User not found" });
    }

    const employee = user.employees.id(req.params.employeeId);
    if (!employee) {
      return res.status(404).json({ err: "Employee not found" });
    }

    // destructure req.body into these variables
    const { fullname, age, role, permissions = [], files = [] } = req.body;

    // conditionally update the employee fields that are provided
    // IF fullname is provided, update the employee's fullname property with the new value, etc.
    if (fullname) employee.fullname = fullname;
    if (age) employee.age = age;
    if (role) employee.role = role;
    if (permissions) employee.permissions = permissions;
    if (files) employee.files = files;

    // save the updated user document with the updated employee
    await user.save();

    // res with the updated employee
    res.status(200).json({ employee, message: "Employee updated successfully" });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

	
// DELETE	users	200	/users/:userId/employees/:employeeId	delete an employee	
// TODO: deleting a file or permission from an employee...
router.delete('/:userId/employees/:employeeId', verifyToken, async (req, res) => {
  try {
    if (req.user._id !== req.params.userId) {
      return res.status(403).json({ err: "Unauthorized" });
    }

    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ err: 'User not found.' });
    }

    const employee = user.employees.id(req.params.employeeId);
    if (!employee) {
      return res.status(404).json({ err: 'Employee not found.' });
    }

    // can't use remove() method on subdocuments
    // need to use pull() to remove an element from an array
    // pull the employee out of the array
    user.employees.pull({ _id: req.params.employeeId });

    // save the updated user after an employee was deleted 
    await user.save();

    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

// GET	users	200	/users/:userId/missions/	get index of missions	
router.get('/:userId/missions', verifyToken, async (req, res) => {
  try {
    if (req.user._id !== req.params.userId) {
      return res.status(403).json({ err: "Unauthorized" });
    }

    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ err: 'User not found.' });
    }

    const missions = user.missions;

    res.status(200).json(missions);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }

});

// GET	users	200	/users/:userId/missions/:missionId	get one mission's details	
router.get('/:userId/missions/:missionId', verifyToken, async (req, res) => {
  try {
    if (req.user._id !== req.params.userId) {
      return res.status(403).json({ err: "Unauthorized" });
    }

    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ err: "User not found" });
    }

    const mission = user.missions.id(req.params.missionId);
    if (!mission) {
      return res.status(404).json({ err: "Mission not found" });
    }

    res.status(200).json(mission);
  } catch (err) {
    res.status(500).json({ err: err.message });
  };
});

// PUT	users	200	/users/:userId/missions/:missionId	edit an mission
router.put('/:userId/missions/:missionId', verifyToken, async (req, res) => {
  try {
    if (req.user._id !== req.params.userId) {
      return res.status(403).json({ err: "Unauthorized" });
    }

    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ err: "User not found" });
    }

    const mission = user.missions.id(req.params.missionId);
    if (!mission) {
      return res.status(404).json({ err: "Mission not found" });
    }

    const { isCompleted, report } = req.body;
   
    // TODO: ensure the user can only choose a boolean value... front end?
    if (isCompleted) mission.isCompleted = isCompleted;
    if (report) mission.report = report;

    await user.save();

    res.status(200).json({ mission, message: "Mission updated successfully" });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});



module.exports = router;
