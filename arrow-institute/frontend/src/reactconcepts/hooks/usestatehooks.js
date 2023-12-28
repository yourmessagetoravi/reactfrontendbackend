import React,{useState} from "react";
import './hooksstyles.css';


const Hooks = () =>{
    const [color,setCol] = useState("")

    const handleCol = (e)=>{
    setCol(e.target.value);
    
    }
        return(
            <div className="outerdiv">
         <div className="changeColordiv" style={{backgroundColor:color}}>
            
    
         </div>
         <input
         type="text"
         placeholder="enter color name"
         className="mystyle"
         onChange={handleCol}
         />
         </div>
        )
}



export default Hooks;