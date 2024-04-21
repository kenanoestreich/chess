import Game from "components/Game"

class LoginForm extends React.Component{
    constructor(props){
      super(props);
      this.state = {
      LoginError: ""
      }
    }
  
    componentDidMount(){
      socket.on("LoginSuccess", () => this.loggedIn());
      socket.on("LoginFailure", () => this.loginFailure());
      socket.on("UserAlreadyExists", () => this.usernameTaken());
    }
  
    loggedIn() {
      let tryusername = document.getElementById("username").value; 
      sessionStorage.setItem("currentUser",tryusername);
      console.log(tryusername + " Successfully Logged In!")
      this.render(); 
    }
  
    loginFailure(){
      console.log("Log in attempt FAILED!!!")
      this.setState({
        LoginError: "Incorrect Username/Password"
      })
    }
    attemptLogin(){
      let tryusername = document.getElementById("username").value; 
      let trypassword = document.getElementById("password").value; 
      socket.emit("LoginAttempt", {username: tryusername, password: trypassword});
      
    }
  
    register(){
      let tryusername = document.getElementById("username").value; 
      let trypassword = document.getElementById("password").value; 
      socket.emit("RegisterUser", {username: tryusername, password: trypassword});
    }
  
    usernameTaken(){
      this.setState({
        LoginError: "Username Taken"
      })
    }
  
    render(){
      if(sessionStorage.getItem("currentUser")===null){
          return(
            <div>
              <h1>Login</h1>
                <h2>
                  Enter Username: <br></br><input type = "text" id = "username"></input> <br></br><br></br>
                  Enter Password: <br></br><input type = "password" id = "password"></input>
                </h2>
                  <div id="LogInError"><br></br>{this.state.LoginError}</div><br></br>
                  <button id = "login_btn" onClick={()=>this.attemptLogin()}>Log In</button>
                  <br></br><br></br>Don't have an account? <button id="signup_btn" onClick={() =>this.register()}>Sign Up!</button>
            </div>
        );
      }else{
        socket.emit("FetchRecord", {username: sessionStorage.getItem("currentUser")});
        socket.on("ReceiveRecord", function(data){
          console.log(JSON.stringify(data));  
          root.render(
            <div>
              <LobbyPage 
                wins={data["wins"]} 
                losses={data["losses"]}
              />
              <br></br>
              <h2>Practice While You Wait</h2> 
              <Game color="both"/>
            </div>
          );
        });
      }
    }
  }
  export default LoginForm;