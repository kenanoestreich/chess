class LobbyPage extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        status : null,
      }
    }
    componentDidMount(){
      socket.on("StartGame", function(data){
        console.log("Joined Room: " + data["roomname"]);
        console.log(data["players"]);
        let iStart; 
        if(data["players"].indexOf(sessionStorage.getItem("currentUser"))===0){
          your_color = "white";
          iStart = true;
        }else{
          your_color = "black";
          iStart = false; 
        }
        console.log(your_color);
        let time = data["time"];
        console.log("Time Control: " + data["time"]);  
        if (time===1){
          root.render(
            <div>
              <Game 
                color={your_color} startTime={time*60}
              />
            </div>
          );
        }
        else if (time===5){
          root.render(
            <div>
              <Game 
                color={your_color} startTime={time*60}
              />
            </div>
          );
        }
        else if (time===10){
          root.render(
            <div>
              <Game 
                color={your_color} startTime={time*60}
              />
            </div>
          );
        }
        else if (time===30){
          root.render(
            <div>
              <Game 
                color={your_color} startTime={time*60}
              />
            </div>
          );
        }
      });
  
    }
    
  
    joinLobby(time){
      socket.emit("JoinLobby", {TimeControl: time, username: sessionStorage.getItem("currentUser")});
      this.setState({
        status : "Waiting..."
      })
    }
  
    render(){
      let wins = this.props.wins;
      let losses = this.props.losses; 
      let percentage; 
      let status = this.state.status; 
      if (losses===0){
        if (wins>0){
          percentage = 100 + "%"; 
        }
        else{
          percentage = "No Games Played";
        }
      }
      else {
        percentage = Math.round((wins/(wins+losses))*100) + "%";
      }
      return (
        <div>
          <h1>Welcome {sessionStorage.getItem("currentUser")}!</h1>
          <span>All Time Wins: {wins}</span>
          <br></br>
          <span>All Time Losses: {losses}</span>
          <br></br>
          <span>Win Percentage: {percentage}</span>
          <br></br>
          <br></br>
          <h1>Join a Lobby</h1>
          <span><button id = "1Min" onClick={()=>this.joinLobby(1)}>1 Minute ⁍</button>
          <button id="5Min" onClick={()=>this.joinLobby(5)}>5 Minute 🗲</button>
          <button id="10Min" onClick={()=>this.joinLobby(10)}>10 Minute 👤</button>
          <button id="30Min" onClick={()=>this.joinLobby(30)}>30 Minute 🐢</button>
          </span>
          <h3>{status}</h3>  
        </div>
      )
    }
  }