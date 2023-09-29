const express = require("express");

const router = express.Router();

const {
  createStudent,
  getStudent,
  getSingleStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

router.post("/", createStudent);
router.get("/", getStudent);
router.get("/:id", getSingleStudent);
router.patch('/:id',updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
