import Enums from "src/Enums";
import movePiece from "src/MoveScripts/MovePiece";
import isKingCurrentlyInCheck from "src/CheckScripts/IsKingCurrentlyInCheck";

// Pawns
function displayPawnMoves(currentPieceRow, currentPieceCol, whitesTurn, playerColor, squares, enPassantTarget) {

  // set necessary variables
  let miscSquares = Array(8).fill(null).map(()=>Array(8).fill(null));
  let newSquares;
  let squares_copy;
  playerColor = (playerColor==="both" || playerColor==="white") ? "white" : "black"; 
  let whitePawnDirection = (playerColor==="white") ? -1 : 1;
  let blackPawnDirection = (whitePawnDirection===-1) ? 1 : -1;  
  let isFirstMove = false; 

  // determine if this the first time this pawn has been moved (to determine if we can move two spaces ahead)
  if  (
        (whitesTurn && (whitePawnDirection===-1) && (currentPieceRow===6)) ||
        (whitesTurn && (whitePawnDirection===1) && (currentPieceRow===1)) ||
        (!whitesTurn && (blackPawnDirection===-1) && (currentPieceRow===6)) ||
        (!whitesTurn && (blackPawnDirection===1) && (currentPieceRow===1))
      ) {
    isFirstMove = true;  
  }

  // display possible moves for a white pawn (excluding en passant)
  if (whitesTurn){
    if (squares[currentPieceRow+whitePawnDirection][currentPieceCol]===null){
      miscSquares[currentPieceRow+whitePawnDirection][currentPieceCol]="possible";
      squares_copy = JSON.parse(JSON.stringify(squares)); 
      newSquares = movePiece(currentPieceRow+whitePawnDirection,currentPieceCol,currentPieceRow,currentPieceCol,squares_copy)
      if (isKingCurrentlyInCheck(playerColor,newSquares,playerColor)){
        miscSquares[currentPieceRow+whitePawnDirection][currentPieceCol]=null; 
      }
      if (isFirstMove){
        if (squares[currentPieceRow+(2*whitePawnDirection)][currentPieceCol]===null){
          miscSquares[currentPieceRow+(2*whitePawnDirection)][currentPieceCol]="possible"; 
          squares_copy = JSON.parse(JSON.stringify(squares)); 
          newSquares = movePiece(currentPieceRow+(2*whitePawnDirection),currentPieceCol,currentPieceRow,currentPieceCol,squares_copy)
          if (isKingCurrentlyInCheck(playerColor,newSquares,playerColor)){
            miscSquares[currentPieceRow+(2*whitePawnDirection)][currentPieceCol]=null; 
          }
        }
      } 
    }
    if ((currentPieceCol-1)>=0){
      if (Enums.blackPieces.includes(squares[currentPieceRow+whitePawnDirection][currentPieceCol-1])){
        miscSquares[currentPieceRow+whitePawnDirection][currentPieceCol-1]="threatened"; 
        squares_copy = JSON.parse(JSON.stringify(squares)); 
        newSquares = movePiece(currentPieceRow+whitePawnDirection,currentPieceCol-1,currentPieceRow,currentPieceCol,squares_copy)
        if (isKingCurrentlyInCheck(playerColor,newSquares,playerColor)){
          miscSquares[currentPieceRow+whitePawnDirection][currentPieceCol-1]=null; 
        }
      }
    }
    if ((currentPieceCol+1)<8){
      if (Enums.blackPieces.includes(squares[currentPieceRow+whitePawnDirection][currentPieceCol+1])){
        miscSquares[currentPieceRow+whitePawnDirection][currentPieceCol+1]="threatened"; 
        squares_copy = JSON.parse(JSON.stringify(squares)); 
        newSquares = movePiece(currentPieceRow+whitePawnDirection,currentPieceCol+1,currentPieceRow,currentPieceCol,squares_copy)
        if (isKingCurrentlyInCheck(playerColor,newSquares,playerColor)){
          miscSquares[currentPieceRow+whitePawnDirection][currentPieceCol+1]=null; 
        }
      }
    } 
  }
  else { // display possible moves for a black pawn (excluding en passant)
    if (squares[currentPieceRow+blackPawnDirection][currentPieceCol]===null){
      miscSquares[currentPieceRow+blackPawnDirection][currentPieceCol]="possible";
      squares_copy = JSON.parse(JSON.stringify(squares)); 
      newSquares = movePiece(currentPieceRow+blackPawnDirection,currentPieceCol,currentPieceRow,currentPieceCol,squares_copy)
      if (isKingCurrentlyInCheck(playerColor,newSquares,playerColor)){
        miscSquares[currentPieceRow+blackPawnDirection][currentPieceCol]=null; 
      }
      if (isFirstMove){
        if (squares[currentPieceRow+(2*blackPawnDirection)][currentPieceCol]===null){
          miscSquares[currentPieceRow+(2*blackPawnDirection)][currentPieceCol]="possible"; 
          squares_copy = JSON.parse(JSON.stringify(squares)); 
          newSquares = movePiece(currentPieceRow+(2*blackPawnDirection),currentPieceCol,currentPieceRow,currentPieceCol,squares_copy)
          if (isKingCurrentlyInCheck(playerColor,newSquares,playerColor)){
            miscSquares[currentPieceRow+(2*blackPawnDirection)][currentPieceCol]=null; 
          }
        }
      } 
    }
    if ((currentPieceCol-1)>=0){
      if (Enums.whitePieces.includes(squares[currentPieceRow+blackPawnDirection][currentPieceCol-1])){
        miscSquares[currentPieceRow+blackPawnDirection][currentPieceCol-1]="threatened"; 
        squares_copy = JSON.parse(JSON.stringify(squares)); 
        newSquares = movePiece(currentPieceRow+blackPawnDirection,currentPieceCol-1,currentPieceRow,currentPieceCol,squares_copy)
        if (isKingCurrentlyInCheck(playerColor,newSquares,playerColor)){
          miscSquares[currentPieceRow+blackPawnDirection][currentPieceCol-1]=null; 
        }
      }
    }
    if ((currentPieceCol+1)<8){
      if (Enums.whitePieces.includes(squares[currentPieceRow+blackPawnDirection][currentPieceCol+1])){
        miscSquares[currentPieceRow+blackPawnDirection][currentPieceCol+1]="threatened"; 
        squares_copy = JSON.parse(JSON.stringify(squares)); 
        newSquares = movePiece(currentPieceRow+blackPawnDirection,currentPieceCol+1,currentPieceRow,currentPieceCol,squares_copy)
        if (isKingCurrentlyInCheck(playerColor,newSquares,playerColor)){
          miscSquares[currentPieceRow+blackPawnDirection][currentPieceCol+1]=null; 
        }
      }
    }
  }
  
  // Account for en passant
  if (enPassantTarget[0]!==null){
    if ((whitesTurn&&(whitePawnDirection===-1)) ||
      (!whitesTurn&&(blackPawnDirection===-1))){
        if ((currentPieceRow===(enPassantTarget[0]+1))&&(Math.abs((currentPieceCol-enPassantTarget[1]))===1)){
          miscSquares[enPassantTarget[0]][enPassantTarget[1]]="threatened";
        }
    }
    else {
      if ((currentPieceRow===(enPassantTarget[0]-1))&&(Math.abs((currentPieceCol-enPassantTarget[1]))===1)){
        miscSquares[enPassantTarget[0]][enPassantTarget[1]]="threatened";
      }
    }
  }
  return miscSquares; 
}

export default displayPawnMoves; 
