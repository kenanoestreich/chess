

// Function for actually moving the pieces
function movePiece(endRow, endCol, startRow, startCol, squares){
    let startpiece = squares[startRow][startCol];
    squares[startRow][startCol]=null; 
    squares[endRow][endCol]=startpiece;
    return squares; 
}

export default movePiece; 