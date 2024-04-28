// Largely serving as my "main" for now until I decide how best to organize all this code

// Import all-encompassing requirements
import React from 'react';
import { createRoot } from 'react-dom/client';
import 'src/index.css';
import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  connectionStateRecovery: {}
});

// Client's color for online game
let your_color;

// array of roots on the same element.
// TODO: FIX THIS so we don't get a warning for calling createRoot() multiple times IN GAME'S RENDER()
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

