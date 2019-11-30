import React from 'react';
import './App.css';
import NotFound from './components/NotFound.js'
import Start from './components/Start.js'
import Enter from './components/Enter.js'
import Game from './components/Game.js'



class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      gameId: 9999,
      playerId: 0,
      page: "start"
    }
    
    this.updateGameIDValue=this.updateGameIDValue.bind(this);
    this.updatePlayerIDValue=this.updatePlayerIDValue.bind(this);
    this.navigate=this.navigate.bind(this);
    this.navigateToGame=this.navigateToGame.bind(this);
    
  }
  
  navigate = () => {
    console.log("GOING to enter");
    console.log("checking state: " + this.state.gameId)
    this.setState({
      page:"enter"
    });
  }
  
  navigateToGame = () => {
    console.log("Going to Game");
    console.log("checking state: " + this.state.gameId)
    this.setState({
      page:"game"
    });
  }
  
  
  updateGameIDValue(newGameId) {
    //console.log("Before : " + this.state.gameId);
    this.setState({
      gameId:newGameId,
    }, ()=>{
       //console.log("New value: " + newGameId)
       console.log("New Value gameId: " + this.state.gameId)
    });
  }
  
  updatePlayerIDValue(newPlayerId){
    this.setState({
      playerId: newPlayerId,
    }, ()=> {
      console.log("New Value playerId: " + this.state.playerId)
    });
  }
  
  
 render(){
   var currentPage = <div></div>;
   if (this.state.page === "start"){
     currentPage = <div><Start updateGameID={this.updateGameIDValue.bind(this)} navigate={this.navigate.bind(this)}/></div>;
   } else if(this.state.page === "enter"){
     currentPage = <div><Enter updatePlayerID={this.updatePlayerIDValue.bind(this)} gameId={this.state.gameId} navigateToGame={this.navigateToGame.bind(this)}/></div>;
   } else if(this.state.page === "game"){
     currentPage = <div><Game gameId={this.state.gameId} playerId={this.state.playerId} /></div>;
   } else {
     currentPage = <div><NotFound /></div>;
   }
   return(
     currentPage
     /*
   <Router>
        <Switch>
          <Route exact path="/start">
            <Start updateGameID={this.updateGameIDValue.bind(this)} navigate={this.navigate.bind(this)}/>
          </Route>
          <Route exact path="/enter">
            <Enter gameId={this.state.gameId}/>
          </Route>
          <Route exact path="/home">
            <Redirect to="/start" />
          </Route>
          <Route exact path="/game">
            <Game />
          </Route>
          <Route exact path="/">
            <Redirect to="/start" />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
          
        </Switch>
    </Router>
    */
  );
 }
  
}


export default App;
