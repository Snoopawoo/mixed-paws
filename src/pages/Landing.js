import React from "react";
import "../pages/landing.css";
import mix from '../img/mix.png'
import AnimalOne from "../components/AnimalOne";
import AnimalTwo from "../components/AnimalTwo";
import Emoji1 from "../components/Emoji1";
import Emoji2 from "../components/Emoji2";
import Emoji3 from "../components/Emoji3";
import Palett from "../components/Palett";
import Age from "../components/Age";
import Mood from "../components/Mood";

function Landing() {
  const handleReroll = () => {
     window.location.reload();
  };

  return (
    <div className="fscreen">
      <div className="base">
        <div className="use">
        <p>Click items to Reroll</p>
        <h5>or</h5>
        <p></p>
          <button onClick={handleReroll}>Reroll All</button>
          </div>
        <div className="head">
          <a href="https://ko-fi.com/snoopdesigns">
          <img className="cofi"
            src="https://storage.ko-fi.com/cdn/kofi2.png"
          /></a>
        </div>
        <div className="images">
          <AnimalOne/>
          <img
              src={mix}
              className="imgmix"
              width='50px'
              height='50px'
            />
          <AnimalTwo/>
        </div>
        <div className='emojitab'>
          <Emoji1/>
          <Emoji2/>
          <Emoji3/>
        </div>
        <div className='modifier'>
          <Age/>
          <Mood/>
        </div>
        <div className="palette">
            <Palett/>
        </div>
      </div>
    </div>
  );
}

export default Landing;
