import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function App() {
  const [color, setColor] = useState('#ffff');
  return (
    <div className="App">
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

// export default function App() {
//   const [color, setColor] = useState('#ffff');
//   return (
//     <div
//       className="App"
//       style={{
//         backgroundColor: color,
//         height: '200px',
//         margin: '50px',
//         padding: '50px',
//       }}
//     >
//       <h1>Random Color Generator</h1>
//       <button onClick={() => setColor(randomColor())}>Generate</button>
//       {color}
//     </div>
//   );
// }
