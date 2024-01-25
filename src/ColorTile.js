import React from 'react';

// function SampleColor() {
//   /id?hex=24B1E0 
// }


// const orange = #ffa500;
// const yellow = #ffff00;
// const green = #008000;
// const blue = #0000ff;
// const purple = #4b0082;
// const violet = #9400D3;

function ColorTile() {
  return (      
    <div className='col'>
 <svg xmlns='http://www.w3.org/2000/svg' width={150} height={200}>
    <rect fill={'#24B1E0'} x={0} y={0} width={155} height={205}></rect> 
  </svg>
  </div>
  );
};

export default function TileWall() {
  return (
 <div className="row">
 
  <ColorTile /> 
  <ColorTile /> 
  <ColorTile /> 
  <ColorTile /> 
  <ColorTile /> 
  <ColorTile /> 
  <ColorTile />
  <ColorTile /> 
  <ColorTile /> 
  <ColorTile /> 
  <ColorTile /> 
  <ColorTile />

 </div>

  );
 }
