import '../components/header.css';
import * as React from 'react';
import data from '../data.json'
import { useState } from 'react';

function AnimalTwo() {

  let amount2 = data.animal1.length;
  let number2 = Math.floor(Math.random() * amount2);

  const [num2, setNum2] = useState(0);
 
  function randomNumberInRange2(min) {
  return Math.floor(Math.random() * min);
  number2 = num2
  }

  const handleClick2 = () => {
    setNum2(randomNumberInRange2(amount2));
    
  };
  return (
    <div>
      <div className="animalTwo">
      <div className="imagep">
            <img
              className="imga"
              src={data.animal1[number2].url}
              onClick={handleClick2}
            />
            <p className="text">{data.animal1[number2].name}</p>
          </div>
      </div>
    </div>
  );
};

export default AnimalTwo;