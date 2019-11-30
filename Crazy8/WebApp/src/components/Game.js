import React, {Component} from 'react';
//import sad from '../images/chilaquilSad.png'
import {cartasJugador,cartaActual,turno,estado,id_jugador,tamanioBaraja,cartasXJugador,paloOcho} from '../cartas.json';
const axios = require('axios').default;

const baseUrl= "http://18.232.108.179:8000";

class Game extends Component{
    constructor(props) {
    super(props);
    const id = props.playerId;
    this.state = {
      cartasJugador,
      cartaActual,
      turno,
      estado,
      cartasXJugador,
      id_jugador,
      tamanioBaraja,
      paloOcho,
      names:{ id : ""},
      hand: {
    "cartasJugador": [],
    "turno": 0,
    "cartaActual": {
        "_id": "",
        "id_carta": 0,
        "palo": "",
        "valor": 0,
        "puntaje": 0
    },
    "paloOcho": "",
    "estado": "inicio",
    "id_jugador": "0",
    "tamanioBaraja": 0,
    "cartasXJugador": [ ]
},
    }
    this.fetchNames=this.fetchNames.bind(this);
    this.fetchHand=this.fetchHand.bind(this);
    this.tirarCarta=this.tirarCarta.bind(this);
  }
  
  async fetchNames(){
    console.log("Fetching names")
     console.log({'Content-Type': 'application/json', "idJuego": this.props.gameId})
     const response = await axios.get(baseUrl+"/players",
      {headers: {'Content-Type': 'application/json', "idJuego": this.props.gameId}}
     );
     
     if(response.data){
       this.setState({
         names:response.data
       }, ()=>{
         console.log("New players names");
         console.log(this.state.names);
       });
     } else {
       console.log("Out of if");
       console.log(response.data);
     }
   }
  
  
    async fetchHand(){
      var url = baseUrl+"/"+this.props.gameId+"/"+this.props.playerId;
      console.log(url);
      const response = await axios.get(url);
      
      if(response.data){
        this.setState({
          hand: response.data
        }, ()=>{
          console.log("New HAND data");
          console.log(this.state.hand);        
          
        });
      }
    }
    
    async tirarCarta(){
      var url = "";
    }
    
