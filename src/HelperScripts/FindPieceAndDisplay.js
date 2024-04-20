import isKingCurrentlyInCheck from "../CheckScripts/IsKingCurrentlyInCheck";
import displayKingMoves from "../MoveScripts/Kings/KingMoves";
import displayQueenMoves from "../MoveScripts/Queens/QueenMoves";
import displayRookMoves from "../MoveScripts/Rooks/RookMoves";
import displayBishopMoves from "../MoveScripts/Bishops/BishopMoves";
import displayKnightMoves from "../MoveScripts/Knights/KnightMoves";
import displayPawnMoves from "../MoveScripts/Pawns/PawnMoves";
import Enums from "../../../version2/chess-server/src/Enums";

// function to determine clicked piece and call the correct display function

// King, Queen, Rook, Bishop, Knight, Pawn
function findPieceAndDisplay(pieceRow, pieceCol, whitesTurn, playerColor, squares, enPassantTarget) {
    for (let i=0; i<6; i++){
      if (squares[pieceRow][pieceCol]===Enums.whitePieces[i] || squares[pieceRow][pieceCol]===Enums.blackPieces[i]) {
        if (isKingCurrentlyInCheck("white",squares, playerColor)){
          let miscSquares;
          if (i===0){
            miscSquares = displayKingMoves(pieceRow,pieceCol,whitesTurn,squares,playerColor); 
          }
          if (i===1){
            miscSquares = displayQueenMoves(pieceRow,pieceCol,whitesTurn,squares,playerColor); 
          }
          if (i===2){
            miscSquares = displayRookMoves(pieceRow,pieceCol,whitesTurn,squares,playerColor); 
          }
          if (i===3){
            miscSquares = displayBishopMoves(pieceRow,pieceCol,whitesTurn,squares, playerColor); 
          }
          if (i===4){
            miscSquares = displayKnightMoves(pieceRow,pieceCol,whitesTurn,squares, playerColor); 
          }
          if (i===5){
            miscSquares = displayPawnMoves(pieceRow,pieceCol,whitesTurn,playerColor,squares, enPassantTarget); 
          }
          // Find the checked king's location and highlight it as "incheck" (bright red)
          for (let i=0; i<8; i++){
            for (let j=0; j<8; j++){
              if (squares[i][j]===Enums.whiteKing){
                miscSquares[i][j]="incheck"
              }
            }
          }
          return miscSquares; 
        }
        else if (isKingCurrentlyInCheck("black",squares,playerColor)){
          let miscSquares;
          if (i===0){
            miscSquares = displayKingMoves(pieceRow,pieceCol,whitesTurn,squares,playerColor); 
          }
          if (i===1){
            miscSquares = displayQueenMoves(pieceRow,pieceCol,whitesTurn,squares,playerColor); 
          }
          if (i===2){
            miscSquares = displayRookMoves(pieceRow,pieceCol,whitesTurn,squares,playerColor); 
          }
          if (i===3){
            miscSquares = displayBishopMoves(pieceRow,pieceCol,whitesTurn,squares,playerColor); 
          }
          if (i===4){
            miscSquares = displayKnightMoves(pieceRow,pieceCol,whitesTurn,squares,playerColor); 
          }
          if (i===5){
            miscSquares = displayPawnMoves(pieceRow,pieceCol,whitesTurn,playerColor,squares, enPassantTarget); 
          }
          // Find the checked king's location and highlight it as "incheck" (bright red)
          for (let i=0; i<8; i++){
            for (let j=0; j<8; j++){
              if (squares[i][j]===Enums.blackKing){
                miscSquares[i][j]="incheck"
              }
            }
          }
          return miscSquares; 
        }
        else {
          if (i===0){
            return displayKingMoves(pieceRow,pieceCol,whitesTurn,squares,playerColor);
          }
          if (i===1){
            return displayQueenMoves(pieceRow,pieceCol,whitesTurn,squares,playerColor);
          }
          if (i===2){
            return displayRookMoves(pieceRow,pieceCol,whitesTurn,squares,playerColor);
          }
          if (i===3){
            return displayBishopMoves(pieceRow,pieceCol,whitesTurn,squares,playerColor);
          }
          if (i===4){
            return displayKnightMoves(pieceRow,pieceCol,whitesTurn,squares,playerColor);
          }
          if (i===5){
            return displayPawnMoves(pieceRow,pieceCol,whitesTurn,playerColor,squares, enPassantTarget);
          }
        }
      }
    }
    return null; 
}

export default findPieceAndDisplay; 