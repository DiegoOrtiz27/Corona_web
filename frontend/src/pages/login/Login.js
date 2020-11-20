import React from "react";
import axios from "axios";
import Input from "../../commons/Input/Input.jsx";
import Button from "../../commons/Button/Button.jsx";
import Head from "../../commons/Head/Head.jsx";
import Title from "../../commons/Title/Title.jsx";
import user from "../../image/user.png";

import contraseña from "../../image/password.png";
import "../../commons/Styles/fondos.css";
import "./login.css";
import Particles from "../../commons/particulas/Particles";
import { Link } from "react-router-dom";


class Login extends React.Component {
  state={}
  handleSubmit = e =>{
    axios.post('http://localhost:3001/', this.state)
    .then(()=>{
      console.log("Insertado Correctamente")
    })
    e.preventDefault();
  }

  handleChange = e =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }


  render(){
    return (
    <section className="Fondo">
      <div className="canvas">
        <Particles />
      </div>
      <Head />
      <div className="main">
        <form className="form" >
          <Title title="INICIAR SESIÓN" />
          <div>
            <Input placeholder="Ingrese email" img={user} type="email" name="correo" onChange={this.handleChange} value={this.state.correo}/>
            <Input placeholder="Ingrese contraseña" img={contraseña} type="password" name="contraseña" onChange={this.handleChange} value={this.state.contraseña}/>
          </div>
          <div className="buttons">
           
            <Button buttonText="Iniciar" direccion="/Mainplay" />
            <Button buttonText="Reistrarse" direccion="/Register" />
            <Link to="">¿Has olvidado tu contraseña?</Link>
          </div>
        </form>
      </div>
    </section>
  );}
  
}

export default Login;
