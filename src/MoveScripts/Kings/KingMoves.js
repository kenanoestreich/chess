import Enums from "src/Enums";
import isKingCurrentlyInCheck from "src/CheckScripts/IsKingCurrentlyInCheck";
import movePiece from "src/MoveScripts/MovePiece";

// Kings
// TO DO: NEED TO NOT DISPLAY MOVES THAT WOULD PUT THE KING IN CHECK AND CASTLING
function displayKingMoves(currentPieceRow, currentPieceCol, whitesTurn, squares, playerColor) {
    let miscSquares = Array(8).fill(null).map(()=>Array(8).fill(null));
    let newSquares; 
    let color = (whitesTurn) ? "white" : "black"; 
    if ((whitesTurn && squares[currentPieceRow][currentPieceCol]===Enums.blackKing) 
        || (!whitesTurn && squares[currentPieceRow][currentPieceCol]===Enums.whiteKing)){
      return miscSquares; 
    }
    let possibleSquares = [];
    possibleSquares.push([currentPieceRow-1, currentPieceCol-1]);
    possibleSquares.push([currentPieceRow-1, currentPieceCol]);
    possibleSquares.push([currentPieceRow-1, currentPieceCol+1]);
    possibleSquares.push([currentPieceRow, currentPieceCol-1]);
    possibleSquares.push([currentPieceRow, currentPieceCol+1]);
    possibleSquares.push([currentPieceRow+1, currentPieceCol-1]);
    possibleSquares.push([currentPieceRow+1, currentPieceCol]); 
    possibleSquares.push([currentPieceRow+1, currentPieceCol+1]); 
    for (let i=0; i<possibleSquares.length; i++) {
      if (possibleSquares[i][0] >= 0 && possibleSquares[i][0] < 8 && 
          possibleSquares[i][1] >= 0 && possibleSquares[i][1] < 8) {  
        if ((whitesTurn && Enums.blackPieces.includes(squares[possibleSquares[i][0]][possibleSquares[i][1]])) 
            || (!whitesTurn && Enums.whitePieces.includes(squares[possibleSquares[i][0]][possibleSquares[i][1]]))){
          miscSquares[possibleSquares[i][0]][possibleSquares[i][1]]="threatened";
          let squares_copy = JSON.parse(JSON.stringify(squares)); 
          newSquares = movePiece(possibleSquares[i][0],possibleSquares[i][1],currentPieceRow,currentPieceCol,squares_copy)
          if (isKingCurrentlyInCheck(color,newSquares,playerColor)){
            miscSquares[possibleSquares[i][0]][possibleSquares[i][1]]=null; 
          }
        }
        else if ((!whitesTurn && Enums.blackPieces.includes(squares[possibleSquares[i][0]][possibleSquares[i][1]])) 
            || (whitesTurn && Enums.whitePieces.includes(squares[possibleSquares[i][0]][possibleSquares[i][1]]))){
        }
        else {
          miscSquares[possibleSquares[i][0]][possibleSquares[i][1]]="possible";
          let squares_copy = JSON.parse(JSON.stringify(squares)); 
          newSquares = movePiece(possibleSquares[i][0],possibleSquares[i][1],currentPieceRow,currentPieceCol,squares_copy)
          if (isKingCurrentlyInCheck(color,newSquares,playerColor)){
            miscSquares[possibleSquares[i][0]][possibleSquares[i][1]]=null; 
          }
        }
      } 
    }
  
    // Highlight selected piece
    miscSquares[currentPieceRow][currentPieceCol]="selected";
    return miscSquares;
}

export default displayKingMoves; 