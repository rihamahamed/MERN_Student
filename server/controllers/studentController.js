const mongoose = require("mongoose");
const studentModel = require("../models/studentModel");

const createStudent = async (req, res) => {
  const { name, gender, email, mobileNo } = req.body;

  try {
    const student = await studentModel.create({
      name,
      gender,
      email,
      mobileNo,
    });
    res.status(200).json(student);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const getStudent = async (req, res) => {
  try {
    const student = await studentModel.find({});
    res.status(200).json(student);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const getSingleStudent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid Student Id" });
  }
  try {
    const singleStudent = await studentModel.findById(id);
    res.status(200).json(singleStudent);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const updateStudent = async(req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return  res.status(404).send('Invalid Student Id');
    }
    try {
        const student = await studentModel.findByIdAndUpdate(
          {
            _id: id,
          },
          {
            ...req.body,
          }
        );
        res.status(200).json(student);
      } catch (e) {
        res.status(400).json({ error: e.message });
      }
}

const deleteStudent = async(req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return  res.status(404).send('Invalid Student Id');
    }
    try {
        const student = await studentModel.findByIdAndDelete(id);
        res.status(200).json(student);
      } catch (e) {
        res.status(400).json({ error: e.message });
      }
}

module.exports = {
  createStudent,
  getStudent,
  getSingleStudent,
  updateStudent,
  deleteStudent
};
