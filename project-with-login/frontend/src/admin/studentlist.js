import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";

const StudentData = () =>{
//define usesate
  const [students, setStudents] = useState([]);

//with user effect functionality access the data from end point
useEffect(() => {
  // Fetch student data from the server when the component mounts
  fetch('http://localhost:5000/getstudents')
    .then(response => response.json())
    .then(data => setStudents(data))
    .catch(error => console.error('Error fetching student data:', error));
}, []);


    return(
        <Container>
            <Row>
                <h1 className="display-6 text-center">Students Data</h1>
            </Row>

            <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Sno</th>
                  <th>Student Name</th>
                  <th>Age</th>
                  <th>Grade</th>
                 
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{student.sname}</td>
                    <td>{student.age}</td>
                    <td>{student.grade}</td>
                    
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
export default StudentData;