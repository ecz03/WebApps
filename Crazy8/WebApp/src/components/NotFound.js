import React, {Component} from 'react';
import sad from '../images/chilaquilSad.png'
class NotFound extends Component{
    
    render(){
        return(
        
        <div className="mt-5 text-light display-2 text-center">
            Aquí no hay nada
            <img src={sad} alt="Chilaquil"/>
        </div>
        
        );
    }
}

export default NotFound