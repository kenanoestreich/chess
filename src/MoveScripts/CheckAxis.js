import Enums from '../Enums.js';
import movePiece from './MovePiece.js';
import isKingCurrentlyInCheck from '../CheckScripts/IsKingCurrentlyInCheck.js';

// helper function for bishops, rooks, and queens

function checkAxis(currentPieceRow, currentPieceCol, rowDelta, colDelta, squares, miscSquares, whitesTurn, playerColor){
  let i=currentPieceRow+rowDelta;
  let j=currentPieceCol+colDelta; 
  let squares_copy;
  let newSquares;
  let kingColor = (whitesTurn) ? "white" : "black"; 
  while (i < 8 && i >=0 && j < 8 && j >=0) {
    if (squares[i][j]==null){
      miscSquares[i][j]="possible"; 
      squares_copy = JSON.parse(JSON.stringify(squares)); 
      newSquares = movePiece(i,j,currentPieceRow,currentPieceCol,squares_copy)
      if (isKingCurrentlyInCheck(kingColor,newSquares,playerColor)){
        miscSquares[i][j]=null; 
      } 
    }
    else if ((whitesTurn && Enums.whitePieces.includes(squares[i][j]))
      || (!whitesTurn && Enums.blackPieces.includes(squares[i][j]))){
      break; 
    }
    else if ((whitesTurn && Enums.blackPieces.includes(squares[i][j]))
      || (!whitesTurn && Enums.whitePieces.includes(squares[i][j]))){
      miscSquares[i][j]="threatened";
      squares_copy = JSON.parse(JSON.stringify(squares)); 
      newSquares = movePiece(i,j,currentPieceRow,currentPieceCol,squares_copy)
      if (isKingCurrentlyInCheck(kingColor,newSquares,playerColor)){
        miscSquares[i][j]=null; 
      } 
      break; 
    }
    i+=rowDelta
    j+=colDelta;
  }
  return miscSquares;
}

export default checkAxis; 