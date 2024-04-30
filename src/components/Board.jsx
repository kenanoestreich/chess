import React from "react";
import 'src/components/Board.css';

// Define Square Object and its props
// squareColor is used to track where pieces can move legally (can be "lightsquare", "darksquare", "possiblesquare", "threatenedsquare", "selectedsquare", "inchecksquare")
// onClick eventually refers back to handleClick()
// value is the unicode of a piece or null
function Square(props) {
    return (
      <button className={props.squareColor} onClick={props.onClick} id={props.name}>{props.value}</button>
    );
}

// TODO: Maybe this ought to utilize css grid or flexbox

// Board Class 
// 64 Squares of chess board 
// ---------------------------------------------------------------------------------

// Functions: 

// renderSquare() - creates a square object
// render() - renders the whole board
class Board extends React.Component {

    // renderSquare() generates the square objects and assigns props based on inputs
    renderSquare(i,j,misc,squares,name) {
      if (misc==null){

        // generate alternating light and dark squares

        if (((i+j)%2)===1){ 
          return (
            <Square
              value={squares[i][j]}
              onClick={() => this.props.onClick(i,j,name)}
              squareColor="darksquare"
              name={name}
            />
          );
        }
        else {
          return (
            <Square
              value={squares[i][j]}
              onClick={() => this.props.onClick(i,j,name)}
              squareColor="lightsquare"
              name={name}
            />
          );
        }

      }
      else if (misc==="selected"){
        return (
          <Square
            value={this.props.squares[i][j]}
            onClick={() => this.props.onClick(i,j,name)}
            squareColor="selectedsquare"
            name={name}
          />
        );
      }
      else if (misc==="possible"){
        return (
          <Square
            value={this.props.squares[i][j]}
            onClick={() => this.props.onClick(i,j,name)}
            squareColor="possiblesquare"
            name={name}
          />
        );
      }
      else if (misc==="threatened"){
        return (
          <Square
            value={this.props.squares[i][j]}
            onClick={() => this.props.onClick(i,j,name)}
            squareColor="threatenedsquare"
            name={name}
          />
        );
      }
      else if (misc==="incheck"){
        return (
          <Square
            value={this.props.squares[i][j]}
            onClick={() => this.props.onClick(i,j,name)}
            squareColor="inchecksquare"
            name={name}
          />
        );
      }
    }
  
