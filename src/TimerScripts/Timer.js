import React from 'react';

// Adapted from https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks

class Timer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      time : this.props.time,
      isActive : this.props.isActive
    }
  }

  switch(){
    let change = this.state.isActive;
    change = !change; 
    this.setState({
      isActive : change
    });
  }

  componentDidMount() {
    let interval = null;
    if (this.state.isActive && this.state.time>0) {
      interval = setInterval(() => {
        let newtime = this.state.time;
        if (newtime>0){
          newtime--;
          this.setState({
            time: newtime
          });
        }
      }, 1000);
    } 
    else if (!this.state.isActive && this.state.time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }
  
    
  render() {
    let time = this.state.time; 
    return (
      <div className="app">
        <div className="time">
          {Math.floor(time/60)}m{time%60}s
        </div>
        <div id="switch">
        </div>
      </div>
    );
  }
};

export default Timer;