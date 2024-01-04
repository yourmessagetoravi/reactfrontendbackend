import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate correctly
import axios from 'axios';
import "./stylesheet.css";
import { Link } from 'react-router-dom';

const Register = () => {

  //use the usestate:
  
    const [formData, setFormData] = useState({
      username: '',
      password: '',
    });

    const navigate = useNavigate(); // Use the correct hook name

    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    };

//executing the Registration process

const handleRegister = async () => {
  try {
    const response = await axios.post('http://localhost:5000/register', formData);

    if (response.status === 200) {
      navigate('/login'); // Use navigate instead of history.push
    } else {
      console.log(response.data.error);
    }
  } catch (error) {
    console.error('Error during registration:', error);
  }
};

  return (
<form action="/action_page.php">
  <div className="registrationpage">
    <h1>Register</h1>
   
    <hr/>

    <label htmlFor="email"><b>Email</b></label>
    <input 
    type="text" 
    placeholder="Enter Email" 
    name="email" id="email" 
    required
    onChange={handleInputChange}
    />

    <label htmlFor="psw"><b>Password</b></label>
    <input 
    type="password" 
    placeholder="Enter Password" 
    name="psw" 
    id="psw" 
    required
    onChange={handleInputChange}/>

    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
    <hr/>
        <button type="submit" className="registerbtn" onClick={handleRegister}>Register</button>
  </div>
  
  <div className="registrationpage signin">
    <p>Already have an account? <Link to="/login">Sign in</Link>.</p>
  </div>
</form>

  );
}
export default Register;

