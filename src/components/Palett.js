import '../components/header.css';
import * as React from 'react';
import { useState } from 'react';

function Palett() {
    const colors = require('nice-color-palettes/1000');
    let pn = Math.floor(Math.random() * colors.length);
    const coloursamount = colors.length;
    const [p, setp] = useState(0);
   
    function randomp(min) {
    return Math.floor(Math.random() * min);
    pn = p;
    }
  
    const handleClickp = () => {
      setp(randomp(coloursamount));
      
    };
    return (
      <div className='cpd'>
            <div className='cpdc'>
            <div className='cp' onClick={handleClickp}
                style={{
                backgroundColor: colors[pn][0],
                width: '100px',
                height: '100px'
              }}
              ></div>
              <p className='ptext'>{colors[pn][0]}</p></div>
              <div className='cpdc'>
            <div className='cp' onClick={handleClickp}
                style={{
                backgroundColor: colors[pn][1],
                width: '100px',
                height: '100px'
              }}
              ></div>
              <p className='ptext'>{colors[pn][1]}</p></div>
              <div className='cpdc'>
            <div className='cp' onClick={handleClickp}
                style={{
                backgroundColor: colors[pn][2],
                width: '100px',
                height: '100px'
              }}
              ></div>
              <p className='ptext'>{colors[pn][2]}</p></div>
              <div className='cpdc'>
            <div className='cp' onClick={handleClickp}
                style={{
                backgroundColor: colors[pn][3],
                width: '100px',
                height: '100px'
              }}
              ></div>
              <p className='ptext'>{colors[pn][3]}</p></div>
              <div className='cpdc'>
            <div className='cp' onClick={handleClickp}
            style={{
            backgroundColor: colors[pn][4],
            width: '100px',
            height: '100px'
          }}
        ></div>
        <p className='ptext'>{colors[pn][4]}</p></div>
      </div>
    );
  };
  
  export default Palett;