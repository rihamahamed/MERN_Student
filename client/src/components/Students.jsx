/* eslint-disable react/jsx-key */
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import * as icons from 'react-bootstrap-icons'
import { ToastContainer, toast } from "react-toastify";

function Students () {
    const [students, setStudents] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4000/api/student/")
        .then(result => setStudents(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) =>{
        const confirmDelete = window.confirm("Are you sure you want to delete this student?");
  if (confirmDelete) {
        axios.delete("http://localhost:4000/api/student/"+id)
        .then((result) => {
            console.log(result);
            toast.success("Student data delete successfully!");
            setTimeout(() => {
                window.location.reload(); 
            }, 3000); 
          })
          .catch((err) => {
            console.log(err);
      
            toast.error("Failed to data delete student.");
          });
    }
};

    return (
        <div >
                  <div className="p-3 bg-white rounded ">
            <ToastContainer />
            <div className="d-flex justify-content-end">
                <Link to='/create' className="btn btn-outline-secondary" style={{ margin: "5px" }} >Enroll Student <icons.PlusCircle /></Link>
                </div>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Mobile No</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((student,index) => {
                                return <tr key={student._id}>
                                    <td>{index + 1}</td>
                                    <td>{student.name}</td>
                                    <td>{student.gender}</td>
                                    <td>{student.email}</td>
                                    <td>{student.mobileNo}</td>
                                    <td>
                                    <Link to={`/update/${student._id}`} className="btn btn-success"><icons.PencilSquare /></Link>
                                    <button className="btn btn-danger" style={{ margin: "5px" }} onClick={() => handleDelete(student._id)} ><icons.Trash /></button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                
            </div>
        </div>
    )
}
export default Students