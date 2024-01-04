
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate correctly
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./stylesheet.css";




const Login = () => {

  // Access login form data
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Use the correct hook for navigation
  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

    // Handle login functionality
    const handleLogin = async () => {
      try {
        const response = await axios.post('http://localhost:5000/login', formData);
  
        if (response.status === 200) {
          // Store user information in client-side storage
          localStorage.setItem('user', JSON.stringify(response.data.user));
          // Redirect to the admin page using navigate
          navigate('/admin');
        } else {
          console.log(response.data.error);
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    };

  return (
    <form action="/action_page.php">
    <div className="registrationpage">
      <h1 className='text-center'>Login</h1>
     
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
  
            <hr/>
          <button type="submit" className="registerbtn" onClick={handleLogin}>Register</button>
    </div>
    
    <div className="registrationpage signin">
      <p>If you dont have an account? <Link to="/register">Sign up</Link>.</p>
    </div>
  </form>

  );
}

export default Login;