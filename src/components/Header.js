import '../components/header.css';
import * as React from 'react';

function Header() {
  return (
    <header>
      <div className="generateBar">
        <p><input type="checkbox" id="scales" name="scales" checked/>HYBRID</p>
        <p><input type="checkbox" id="scales" name="scales" checked/>EMOJIES</p>
        <p><input type="checkbox" id="scales" name="scales" checked/>AGE</p>
        <p><input type="checkbox" id="scales" name="scales" checked/>PERSONALITY</p>
        <p><input type="checkbox" id="scales" name="scales" checked/>PALETT</p>
        <button className='gbtn'>Generate</button>
      </div>
    </header>
  );
};

export default Header;