    // render function for the board itself
    // renders all 64 squares with their correct options ("threatened", "possible", etc...)
    render() {
      const miscSquares = JSON.parse(JSON.stringify(this.props.miscSquares)); 
      const squares = JSON.parse(JSON.stringify(this.props.squares));
      if (this.props.color==="black"){
        return (
          <div>
            <div className="board-row"> 
              {this.renderSquare(0,0,miscSquares[0][0],squares,"h1")}
              {this.renderSquare(0,1,miscSquares[0][1],squares,"g1")}
              {this.renderSquare(0,2,miscSquares[0][2],squares,"f1")}
              {this.renderSquare(0,3,miscSquares[0][3],squares,"e1")}
              {this.renderSquare(0,4,miscSquares[0][4],squares,"d1")}
              {this.renderSquare(0,5,miscSquares[0][5],squares,"c1")}
              {this.renderSquare(0,6,miscSquares[0][6],squares,"b1")}
              {this.renderSquare(0,7,miscSquares[0][7],squares,"a1")}
            </div>
            <div className="board-row">
              {this.renderSquare(1,0,miscSquares[1][0],squares,"h2")}
              {this.renderSquare(1,1,miscSquares[1][1],squares,"g2")}
              {this.renderSquare(1,2,miscSquares[1][2],squares,"f2")}
              {this.renderSquare(1,3,miscSquares[1][3],squares,"e2")}
              {this.renderSquare(1,4,miscSquares[1][4],squares,"d2")}
              {this.renderSquare(1,5,miscSquares[1][5],squares,"c2")}
              {this.renderSquare(1,6,miscSquares[1][6],squares,"b2")}
              {this.renderSquare(1,7,miscSquares[1][7],squares,"a2")}
            </div>
            <div className="board-row">
              {this.renderSquare(2,0,miscSquares[2][0],squares,"h3")}
              {this.renderSquare(2,1,miscSquares[2][1],squares,"g3")}
              {this.renderSquare(2,2,miscSquares[2][2],squares,"f3")}
              {this.renderSquare(2,3,miscSquares[2][3],squares,"e3")}
              {this.renderSquare(2,4,miscSquares[2][4],squares,"d3")}
              {this.renderSquare(2,5,miscSquares[2][5],squares,"c3")}
              {this.renderSquare(2,6,miscSquares[2][6],squares,"b3")}
              {this.renderSquare(2,7,miscSquares[2][7],squares,"a3")}
            </div>
            <div className="board-row">
              {this.renderSquare(3,0,miscSquares[3][0],squares,"h4")}
              {this.renderSquare(3,1,miscSquares[3][1],squares,"g4")}
              {this.renderSquare(3,2,miscSquares[3][2],squares,"f4")}
              {this.renderSquare(3,3,miscSquares[3][3],squares,"e4")}
              {this.renderSquare(3,4,miscSquares[3][4],squares,"d4")}
              {this.renderSquare(3,5,miscSquares[3][5],squares,"c4")}
              {this.renderSquare(3,6,miscSquares[3][6],squares,"b4")}
              {this.renderSquare(3,7,miscSquares[3][7],squares,"a4")}
            </div>
            <div className="board-row">
              {this.renderSquare(4,0,miscSquares[4][0],squares,"h5")}
              {this.renderSquare(4,1,miscSquares[4][1],squares,"g5")}
              {this.renderSquare(4,2,miscSquares[4][2],squares,"f5")}
              {this.renderSquare(4,3,miscSquares[4][3],squares,"e5")}
              {this.renderSquare(4,4,miscSquares[4][4],squares,"d5")}
              {this.renderSquare(4,5,miscSquares[4][5],squares,"c5")}
              {this.renderSquare(4,6,miscSquares[4][6],squares,"b5")}
              {this.renderSquare(4,7,miscSquares[4][7],squares,"a5")}
            </div>
            <div className="board-row">
              {this.renderSquare(5,0,miscSquares[5][0],squares,"h6")}
              {this.renderSquare(5,1,miscSquares[5][1],squares,"g6")}
              {this.renderSquare(5,2,miscSquares[5][2],squares,"f6")}
              {this.renderSquare(5,3,miscSquares[5][3],squares,"e6")}
              {this.renderSquare(5,4,miscSquares[5][4],squares,"d6")}
              {this.renderSquare(5,5,miscSquares[5][5],squares,"c6")}
              {this.renderSquare(5,6,miscSquares[5][6],squares,"b6")}
              {this.renderSquare(5,7,miscSquares[5][7],squares,"a6")}
            </div>
            <div className="board-row">
              {this.renderSquare(6,0,miscSquares[6][0],squares,"h7")}
              {this.renderSquare(6,1,miscSquares[6][1],squares,"g7")}
              {this.renderSquare(6,2,miscSquares[6][2],squares,"f7")}
              {this.renderSquare(6,3,miscSquares[6][3],squares,"e7")}
              {this.renderSquare(6,4,miscSquares[6][4],squares,"d7")}
              {this.renderSquare(6,5,miscSquares[6][5],squares,"c7")}
              {this.renderSquare(6,6,miscSquares[6][6],squares,"b7")}
              {this.renderSquare(6,7,miscSquares[6][7],squares,"a7")}
            </div>
            <div className="board-row">
              {this.renderSquare(7,0,miscSquares[7][0],squares,"h8")}
              {this.renderSquare(7,1,miscSquares[7][1],squares,"g8")}
              {this.renderSquare(7,2,miscSquares[7][2],squares,"f8")}
              {this.renderSquare(7,3,miscSquares[7][3],squares,"e8")}
              {this.renderSquare(7,4,miscSquares[7][4],squares,"d8")}
              {this.renderSquare(7,5,miscSquares[7][5],squares,"c8")}
              {this.renderSquare(7,6,miscSquares[7][6],squares,"b8")}
              {this.renderSquare(7,7,miscSquares[7][7],squares,"a8")}
            </div>
          </div>
        );
      }
      else {
        return (
          <div>
            <div className="board-row">
              {this.renderSquare(0,0,miscSquares[0][0],squares,"a8")}
              {this.renderSquare(0,1,miscSquares[0][1],squares,"b8")}
              {this.renderSquare(0,2,miscSquares[0][2],squares,"c8")}
              {this.renderSquare(0,3,miscSquares[0][3],squares,"d8")}
              {this.renderSquare(0,4,miscSquares[0][4],squares,"e8")}
              {this.renderSquare(0,5,miscSquares[0][5],squares,"f8")}
              {this.renderSquare(0,6,miscSquares[0][6],squares,"g8")}
              {this.renderSquare(0,7,miscSquares[0][7],squares,"h8")}
            </div>
            <div className="board-row">
              {this.renderSquare(1,0,miscSquares[1][0],squares,"a7")}
              {this.renderSquare(1,1,miscSquares[1][1],squares,"b7")}
              {this.renderSquare(1,2,miscSquares[1][2],squares,"c7")}
              {this.renderSquare(1,3,miscSquares[1][3],squares,"d7")}
              {this.renderSquare(1,4,miscSquares[1][4],squares,"e7")}
              {this.renderSquare(1,5,miscSquares[1][5],squares,"f7")}
              {this.renderSquare(1,6,miscSquares[1][6],squares,"g7")}
              {this.renderSquare(1,7,miscSquares[1][7],squares,"h7")}
            </div>
            <div className="board-row">
              {this.renderSquare(2,0,miscSquares[2][0],squares,"a6")}
              {this.renderSquare(2,1,miscSquares[2][1],squares,"b6")}
              {this.renderSquare(2,2,miscSquares[2][2],squares,"c6")}
              {this.renderSquare(2,3,miscSquares[2][3],squares,"d6")}
              {this.renderSquare(2,4,miscSquares[2][4],squares,"e6")}
              {this.renderSquare(2,5,miscSquares[2][5],squares,"f6")}
              {this.renderSquare(2,6,miscSquares[2][6],squares,"g6")}
              {this.renderSquare(2,7,miscSquares[2][7],squares,"h6")}
            </div>
            <div className="board-row">
              {this.renderSquare(3,0,miscSquares[3][0],squares,"a5")}
              {this.renderSquare(3,1,miscSquares[3][1],squares,"b5")}
              {this.renderSquare(3,2,miscSquares[3][2],squares,"c5")}
              {this.renderSquare(3,3,miscSquares[3][3],squares,"d5")}
              {this.renderSquare(3,4,miscSquares[3][4],squares,"e5")}
              {this.renderSquare(3,5,miscSquares[3][5],squares,"f5")}
              {this.renderSquare(3,6,miscSquares[3][6],squares,"g5")}
              {this.renderSquare(3,7,miscSquares[3][7],squares,"h5")}
            </div>
            <div className="board-row">
              {this.renderSquare(4,0,miscSquares[4][0],squares,"a4")}
              {this.renderSquare(4,1,miscSquares[4][1],squares,"b4")}
              {this.renderSquare(4,2,miscSquares[4][2],squares,"c4")}
              {this.renderSquare(4,3,miscSquares[4][3],squares,"d4")}
              {this.renderSquare(4,4,miscSquares[4][4],squares,"e4")}
              {this.renderSquare(4,5,miscSquares[4][5],squares,"f4")}
              {this.renderSquare(4,6,miscSquares[4][6],squares,"g4")}
              {this.renderSquare(4,7,miscSquares[4][7],squares,"h4")}
            </div>
            <div className="board-row">
              {this.renderSquare(5,0,miscSquares[5][0],squares,"a3")}
              {this.renderSquare(5,1,miscSquares[5][1],squares,"b3")}
              {this.renderSquare(5,2,miscSquares[5][2],squares,"c3")}
              {this.renderSquare(5,3,miscSquares[5][3],squares,"d3")}
              {this.renderSquare(5,4,miscSquares[5][4],squares,"e3")}
              {this.renderSquare(5,5,miscSquares[5][5],squares,"f3")}
              {this.renderSquare(5,6,miscSquares[5][6],squares,"g3")}
              {this.renderSquare(5,7,miscSquares[5][7],squares,"h3")}
            </div>
            <div className="board-row">
              {this.renderSquare(6,0,miscSquares[6][0],squares,"a2")}
              {this.renderSquare(6,1,miscSquares[6][1],squares,"b2")}
              {this.renderSquare(6,2,miscSquares[6][2],squares,"c2")}
              {this.renderSquare(6,3,miscSquares[6][3],squares,"d2")}
              {this.renderSquare(6,4,miscSquares[6][4],squares,"e2")}
              {this.renderSquare(6,5,miscSquares[6][5],squares,"f2")}
              {this.renderSquare(6,6,miscSquares[6][6],squares,"g2")}
              {this.renderSquare(6,7,miscSquares[6][7],squares,"h2")}
            </div>
            <div className="board-row">
              {this.renderSquare(7,0,miscSquares[7][0],squares,"a1")}
              {this.renderSquare(7,1,miscSquares[7][1],squares,"b1")}
              {this.renderSquare(7,2,miscSquares[7][2],squares,"c1")}
              {this.renderSquare(7,3,miscSquares[7][3],squares,"d1")}
              {this.renderSquare(7,4,miscSquares[7][4],squares,"e1")}
              {this.renderSquare(7,5,miscSquares[7][5],squares,"f1")}
              {this.renderSquare(7,6,miscSquares[7][6],squares,"g1")}
              {this.renderSquare(7,7,miscSquares[7][7],squares,"h1")}
            </div>
          </div>
        );
      }
    }
  }
export default Board;