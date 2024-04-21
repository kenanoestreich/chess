// Largely serving as my "main" for now until I decide how best to organize all this code

// STARTING POINT FOR ALL THIS CODE WAS THE FOLLOWING TUTORIAL CODE: 
// https://reactjs.org/tutorial/tutorial.html

// Import all-encompassing requirements
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import io from 'socket.io-client';

// Import necessary scripts from HelperScripts/
import findPieceAndDisplay from './HelperScripts/FindPieceAndDisplay.js';

// Import necessary scripts from CheckScripts/
import isKingCurrentlyInCheck from './CheckScripts/IsKingCurrentlyInCheck.js';
import isStalemate from './CheckScripts/IsStalemate.js';
import isCheckmate from './CheckScripts/IsCheckmate.js';

// Import necessary scripts from MoveScripts/ 
import movePiece from './MoveScripts/MovePiece.js';

// Import Timer scripts
import Timer from './TimerScripts/Timer.js'

// Import Enums
import Enums from './Enums.js'

// Set up Socket.io
let socket = io(/* INSERT SERVER LOCATION HERE - WAS PREVIOUSLY AWS */);

// Client's color for online game
let your_color;

// array of rootss on the same element.
// TODO: FIX THI so we don't get a warning for calling createRoot() multiple timeS IN GAME'S RENDER()
let roots=Array(8848).fill(null); // maximum possible number of moves

// Keep tracked of last piece clicked for the sake of moving pieces
let pieceClickedRow; 
let pieceClickedCol;

// Define root where Game will be rendered 
const container = document.getElementById("root"); 
const root = createRoot(container);

// ========================================

// If they refresh
if(sessionStorage.getItem("currentUser") !== null){
  socket.emit("FetchRecord", {username: sessionStorage.getItem("currentUser")});
  socket.on("ReceiveRecord", function(data){
    console.log(JSON.stringify(data));  
    root.render(
      <div>
        <LobbyPage 
          wins={data["wins"]} 
          losses={data["losses"]}
        />
        <br></br>
        <h2>Practice While You Wait</h2> 
        <Game color="both"/>
      </div>
    ); 
  });
}else{
  root.render(<LoginForm />);
} 

