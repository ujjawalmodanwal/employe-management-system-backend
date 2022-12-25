const Employes = require ("../models/employeModel.js");
const asyncHandler = require ("express-async-handler");

// @desc    Get logged in user notes
// @route   GET /api/notes
// @access  Private
const getAllEmployes = asyncHandler(async (req, res) => {
  const employes = await Employes.find({});
  res.json(employes);
});



//@description     Create single Note
//@route           GET /api/notes/create
//@access          Private
const AddEmploye = asyncHandler(async (req, res) => {
  const { employeId, firstName, lastName, emailId, contact } = req.body;
  const employe = await Employes.find({employeId:employeId});
  if (!firstName || !lastName || !emailId || !contact || !employeId) {
    res.status(400);
    throw new Error("Please Fill all the fields!");
  }
  else if(employe[0]){
    res.status(400);
    throw new Error("EmployeId already exist!");
  }
  else {
    const employe = new Employes({employeId, firstName,lastName,emailId,contact});
    const addedEmploye = await employe.save();
    res.status(201).json(addedEmploye);
  }
});

//@description     Delete single Note
//@route           GET /api/notes/:id
//@access          Private
const DeleteEmploye = asyncHandler(async (req, res) => {
  const employe = await Employes.find({employeId:req.params.id});
  if (employe[0]) {
    await employe[0].remove();
    res.json({ message: "Employe deleted!" });
  } else {
    res.status(404);
    throw new Error("Employe not Found!");
  }
});

// @desc    Update a note
// @route   PUT /api/notes/:id
// @access  Private
const UpdateEmploye = asyncHandler(async (req, res) => {
  const { employeId, firstName, lastName, emailId, contact } = req.body;
  const employe = await Employes.find({employeId:req.params.id});
  if (employe[0]) {
    employe[0].firstName = firstName;
    employe[0].lastName = lastName;
    employe[0].emailId = emailId;
    employe[0].contact = contact;
    employe[0].employeId = employeId;
    const updatedEmploye = await employe[0].save();
    res.json(updatedEmploye);
  } else {
    res.status(404);
    throw new Error("Employe not found!");
  }
});

module.exports = { getAllEmployes, AddEmploye, DeleteEmploye, UpdateEmploye };