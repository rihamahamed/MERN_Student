import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


function CreateStudent() {
  const [name, setName] = useState();
  const [gender, setGender] = useState("Male");
  const [email, setEmail] = useState();
  const [mobileNo, setMobileNo] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/student/", {
        name,
        gender,
        email,
        mobileNo,
      })
      .then((result) => {
        console.log(result);
        toast.success("Student enrolled successfully!");
        setTimeout(() => {
          navigate("/"); 
        }, 3000); 
      })
      .catch((err) => {
        console.log(err);
  
        toast.error("Failed to enroll student.");
      });
  };
  

  return (
    <div className="d-flex">
      <div className="p-3 bg-white rounded">
        <ToastContainer />
        <form onSubmit={Submit}>
          <h2>Enroll New Student</h2>
          <div className="mb-2">
            <label htmlFor="">Student Name</label>
            <input
              type="text"
              placeholder="Enter the Student Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Gender</label>
            <select
              className="form-control"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter the Student Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Mobile Number</label>
            <input
              type="tel"
              placeholder="Enter the Student Mobile Number"
              className="form-control"
              minLength={10}
              maxLength={10}
              onChange={(e) => setMobileNo(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-success" style={{ marginRight: "5px" }}>
            Submit
          </button>
          <button
            className="btn btn-warning"
            style={{ marginLeft: "5px" }}
            type="reset"
          >
            Clear
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateStudent;
