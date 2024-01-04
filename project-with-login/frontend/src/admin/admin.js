import React,{useState,useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

//form related
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const Admindashboard = ()=>{
//set the form state:
const [formData, setFormData] = useState({
  sname: "",
  age: 15, // Set a default age value
  grade: "",
});

const [allStudents, setAllStudents] = useState([]);
const [editingMode, setEditingMode] = useState(false);
const [editingStudentId, setEditingStudentId] = useState(null);

useEffect(() => {
  // Fetch data when the component mounts
  fetchStudents();
}, []);

  // first we need to fetch the available record in database
  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/getstudents');
      setAllStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error.message);
    }
  };

//setFormData function execution from useState
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};


const handleFormSubmit = async (e) => {
  e.preventDefault();

  try {
    let response;

    if (editingMode) {
      // Update the existing student
      response = await axios.put(`http://localhost:5000/updatestudent/${editingStudentId}`, formData);
      setEditingMode(false);
      setEditingStudentId(null);
    } else {
      // Add a new student
      response = await axios.post('http://localhost:5000/addstudent',formData); 
    }

    if (response.status === 200 || response.status === 201) {
      // Update the table with the latest data
      fetchStudents();
      // Optionally, you can reset the form
      setFormData({
        sname: "",
        age: 15,
        grade: "",
      });
    } else {
      console.error('Failed to add/update student');
    }
  } catch (error) {
    console.error('Error adding/updating student:', error.message);
  }
};



  //access the post end point from server execute the functionality
  //  const handleFormSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch('http://localhost:5000/addstudent', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log("Student added successfully", data);
  //       alert("Student added Successfully")
  //       // Optionally, you can update the state or perform other actions after adding the student
  //     } else {
  //       console.error('Failed to add student');
  //     }
  //   } catch (error) {
  //     console.error('Error adding student:', error.message);
  //   }
  // };


  const handleEditClick = (studentId) => {

    setEditingMode(true);
    setEditingStudentId(studentId);
    // Find the student by ID and populate the form for editing
    const editingStudent = allStudents.find((student) => student._id === studentId);

    if (editingStudent) {
          // Populate the form with the selected student's data
      setFormData({
        sname: editingStudent.sname,
        age: editingStudent.age,
        grade: editingStudent.grade,
      });
    }
  };

  //delete functionality
  const handleDeleteClick = async (studentId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/deletestudent/${studentId}`);

      if (response.status === 200) {
        // Update the table with the latest data after deletion
        fetchStudents();
      } else {
        console.error('Failed to delete student');
      }
    } catch (error) {
      console.error('Error deleting student:', error.message);
    }
  };

    return(
      <Container>
        <Row>
            <h1 className="display-5 text-center">
                Admin Dashboard
            </h1>
        </Row>

        <Row className="mt-2">
            <h3 className="text-center">Add the Student</h3>
        </Row>
    
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Student name"
                name="sname"
                value={formData.sname}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your age"
                min={15}
                max={80}
                name="age"
                value={formData.age}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicGrade">
              <Form.Label>Grade</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your grade"
                name="grade"
                value={formData.grade}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={3}></Col>
      </Row>

        {/* <Row className="mt-2">
            <h3 className="text-center">Edit the Student Record</h3>
        </Row>
        <Row>
            <Col md={2}></Col>
            <Col md={8}>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Student Name</th>
          <th>Age</th>
          <th>Grade</th>
          <th>Edit/Update</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>
          <ul class="list-inline m-0">
            <li class="list-inline-item">
                      <button class="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-edit"></i></button>
            </li>
            <li class="list-inline-item">
                <button class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash"></i></button>
            </li>
          </ul>
          </td>
        </tr>
 
      
      </tbody>
    </Table>

            </Col>
            <Col md={2}></Col>
        </Row> */}

<Row className="mt-2">
        <h3 className="text-center">Edit the Student Record</h3>
      </Row>
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sno</th>
                <th>Student Name</th>
                <th>Age</th>
                <th>Grade</th>
                <th>Edit/Update</th>
              </tr>
            </thead>
            <tbody>
              {allStudents.map((student, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{student.sname}</td>
                  <td>{student.age}</td>
                  <td>{student.grade}</td>
                  <td>
                    <ul className="list-inline m-0">
                      <li className="list-inline-item">
                        <button
                          className="btn btn-success btn-sm rounded-0"
                          type="button"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Edit"
                          onClick={() => handleEditClick(student._id)}
                        >
                          <i className="fa fa-edit"></i>
                        </button>
                      </li>
                      <li className="list-inline-item">
                        <button
                          className="btn btn-danger btn-sm rounded-0"
                          type="button"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Delete"
                          onClick={() => handleDeleteClick(student._id)}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </li>
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col md={2}></Col>
      </Row>
      </Container>
    )
}
export default Admindashboard;