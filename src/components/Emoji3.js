import '../components/header.css';
import * as React from 'react';
import data from '../data.json'
import { useState } from 'react';

function Emoji3() {
    let amount5 = data.emoji.length;
    let number5 = Math.floor(Math.random() * amount5);
  
    const [num5, setNum5] = useState(0);
   
    function randomNumberInRange5(min) {
    return Math.floor(Math.random() * min);
    number5 = num5
    }
  
    const handleClick5 = () => {
      setNum5(randomNumberInRange5(amount5));
      
    };
    return (
      <div>
        <div className="Emoji1">
        <img
              className="emoji"
              src = {data.emoji[number5].url}
              width="75"
              height="75"
              onClick={handleClick5}
            />
        </div>
      </div>
    );
  };
  
  export default Emoji3;