import React from "react";
import Header from "../components/Header";
import "../pages/landing.css";

function Landing() {
  let img1 = 'https://images.immediate.co.uk/production/volatile/sites/23/2023/01/Banded-mongoose-32608ec.jpg';
  //img1 = img1roll;
  let img2 = 'https://images.immediate.co.uk/production/volatile/sites/23/2023/01/Banded-mongoose-32608ec.jpg';
  //img2 = img2roll;
  let emojiblock = '<img className="emoji" src="https://images.immediate.co.uk/production/volatile/sites/23/2023/01/Banded-mongoose-32608ec.jpg" alt="Girl in a jacket" width="100" height="100"/>'
  let age = 'Elderly';
  let personality = 'Frisky';
  return (
    <div className="fscreen">
      <div className="base">
        <div className="head">
          <Header />
        </div>
        <div className="images">
          <div className="imagep">
            <img
              className="imga"
              src={img1}
              alt="Girl in a jacket"
              width="300"
              height="300"
            />
            <p>Monguse</p>
          </div>
          <p className="pp">Mixed with</p>
          <div className="imagep">
            <img
              className="imga"
              src={img2}
              width="300"
              height="300"
            />
            <p>Monguse 2 electric boogaloo</p>
          </div>
        </div>
        <div className='emojitab'>
          <input className="quantity" min='1' max='5' type='number' placeholder='Quantity'></input>
          <div dangerouslySetInnerHTML={{__html: emojiblock}}></div>
          <img
              className="emoji"
              src="https://images.immediate.co.uk/production/volatile/sites/23/2023/01/Banded-mongoose-32608ec.jpg"
              alt="Girl in a jacket"
              width="100"
              height="100"
            />
            <img
              className="emoji"
              src="https://images.immediate.co.uk/production/volatile/sites/23/2023/01/Banded-mongoose-32608ec.jpg"
              alt="Girl in a jacket"
              width="100"
              height="100"
            />
            </div>
        <div className='modifier'>
          <p className="mod">{age}</p>
          <p className="mod">{personality}</p>
        </div>
        <div className="palette">
        <img
              src="https://images.immediate.co.uk/production/volatile/sites/23/2023/01/Banded-mongoose-32608ec.jpg"
              alt="Girl in a jacket"
              width="500"
              height="50"
            />
        </div>
      </div>
    </div>
  );
}

export default Landing;
