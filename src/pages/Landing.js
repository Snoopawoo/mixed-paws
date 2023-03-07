import React from 'react';
import Header from '../components/Header';
import '../pages/landing.css';

function Landing() {
    return (
      <div className='fscreen'>
        <div className='base'>
          <div className='head'>
          <Header/>
          </div>
          <div className='images'>
          </div>
          <div className='images'>
            <div className='imagep'>
            <img className='imga'src="https://images.immediate.co.uk/production/volatile/sites/23/2023/01/Banded-mongoose-32608ec.jpg" alt="Girl in a jacket" width="300" height="300"/>
            <p>Monguse</p>
            </div>
            <p className='pp'>Mixed with</p>
            <div className='imagep'>
            <img className='imga' src="https://images.immediate.co.uk/production/volatile/sites/23/2023/01/Banded-mongoose-32608ec.jpg" alt="Girl in a jacket" width="300" height="300"/>
            <p>Monguse 2 electric boogaloo</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Landing;