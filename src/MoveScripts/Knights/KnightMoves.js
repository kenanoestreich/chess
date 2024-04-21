import Enums from 'src/Enums';
import isKingCurrentlyInCheck from 'src/CheckScripts/IsKingCurrentlyInCheck';
import movePiece from 'src/MoveScripts/MovePiece';

// ALL THE "display_____Moves" FUNCTIONS DO THE FOLLOWING (ONLY DIFFERENCE IS HOW THAT PIECE MOVES):
// input current board state and piece location to move and change css for all the 
// legal move squares to highlight a new color. 

// Knights
function displayKnightMoves(currentPieceRow, currentPieceCol, whitesTurn, squares, playerColor) {
  let miscSquares = Array(8).fill(null).map(()=>Array(8).fill(null));
  let kingColor = (whitesTurn) ? "white" : "black"; 
  let squares_copy;
  let newSquares; 
  if ((whitesTurn && (squares[currentPieceRow][currentPieceCol]===Enums.blackKnight)) 
      || (!whitesTurn && (squares[currentPieceRow][currentPieceCol]===Enums.whiteKnight))){
    return miscSquares; 
  }
  let possibleSquares = [];
  possibleSquares.push([currentPieceRow-2, currentPieceCol-1]);
  possibleSquares.push([currentPieceRow-2, currentPieceCol+1]);
  possibleSquares.push([currentPieceRow-1, currentPieceCol-2]);
  possibleSquares.push([currentPieceRow-1, currentPieceCol+2]);
  possibleSquares.push([currentPieceRow+1, currentPieceCol-2]);
  possibleSquares.push([currentPieceRow+1, currentPieceCol+2]);
  possibleSquares.push([currentPieceRow+2, currentPieceCol-1]);
  possibleSquares.push([currentPieceRow+2, currentPieceCol+1]); 
  for (let i=0; i<possibleSquares.length; i++) {
    if (possibleSquares[i][0] >= 0 && possibleSquares[i][0] < 8 && 
        possibleSquares[i][1] >= 0 && possibleSquares[i][1] < 8) {  
      if ((whitesTurn && Enums.blackPieces.includes(squares[possibleSquares[i][0]][possibleSquares[i][1]])) 
          || (!whitesTurn && Enums.whitePieces.includes(squares[possibleSquares[i][0]][possibleSquares[i][1]]))){
        miscSquares[possibleSquares[i][0]][possibleSquares[i][1]]="threatened";
        squares_copy = JSON.parse(JSON.stringify(squares)); 
        newSquares = movePiece(possibleSquares[i][0],possibleSquares[i][1],currentPieceRow,currentPieceCol,squares_copy)
        if (isKingCurrentlyInCheck(kingColor,newSquares,playerColor)){
          miscSquares[possibleSquares[i][0]][possibleSquares[i][1]]=null; 
        } 
      }
      else if ((!whitesTurn && Enums.blackPieces.includes(squares[possibleSquares[i][0]][possibleSquares[i][1]])) 
          || (whitesTurn && Enums.whitePieces.includes(squares[possibleSquares[i][0]][possibleSquares[i][1]]))){
      }
      else {
        miscSquares[possibleSquares[i][0]][possibleSquares[i][1]]="possible";
        squares_copy = JSON.parse(JSON.stringify(squares)); 
        newSquares = movePiece(possibleSquares[i][0],possibleSquares[i][1],currentPieceRow,currentPieceCol,squares_copy)
        if (isKingCurrentlyInCheck(kingColor,newSquares,playerColor)){
          miscSquares[possibleSquares[i][0]][possibleSquares[i][1]]=null; 
        } 
      }
    }
  }
  miscSquares[currentPieceRow][currentPieceCol]="selected";
  return miscSquares;
}

export default displayKnightMoves; 