    componentDidMount() {
        this.fetchNames();
        this.fetchHand();
        this.timer = setInterval(() => this.fetchHand(), 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }
    
    
    /*
    render(){
        return(
        
        <div className="mt-5 text-light display-2 text-center">
            Game
            <img src={sad} alt="Chilaquil"/>
        </div>
        
        );
    }*/
    
  
  tirarCarta(index) {
    if (window.confirm('¿Quieres tirar esta carta?')){
      this.setState({
      cartasJugador:this.state.hand.cartasJugador.filter((e,i)=>{
          return i !== index;
        })
      });
    }
  }
  
  render (){
    
    const cincoCartas = this.state.hand.cartasJugador.map((carta,i)=>{
    if (i<5){
      return(
        <div className="flex-col p-3" >
          <div className="card mt-4 ml-2 mr-2">
            <img className="d-block w-20" src={`${require('./BeetleRoyale/'+carta.id_carta+'.PNG')}`} alt="First slide"/>
          </div>
          <div className="card-footer">
          <button className="btn btn-danger" onClick={this.tirarCarta.bind(this,i)}>
            Tirar
          </button>
          </div>
        </div>
         )}
    });
    
    const masSlides = this.state.hand.cartasJugador.map((carta,i)=>{
      
        if(i>4){
          return(
            <div className="carousel-item">
              <div className="d-flex flex-row justify-content-md-center ">
                <div className="flex-col p-3" >
                  <div className="card mt-4 ml-2 mr-2">
                    <img className="d-block w-20" src={`${require('./BeetleRoyale/'+carta.id_carta+'.PNG')}`} alt="First slide"/>
                  </div>
                  <div className="card-footer">
                  <button className="btn btn-danger" onClick={this.tirarCarta.bind(this,i)}>
                    Tirar
                  </button>
                  </div>
                </div>
              </div>
            </div>
             )
      }
    });
    
    var jugadores = <div></div>;
    this.state.hand.cartasXJugador.forEach((entry)=>{
      jugadores = <div><li class="list-group-item">{this.state.names[parseInt(entry.nombre.charAt(8))]} : {entry.numeroCartas}</li>{jugadores}</div>
    });
    
    /*
    const jugadores = this.state.cartasXJugador.map((jugador,i)=>{
      return(
        <li class="list-group-item">{jugador.nombre}: {jugador.numeroCartas}</li>
         );
    });*/

    
    const botonTomar = this.state.hand.cartasXJugador.map((jugador,i)=>{
      if(i===0){
        if(this.state.hand.turno.toString() === this.props.playerId){
          return(<button className="btn btn-danger">
                Tomar 1 carta
              </button>)
        }else{
          return(<button className="btn btn-danger" disabled>
                Tomar 1 carta
              </button>)
        }
      }
    })
    
    const botonSaltar = this.state.hand.cartasXJugador.map((jugador,i)=>{
      if(i===0){
        if(this.state.hand.turno.toString() === this.props.playerId && this.state.hand.tamanioBaraja === 0){
          return(<button className="btn btn-danger">
                Saltar turno
              </button>)
        }else{
          return(<button className="btn btn-danger" disabled>
                Saltar turno
              </button>)
        }
      }
    })
    
    const selectPalo = this.state.hand.cartasXJugador.map((jugador,i)=>{
      if(i===0){
        if(this.state.hand.turno.toString() === this.props.playerId && this.state.hand.estado === "ochoActual"){
          return(<form>
              <div class="form-group">
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Selecciona palo</option>
                  <option>picas</option>
                  <option>corazones</option>
                  <option>treboles</option>
                  <option>diamantes</option>
                </select>
              </div>
            </form>)
        }else{
          return(<form>
              <div class="form-group">
                <select disabled class="form-control" id="exampleFormControlSelect1">
                  <option>Selecciona palo</option>
                  <option>picas</option>
                  <option>corazones</option>
                  <option>treboles</option>
                  <option>diamantes</option>
                </select>
              </div>
            </form>)
        }
      }
    })
    
    const paloActual = this.state.hand.cartasXJugador.map((jugador,i)=>{
      if(i===0){
        if(this.state.hand.paloOcho === ''){
          return(this.state.hand.cartaActual.palo)
        }else{
          return(this.state.hand.paloOcho)
        }
      }
    })
    
    
    
    return(
      <div className="App">
      
        {/*barra nav cartas actuales*/}
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand text-light">
            Cartas totales <span className="badge badge-pill badge-light ml-2 mr-4">
                {this.state.hand.cartasJugador.length}
              </span>
              Eres el jugador <span className="badge badge-pill badge-light ml-2 mr-4">
                {this.props.playerId} : {this.state.names[this.props.playerId]}
              </span>
          </a>
        </nav>
        {/*termina barra nav cartas actuales*/}

        
        {/*inicia carrusel*/}
        {/*inicia codigo base*/}
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex flex-row justify-content-md-center ">
        {/*termina codigo base*/}
                {cincoCartas}
        {/*primeras 5 cartas*/}
        {/*si i%5 = 0 & i != 0*/}
              </div>
            </div>
            {masSlides}
          </div>
    
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/*termina carrusel*/}
        
        
        <div className="d-flex flex-row justify-content-md-center ">
          {/*Inicia botón para tomar*/}
          <div className="flex-col p-3" >
            {botonTomar}
          </div>
          {/*Termina botón para tomar*/}
        
          {/*Inicia botón para pasar*/}
          <div className="flex-col p-3" >
            {botonSaltar}
          </div>
          {/*Termina botón para pasar*/}
          
          {/*Inicia select palo*/}
          <div className="flex-col p-3" >
            {selectPalo}
          </div>
          {/*Termina select palo*/}
        </div>
        
        {/*Datos de juego*/}
        <div>
        {/*Inicia estadisticas generales*/}
          <div className="d-flex flex-row justify-content-md-center ">
            <div className="col col-md-2 p-3" >
              <div className="card mt-4 ml-2 mr-2">
                <div className="card-body">
                  <h4 className="card-title">Estadisticas actuales</h4>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Turno de jugador {this.state.hand.turno} : {this.state.names[this.state.hand.turno]}</li>
                  <li class="list-group-item">Estado del juego: {this.state.hand.estado}</li>
                  <li class="list-group-item">Palo actual: {paloActual}</li>
                </ul>
              </div>
            </div>
        {/*termina estadisticas generales*/}
        
        {/*Inicia carta actual*/}
            <div className="col col-md-2 p-3" >
              <div className="card mt-4 ml-2 mr-2">
                <div className="card-body">
                  <h4 className="card-title">Carta en pila de descarte</h4>
                  <img className="d-block w-20" src={`${require('./BeetleRoyale/'+ this.state.hand.cartaActual.id_carta+'.PNG')}`} alt="Carta Actual"/>
                </div>
              </div>
            </div>
        {/*termina carta actual*/}
        
        {/*Inicia estadisticas jugadores*/}
            <div className="col col-md-2 p-3" >
              <div className="card mt-4 ml-2 mr-2">
                <div className="card-body">
                  <h4 className="card-title">Cartas por jugador</h4>
                </div>
                <ul class="list-group list-group-flush">
                  {jugadores}
                </ul>
              </div>
            </div>
          </div>
        {/*Termina estadisticas jugadores*/}
        </div>
        {/*termina datos de juego*/}
      </div>
    );
  }
    
    
}

export default Game