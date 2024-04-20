
// Helper function to add pieceThreats to allThreatenedSquares in checkThreatenedSquares()
function squaresCombiner(pieceThreats, allThreatenedSquares){
    for (let i=0; i<8; i++){
      for (let j=0; j<8; j++){
        if (pieceThreats[i][j]==="threatened" || pieceThreats[i][j]==="possible"){
          allThreatenedSquares[i][j]="threatened"; 
        }
      }
    }
    return allThreatenedSquares; 
}

export default squaresCombiner; 