import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'
class Button extends React.Component{
  render(){
    return(
    <div>
       <Link to={this.props.direccion}>
    <button type="submit" class="btn button btn-primary mb-2 active" onClick={this.props.onClick}>{this.props.buttonText} </button>
              </Link>
   
    </div>    
    )
  }
}

export default Button