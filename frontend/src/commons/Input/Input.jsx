import React from 'react'
import './Input.css'
class Input extends React.Component{
    render(){
        return (
            <section>
                <div className= "input-container">
                <img src={this.props.img} alt=""/>
                <input type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} onChange={this.props.onChange} value={this.props.value}/>
                </div>
            </section>  
        )
    }
}

export default Input
