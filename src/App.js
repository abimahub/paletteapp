import React from 'react';
import ColorTile from './colorTile';
import Color from 'colorjs.io';
import { rpurp, magenta, indigo, grad1} from './Colors';
import TileWall from './colorTile';

function App () {
   
    return ( 
      <>
      <h3>A selection of colours:</h3>
        <TileWall />
        <br />
        <div id='row'>
        <div id='col'>
        <svg xmlns='http://www.w3.org/2000/svg' width={150} height={200}>
    <rect fill={indigo} x={0} y={0} width={155} height={205}></rect> 
  </svg>
  </div>
        <div id='col'>
        <svg xmlns='http://www.w3.org/2000/svg' width={150} height={200}>
    <rect fill={rpurp} x={0} y={0} width={155} height={205}></rect> 
  </svg> </div>
  <div id='col'>
        <svg xmlns='http://www.w3.org/2000/svg' width={550} height={200}>
    <rect fill={grad1} x={0} y={0} width={155} height={205}></rect> 
  </svg> </div>
  </div> 
  {/* end of row */}
      </>
   );
  }
   
  export default App;