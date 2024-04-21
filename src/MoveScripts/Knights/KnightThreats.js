import Enums from "src/Enums";

// To be used in isKingCurrentlyInCheck()
function displayKnightThreats(currentPieceRow, currentPieceCol, whitesTurn, squares) {
    let miscSquares = Array(8).fill(null).map(()=>Array(8).fill(null));
    if ((whitesTurn && squares[currentPieceRow][currentPieceCol]===Enums.blackKnight) 
        || (!whitesTurn && squares[currentPieceRow][currentPieceCol]===Enums.whiteKnight)){
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
        }
        else if ((!whitesTurn && Enums.blackPieces.includes(squares[possibleSquares[i][0]][possibleSquares[i][1]])) 
            || (whitesTurn && Enums.whitePieces.includes(squares[possibleSquares[i][0]][possibleSquares[i][1]]))){
        }
        else {
            miscSquares[possibleSquares[i][0]][possibleSquares[i][1]]="possible";
        }
        }
    }
    miscSquares[currentPieceRow][currentPieceCol]="selected";
    return miscSquares;
}

export default displayKnightThreats; 