import '../components/header.css';
import * as React from 'react';
import data from '../data.json'
import { useState } from 'react';

function Emoji1() {
    let amount3 = data.emoji.length;
    let number3 = Math.floor(Math.random() * amount3);
  
    const [num3, setNum3] = useState(0);
   
    function randomNumberInRange3(min) {
    return Math.floor(Math.random() * min);
    number3 = num3
    }
  
    const handleClick3 = () => {
      setNum3(randomNumberInRange3(amount3));
      
    };
    return (
      <div>
        <div className="Emoji1">
        <img
              className="emoji"
              src = {data.emoji[number3].url}
              width="75"
              height="75"
              onClick={handleClick3}
            />
        </div>
      </div>
    );
  };
  
  export default Emoji1;