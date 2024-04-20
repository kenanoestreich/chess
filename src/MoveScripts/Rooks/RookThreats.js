import Enums from "../../../../version2/chess-server/src/Enums";
import checkAxisThreat from "../CheckAxisThreat";

function displayRookThreats(currentPieceRow, currentPieceCol, whitesTurn, squares) {
    let miscSquares = Array(8).fill(null).map(()=>Array(8).fill(null));
    if ((whitesTurn && squares[currentPieceRow][currentPieceCol]===Enums.blackRook) 
        || (!whitesTurn && squares[currentPieceRow][currentPieceCol]===Enums.whiteRook)){
      return miscSquares; 
    }
    // up "line of sight"
    miscSquares=checkAxisThreat(currentPieceRow,currentPieceCol,0,-1,squares,miscSquares,whitesTurn);
    // down "line of sight"
    miscSquares=checkAxisThreat(currentPieceRow,currentPieceCol,0,+1,squares,miscSquares,whitesTurn)
    // left "line of sight"
    miscSquares=checkAxisThreat(currentPieceRow,currentPieceCol,-1,0,squares,miscSquares,whitesTurn)
    // right "line of sight"
    miscSquares=checkAxisThreat(currentPieceRow,currentPieceCol,+1,0,squares,miscSquares,whitesTurn)
    miscSquares[currentPieceRow][currentPieceCol]="selected";
    return miscSquares; 
}

export default displayRookThreats; 