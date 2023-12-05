import { useState } from 'react';
// import './ColorBox.css';

export default function ColorBox({ colors }) {
  let [colorIndex, setColorIndex] = useState(0);

  const divStyle = {
    backgroundColor: 'white',
    width: '100px',
    height: '100px',
  };

  const rand = () => Math.floor(Math.random() * colors.length);
  divStyle.backgroundColor = colors[colorIndex];

  const toggleColor = () => {
    setColorIndex(rand);
  };
  return (
    <div style={divStyle} className="ColorBox" onClick={toggleColor}></div>
  );
}
