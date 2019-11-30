import React, {Component} from 'react';
import Octicon, {getIconByName} from '@primer/octicons-react';
const axios = require('axios').default;

const url = "http://18.232.108.179:8000/players";
const urlUserCount = "http://18.232.108.179:8000/playerCount";
class Enter extends Component{
    constructor(props){
        super(props)
        this.state={
            gameId: props.gameId,
            playerId: 0,
            name: "",
            totalPlayers: "-",
            connected: "-",
            nameButton: false,
            enterButton: true,
        };
        
        
        this.updateName=this.updateName.bind(this);
        this.sendName=this.sendName.bind(this);
        this.fetchPlayers=this.fetchPlayers.bind(this);
        this.toGame=this.toGame.bind(this);
        
    }
    
    componentDidMount() {
        this.fetchPlayers();
        this.timer = setInterval(() => this.fetchPlayers(), 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }
    
    toGame(){
        this.props.navigateToGame();
    }
    
    async fetchPlayers(){
        //console.log("Fetching players")
       const GETdata = {"idJuego": this.state.gameId};
       console.log(GETdata);
        const response = await axios.get(
          urlUserCount,
          { headers: { 'Content-Type': 'application/json', 'id_juego': this.state.gameId}});
        if(response.data !== "JuegoInexistente"){
            var data = response.data;
            //console.log("Datos entrantes: " + data); 
            this.setState({
                totalPlayers: data.total_jugadores,
                connected: data.conectados,
            }, ()=>{
                console.log(this.state.totalPlayers);
                console.log(this.state.connected);
                
                if(this.state.totalPlayers === this.state.connected){
                    console.log("Todos los jugadores conectados, iniciar juego");
                    clearInterval(this.timer);
                    this.timer = null;
                    this.setState({
                       enterButton: false, 
                    });
                }
            });
        } else {
            console.log(response.data)
            console.log("Juego inexistente, detendiendo fetch");
            //mostrar algo
            clearInterval(this.timer);
            this.timer = null;
        }
    }
        
    updateName(e){
        this.setState({
           name: e.target.value 
        });
        //console.log("Changed: " + this.state.name);
    }
    
    async sendName(){
        
       //console.log("Name to send: " + this.state.name);
       const POSTdata = { 'idJuego': this.state.gameId, 'nombre':  this.state.name};
       console.log(POSTdata);
        const response = await axios.post(
          url,
          POSTdata,
          { headers: { 'Content-Type': 'application/json' } }
        )
        if(response.data !== "JuegoLleno" && response.data !== "JuegoInexistente"){
            var data = response.data;
            //console.log("Datos entrantes: " + data); 
            this.setState({
                totalPlayers: data.total_jugadores,
                connected: data.conectados,
                playerId: data.num_jugador,
                nameButton: true,
            }, ()=>{
                console.log(this.state.totalPlayers);
                console.log(this.state.connected);
                console.log("Player ID: " + this.state.playerId);
                this.props.updatePlayerID(this.state.playerId);
            });
        }
        
        //this.timer = setInterval(() => this.fetchPlayers(), 1000);
    }

    render(){
        //console.log("This is the game id "+this.props.gameId)
        
        return( 
           <div className="container text-white">
           
               <div className="d-flex p-5 flex-column">
               
                   <div className="text-center display-1">
                        Código de Juego: 
                   </div>
                   <div className="text-center display-2 font-weight-bold">
                   {this.props.gameId}
                   </div>
                   <div className="d-flex p-3 mt-5 mb-5 flex-row justify-content-center">
                   
                       
                           <div className="col-md-3">
                               <input
                               type="text"
                               name="playerName"
                               className="form-control"
                               placeholder="Introduce tu nombre"
                               value={this.state.value}
                               onChange={this.updateName}
                               required
                               />
                           </div>
                           
                           <div className="col-md-3 ml-3 span2" >
                               <button onClick={this.sendName} className="btn btn-primary btn-block" disabled={this.state.nameButton}>
                                    Unirse al Juego
                               </button>
                           </div>
                       
                   </div>
                   
                   <div className="d-flex p-3 mt-2 flex-row justify-content-center ">
                   
                       
                           <div className="d-flex justify-content-center col-md-3">
                               <div className="display-3 font-weight-bolder">
                               {this.state.connected} / {this.state.totalPlayers}
                               </div>
                           </div>
                           
                           <div className="d-flex justify-content-center col-md-3 ml-3 span2 align-self-end" >
                                <div className="d-flex" >
                                   <button onClick={this.toGame}className="d-flex btn btn-primary btn-block" disabled={this.state.enterButton}>
                                   <Octicon icon={getIconByName('sign-in')} size='large' className="align-self-center"/>
                                   </button>
                                </div>
                           </div>
                       
                   </div>
               </div>
           </div>
           );
    }
}

export default Enter

    