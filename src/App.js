import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState('#ffff');
  return (
    <div classsName="App">
      <div
        style={{
          backgroundColor: color,
          height: '200px',
          margin: '50px',
          padding: '50px',
        }}
      >
        <h1 style={{ fontStyle: 'italic' }}>Random Color Generator</h1>
        <button onClick={() => setColor(randomColor())}>Generate</button>
        {color}
      </div>
    </div>
  );
}
