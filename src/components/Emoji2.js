import '../components/header.css';
import * as React from 'react';
import data from '../data.json'
import { useState } from 'react';

function Emoji2() {
    let amount4 = data.emoji.length;
    let number4 = Math.floor(Math.random() * amount4);
  
    const [num4, setNum4] = useState(0);
   
    function randomNumberInRange4(min) {
    return Math.floor(Math.random() * min);
    number4 = num4
    }
  
    const handleClick4 = () => {
      setNum4(randomNumberInRange4(amount4));
      
    };
    return (
      <div>
        <div className="Emoji1">
        <img
              className="emoji"
              src = {data.emoji[number4].url}
              width="75"
              height="75"
              onClick={handleClick4}
            />
        </div>
      </div>
    );
  };
  
  export default Emoji2;