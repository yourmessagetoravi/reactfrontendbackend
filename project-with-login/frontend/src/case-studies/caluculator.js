import React,{useState} from "react";
import "./cssfiles/calc.css";

const Caluculator = () =>{
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        switch (value) {
          case '=':
            try {
              setResult((eval(result)).toString());
            } catch (error) {
              setResult('Error');
            }
            break;
    
          case 'C':
            setResult('');
            break;
    
          case 'DEL':
            setResult(result.slice(0, -1));
            break;
    
          default:
            setResult((prevResult) => prevResult + value);
            break;
        }
      };

  // logic ends here

  return (
    <div className="calc">
      <input type="text" id="res" value={result} readOnly />
      <div id="calc">
        <div className="nums">
          {[7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0, 'C'].map((num) => (
            <div key={num} onClick={() => handleButtonClick(num)}>
              {num}
            </div>
          ))}
        </div>
        <div className="ope">
          {['DEL', '+', '-', '*', '/','='].map((operator) => (
            <div key={operator} onClick={() => handleButtonClick(operator)}>
              {operator}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Caluculator;