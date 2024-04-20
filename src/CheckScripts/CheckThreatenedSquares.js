import Enums from "../../../version2/chess-server/src/Enums";
import displayPawnThreats from "../MoveScripts/Pawns/PawnThreats";
import displayRookThreats from "../MoveScripts/Rooks/RookThreats";
import displayKnightThreats from "../MoveScripts/Knights/KnightThreats";
import displayBishopThreats from "../MoveScripts/Bishops/BishopThreats";
import displayQueenThreats from "../MoveScripts/Queens/QueenThreats";
import displayKingThreats from "../MoveScripts/Kings/KingThreats";
import squaresCombiner from "../HelperScripts/SquaresCombiner";

// Function for compiling all squares the opponent threatens
function checkThreatenedSquares(opponentColor, squares, playerColor){
    let pieceThreats;
    let allThreatenedSquares = Array(8).fill(null).map(()=>Array(8).fill(null));
  
    // current player is white: List all squares black is threatening
    if (opponentColor==="Black"){
      for (let i=0; i<8; i++){
        for (let j=0; j<8; j++){
          if (squares[i][j]===Enums.blackPawn){
            pieceThreats=displayPawnThreats(i,j,false,playerColor,squares);
            allThreatenedSquares=squaresCombiner(pieceThreats,allThreatenedSquares); 
          }
          else if (squares[i][j]===Enums.blackRook){
            pieceThreats=displayRookThreats(i,j,false,squares); 
            allThreatenedSquares=squaresCombiner(pieceThreats,allThreatenedSquares); 
          }
          else if (squares[i][j]===Enums.blackKnight){
            pieceThreats=displayKnightThreats(i,j,false,squares); 
            allThreatenedSquares=squaresCombiner(pieceThreats,allThreatenedSquares); 
          }
          else if (squares[i][j]===Enums.blackBishop){
            pieceThreats=displayBishopThreats(i,j,false,squares); 
            allThreatenedSquares=squaresCombiner(pieceThreats,allThreatenedSquares); 
          }
          else if (squares[i][j]===Enums.blackQueen){
            pieceThreats=displayQueenThreats(i,j,false,squares); 
            allThreatenedSquares=squaresCombiner(pieceThreats,allThreatenedSquares); 
          }
          else if (squares[i][j]===Enums.blackKing){
            pieceThreats=displayKingThreats(i,j,false,squares); 
            allThreatenedSquares=squaresCombiner(pieceThreats,allThreatenedSquares); 
          }
        }
      }
    }
  
    // current player is black: List all squares white is threatening
    else if (opponentColor==="White"){
      for (let i=0; i<8; i++){
        for (let j=0; j<8; j++){
          if (squares[i][j]===Enums.whitePawn){
            pieceThreats=displayPawnThreats(i,j,true,playerColor,squares); 
            allThreatenedSquares=squaresCombiner(pieceThreats,allThreatenedSquares); 
          }
          else if (squares[i][j]===Enums.whiteRook){
            pieceThreats=displayRookThreats(i,j,true,squares); 
            allThreatenedSquares=squaresCombiner(pieceThreats,allThreatenedSquares); 
          }
          else if (squares[i][j]===Enums.whiteKnight){
            pieceThreats=displayKnightThreats(i,j,true,squares); 
            allThreatenedSquares=squaresCombiner(pieceThreats,allThreatenedSquares); 
          }
          else if (squares[i][j]===Enums.whiteBishop){
            pieceThreats=displayBishopThreats(i,j,true,squares); 
            allThreatenedSquares=squaresCombiner(pieceThreats,allThreatenedSquares); 
          }
          else if (squares[i][j]===Enums.whiteQueen){
            pieceThreats=displayQueenThreats(i,j,true,squares); 
            allThreatenedSquares=squaresCombiner(pieceThreats,allThreatenedSquares); 
          }
          else if (squares[i][j]===Enums.whiteKing){
            pieceThreats=displayKingThreats(i,j,true,squares); 
            allThreatenedSquares=squaresCombiner(pieceThreats,allThreatenedSquares); 
          }
        }
      }
    }
    return allThreatenedSquares; 
}

export default checkThreatenedSquares; 