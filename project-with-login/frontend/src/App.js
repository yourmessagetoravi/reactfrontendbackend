import React,{useState} from "react";

import Layout from "./general/layout";
import 'react-bootstrap/dist/react-bootstrap.min.js';
// import { BrowserRouter,Route,Routes} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Home from "./general/home";
import About from "./general/about";
import Contact from "./general/contact";

import Facebookfeed from "./case-studies/facebookfeed";
import Netflix from "./case-studies/netflix";
import Wetherapp from "./case-studies/wetherapp";

//concepts
import Props from "./reactconcepts/props";
import Conditions from "./reactconcepts/conditionalrender";


//hooks
import Hooks from "./reactconcepts/hooks/usestatehooks";
import UseeffectHook from "./reactconcepts/hooks/useeffect";

import Usecallbackhook from "./reactconcepts/hooks/usecallback";
import Usecontexthook from "./reactconcepts/hooks/usecontext";
import Useeffecthook from "./reactconcepts/hooks/useeffect";
import Usememohook from "./reactconcepts/hooks/usememo";
import Usereducerhook from "./reactconcepts/hooks/usereducer";
import Userefhook from "./reactconcepts/hooks/useref";
import Customhook from "./reactconcepts/hooks/customhook";

//casestudies
import Caluculator from "./case-studies/caluculator";
import ProductList from "./case-studies/Productlist";
import ShoppingCart from "./case-studies/shoppingCart";

//login and logout components
import Register from "./loginpages/register";
import Login from "./loginpages/login";

//admindashboad import
import Admindashboard from "./admin/admin";
import StudentData from "./admin/studentlist";
function App() {
  const user = JSON.parse(localStorage.getItem('user'));

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product, quantity) => {
    const existingCartItem = cart.find(item => item.product.id === product.id);

    if (existingCartItem) {
      setCart(prevCart =>
        prevCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart(prevCart => [...prevCart, { product, quantity }]);
    }
  };

  const handleRemoveFromCart = productId => {
    const updatedCart = cart.filter(item => item.product.id !== productId);
    setCart(updatedCart);
  };
  return (
 
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />


        <Route path="/props" element={<Props />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/calc" element={<Caluculator/>}/>

        <Route path="/hooks" element={<Hooks />} />
        <Route path="/useeffecthook" element={<Useeffecthook />} />
        <Route path="/usecallbackhook" element={<Usecallbackhook />} />
        <Route path="/usecontexthook" element={<Usecontexthook/>}/>
        <Route path="/useeffecthook" element={<UseeffectHook/>}/>
        <Route path="/usememohook" element={<Usememohook/>}/>
        <Route path="/usereducerhook" element={<Usereducerhook/>}/>
        <Route path="/userefhook" element={<Userefhook/>}/>
        <Route path="/customhook" element={<Customhook />} />

        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route
        path="/admin"
        element={user ? <Admindashboard /> : <Navigate to="/login" />}
      />
        <Route path="/studentdata" element={<StudentData />}/>
        

    

       


<Route
path="/products"
element={<ProductList onAddToCart={handleAddToCart} />}
/>

        
      
<Route
          path="/cart"
          element={<ShoppingCart cart={cart} onRemoveFromCart={handleRemoveFromCart} />}
        />

       
        <Route path="/facebook" element={<Facebookfeed />} />
        <Route path="/netflix" element={<Netflix />} />
        <Route path="/wether" element={<Wetherapp />} />
        <Route path="/wether" element={<Wetherapp />} />
      </Routes>
    </Router>
 
  );
}

export default App;
