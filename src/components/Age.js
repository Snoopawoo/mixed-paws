import '../components/header.css';
import * as React from 'react';
import data from '../data.json'
import { useState } from 'react';

function Age() {
    let amountAge = data.age.length;
    let RAge = Math.floor(Math.random() * amountAge);
  
    const [Age, setAge] = useState(0);
   
    function randomAge(min) {
    return Math.floor(Math.random() * min);
    RAge = Age
    }
  
    const handleClickAge = () => {
      setAge(randomAge(amountAge));
      
    };
    return (
      <div>
        <div className="Age">
        <p className="mod" onClick={handleClickAge}>{data.age[RAge].ID}</p>
        </div>
      </div>
    );
  };
  
  export default Age;