import Enums from "../../../../version2/chess-server/src/Enums";
import checkAxis from "../CheckAxis";

// Queens
function displayQueenMoves(currentPieceRow, currentPieceCol, whitesTurn, squares, playerColor) {
    let miscSquares = Array(8).fill(null).map(()=>Array(8).fill(null));
    if ((whitesTurn && squares[currentPieceRow][currentPieceCol]===Enums.blackQueen) 
        || (!whitesTurn && squares[currentPieceRow][currentPieceCol]===Enums.whiteQueen)){
      return miscSquares; 
    }
    // up "line of sight"
    miscSquares=checkAxis(currentPieceRow,currentPieceCol,0,-1,squares,miscSquares,whitesTurn,playerColor)
    // down "line of sight"
    miscSquares=checkAxis(currentPieceRow,currentPieceCol,0,+1,squares,miscSquares,whitesTurn,playerColor)
    // left "line of sight"
    miscSquares=checkAxis(currentPieceRow,currentPieceCol,-1,0,squares,miscSquares,whitesTurn,playerColor)
    // right "line of sight"
    miscSquares=checkAxis(currentPieceRow,currentPieceCol,+1,0,squares,miscSquares,whitesTurn,playerColor)
    // up and left "line of sight"
    miscSquares=checkAxis(currentPieceRow,currentPieceCol,-1,-1,squares,miscSquares,whitesTurn,playerColor)
    // up and right "line of sight"
    miscSquares=checkAxis(currentPieceRow,currentPieceCol,+1,-1,squares,miscSquares,whitesTurn,playerColor)
    // down and left "line of sight"
    miscSquares=checkAxis(currentPieceRow,currentPieceCol,-1,+1,squares,miscSquares,whitesTurn,playerColor)
    // down and right "line of sight"
    miscSquares=checkAxis(currentPieceRow,currentPieceCol,+1,+1,squares,miscSquares,whitesTurn,playerColor)
    miscSquares[currentPieceRow][currentPieceCol]="selected";
    return miscSquares; 
}

export default displayQueenMoves; 