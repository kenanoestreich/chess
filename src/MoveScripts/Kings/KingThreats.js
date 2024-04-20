import Enums from "../../../../version2/chess-server/src/Enums";

// Slightly altered version of displayKingMoves() only to be called by checkThreatenedSquares(). 
// Otherwise code gets stuck in infinite loop checking to make sure each king is not threatening the other. 
function displayKingThreats(currentPieceRow, currentPieceCol, whitesTurn, squares) {
    let miscSquares = Array(8).fill(null).map(()=>Array(8).fill(null));
    if ((whitesTurn && squares[currentPieceRow][currentPieceCol]===Enums.blackKing) 
        || (!whitesTurn && squares[currentPieceRow][currentPieceCol]===Enums.whiteKing)){
      return miscSquares; 
    }
    let possibleSquares = [];
    possibleSquares.push([currentPieceRow-1, currentPieceCol-1]);
    possibleSquares.push([currentPieceRow-1, currentPieceCol]);
    possibleSquares.push([currentPieceRow-1, currentPieceCol+1]);
    possibleSquares.push([currentPieceRow, currentPieceCol-1]);
    possibleSquares.push([currentPieceRow, currentPieceCol]);
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
        }
        else if ((!whitesTurn && Enums.blackPieces.includes(squares[possibleSquares[i][0]][possibleSquares[i][1]])) 
            || (whitesTurn && Enums.whitePieces.includes(squares[possibleSquares[i][0]][possibleSquares[i][1]]))){
        }
        else {
          miscSquares[possibleSquares[i][0]][possibleSquares[i][1]]="possible";
        }
      }
    }
    return miscSquares;
}

export default displayKingThreats; 