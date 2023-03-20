import '../components/header.css';
import * as React from 'react';
import data from '../data.json'
import { useState } from 'react';

function AnimalOne() {

  let amount = data.animal1.length;
  let number = Math.floor(Math.random() * amount);

  const [num, setNum] = useState(0);
 
  function randomNumberInRange(min) {
  return Math.floor(Math.random() * min);
  number = num
  }

  const handleClick = () => {
    setNum(randomNumberInRange(amount));
    
  };
  return (
    <div>
      <div className="animalOne">
      <div className="imagep">
        <a href={data.animal1[number].link}><p className='credit'>{data.animal1[number].owner}</p></a>
            <img
              className="imga"
              src={data.animal1[number].url}
              onClick={handleClick}
            />
            <p className="text">{data.animal1[number].name}</p>
          </div>
      </div>
    </div>
  );
};

export default AnimalOne;