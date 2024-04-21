import Enums from "src/Enums";
import checkAxis from "src/MoveScripts/CheckAxis"

// Rooks 
function displayRookMoves(currentPieceRow, currentPieceCol, whitesTurn, squares, playerColor) {
    let miscSquares = Array(8).fill(null).map(()=>Array(8).fill(null));
    if ((whitesTurn && squares[currentPieceRow][currentPieceCol]===Enums.blackRook) 
        || (!whitesTurn && squares[currentPieceRow][currentPieceCol]===Enums.whiteRook)){
      return miscSquares; 
    }
    // up "line of sight"
    miscSquares=checkAxis(currentPieceRow,currentPieceCol,0,-1,squares,miscSquares,whitesTurn,playerColor);
    // down "line of sight"
    miscSquares=checkAxis(currentPieceRow,currentPieceCol,0,+1,squares,miscSquares,whitesTurn,playerColor)
    // left "line of sight"
    miscSquares=checkAxis(currentPieceRow,currentPieceCol,-1,0,squares,miscSquares,whitesTurn,playerColor)
    // right "line of sight"
    miscSquares=checkAxis(currentPieceRow,currentPieceCol,+1,0,squares,miscSquares,whitesTurn,playerColor)
    miscSquares[currentPieceRow][currentPieceCol]="selected";
    return miscSquares; 
}

export default displayRookMoves; 