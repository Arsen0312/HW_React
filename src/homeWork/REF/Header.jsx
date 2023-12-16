import React, { useContext } from 'react';
import { contextTema } from './';

const Header = () => {
  const {  temaBackground, temaFonth } = useContext(contextTema);

  return (
    <div>
      <header style={{ backgroundColor: temaBackground, border: "2px solid grey", borderRadius: "8px", margin: "10px 10px 10px 10px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <h1 style={{ color: temaFonth }}>ПРИВЕТ МИР</h1>
      </header>
    </div>
  );
};

export default Header;
