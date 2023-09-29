import axios from "axios"
import { useEffect, useState } from "react"
import { useParams  } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function UpdateStudent () {
  const {id} = useParams()
  const [name, setName] = useState()
  const [gender, setGender] = useState("Male")
  const [email, setEmail] = useState()
  const [mobileNo, setMobileNo] = useState()
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:4000/api/student/"+id)
    .then(result => {console.log(result)
    setName(result.data.name)
    setGender(result.data.gender)
    setEmail(result.data.email)
    setMobileNo(result.data.mobileNo)
})
    .catch(err => console.log(err))
}, [id])

const Update = (e) => {
  e.preventDefault();
        axios.patch("http://localhost:4000/api/student/"+id, {name,gender,email,mobileNo})
        .then((result) => {
            console.log(result);
            toast.success("Student data ubdate successfully!");
            setTimeout(() => {
              navigate("/"); 
            }, 3000); 
          })
          .catch((err) => {
            console.log(err);
      
            toast.error("Failed to data update student.");
          });
}

    return (
        <div>
      <div className="bg-white rounded">
      <ToastContainer />
        <form onSubmit={Update}>
          <h2>Update Student Details</h2>
          <div className="mb-2">
            <label htmlFor="">Student Name</label>
            <input
              type="text"
              placeholder="Enter the Student Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Gender</label>
            <select
              className="form-control"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
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
              value={email}
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
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-success" style={{marginRight: "5px"}}>Update</button>
          <button className="btn btn-warning" style={{marginLeft: "5px"}} type="reset">Clear</button>
        </form>
      </div>
    </div>
    )
}

export default UpdateStudent