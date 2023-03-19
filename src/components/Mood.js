import '../components/header.css';
import * as React from 'react';
import data from '../data.json'
import { useState } from 'react';

function Mood() {
    let amountMood = data.mood.length;
    let RMood = Math.floor(Math.random() * amountMood);
  
    const [Mood, setMood] = useState(0);
   
    function randomMood(min) {
    return Math.floor(Math.random() * min);
    RMood = Mood
    }
  
    const handleClickMood = () => {
      setMood(randomMood(amountMood));
      
    };
    return (
      <div>
        <div className="Mood">
        <p className="mod" onClick={handleClickMood}>{data.mood[RMood].ID}</p>
        </div>
      </div>
    );
  };
  
  export default Mood;