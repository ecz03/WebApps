import React, {Component} from 'react';
const axios = require('axios').default;

const url = "http://107.23.229.16:8000/nuevo"
//const testUrl = "https://catfact.ninja/fact"


class Start extends Component{
    constructor(props){
        super(props)
        this.state={
            num_jugadores : 2,
            gameNumber: "",
        };
        
        
        this.enterGame=this.enterGame.bind(this);
        this.NewGamePOST=this.NewGamePOST.bind(this);
        this.update_num_jugadores=this.update_num_jugadores.bind(this);
        this.createGame=this.createGame.bind(this);
        this.generateRandomGameId=this.generateRandomGameId.bind(this);
        this.updateGameNumber=this.updateGameNumber.bind(this);
        
        //this.newGameAPICall=this.newGameAPICall.bind(this);
        
    }
    
    
    
    async NewGamePOST(idJuego){
        const POSTdata = { 'idJuego': idJuego, 'num_jugadores':  this.state.num_jugadores};
        console.log(POSTdata);
        
        
        const response = await axios.post(
          url,
          POSTdata,
          { headers: { 'Content-Type': 'application/json' } }
        )
        if(response.data === "Procesado"){
            console.log("Actualizando ID a " + idJuego);
            this.props.updateGameID(idJuego);
            this.props.navigate();
        }
    }
    

  
    enterGame(){
        console.log("This is the game number: " + this.state.gameNumber);
        //this.getDataAxios();
        this.props.updateGameID(parseInt(this.state.gameNumber));
        this.props.navigate();
    }
    
    updateGameNumber(evt){
        this.setState({
            gameNumber: evt.target.value 
        });
    }
    
    update_num_jugadores(evt){
        this.setState({
            num_jugadores: evt.target.value
            });
    }
    
    createGame(){
        this.generateRandomGameId();
        //console.log("El numero de jugadores es: " + this.state.num_jugadores);
        var idJuego = this.generateRandomGameId();
        this.NewGamePOST(idJuego);
        
        
    }
    
    generateRandomGameId(){
        const min = 1000;
        const max = 9999;
        var random = Math.ceil(min + Math.random() * (max- min));
        return random;
    }
    
    render(){
        return( 
           <div className="container text-white">
           
               <div className="d-flex p-5 flex-column">
               
                   <div className="text-center display-1">
                        The Crazy 88
                   </div>
                 
                   <div className="d-flex p-3 mt-5 flex-row justify-content-center">
                       
                           <div className="col-md-3">
                               <div className="form-group mb-0">
                                   <label htmlFor="totalPlayers">
                                       Número de Jugadores
                                   </label>
                                   <select className="form-control" id="num_jugadores" value={this.state.num_jugadores} onChange={evt => this.update_num_jugadores(evt)}>
                                       <option>2</option>
                                       <option>3</option>
                                       <option>4</option>
                                       <option>5</option>
                                   </select>
                               </div>
                           </div>
                           
                           <div className="col-md-3 ml-3 span2 align-self-end">
                               <button className="btn btn-primary btn-block" onClick={this.createGame}>
                                    Nuevo Juego
                               </button>
                           </div>
                           
                   </div>
                   
                   <div className="d-flex p-3 flex-row justify-content-center">
                   
                       
                           <div className="col-md-3">
                               <input
                               type="text"
                               name="gameNumber"
                               className="form-control"
                               placeholder="Numero de Juego"
                               onChange={this.updateGameNumber}
                               value={this.state.gameNumber}
                               />
                           </div>
                           
                           <div className="col-md-3 ml-3 span2" >
                               <button onClick={this.enterGame} className="btn btn-primary btn-block">
                                    Unirse a un Juego
                               </button>
                           </div>
                       
                   </div>
               </div>
           </div>
           );
    }
}

export default Start

    