import React from "react";
import axios from "axios";
import "../../commons/Styles/fondos.css";
import "./Register.css";
import user from "../../image/user.png";
import contraseña from "../../image/password.png";
import email from "../../image/email.png";
import Head from "../../commons/Head/Head";
import Title from "../../commons/Title/Title";
import Input from "../../commons/Input/Input";
import Button from "../../commons/Button/Button";
import Particles from "../../commons/particulas/Particles" 
class Register extends React.Component {
  state={
    correo:'',
    contraseña:'',
    userName:''
  }
  handleSubmit = e =>{
   
    axios.post('http://localhost:3001/Register', this.state.form)
    .then(()=>{
      console.log("Insertado Correctamente")
    })
    e.preventDefault();
  }

  handleChange = async (e) =>{
    e.persist();
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]:e.target.value
      }
    })
    console.log(this.state.form)
  }

  render() {
    return (
      <section className="Fondo">
         <div className="canvas">
        <Particles />
      </div>
        <Head />
        <div >
          <form className="form">
            <Title title="REGISTRARSE" />
            <div>
              <Input placeholder="Ingrese email" img={user} type="email" name="correo" onChange={this.handleChange}/>
              <Input placeholder="Nombre de usuario" type="text" name="userName" img={email} onChange={this.handleChange} />
              <Input placeholder="Ingrese contraseña" img={contraseña} type="password"  name="contraseña" onChange={this.handleChange}/>
            </div>
            <div className="buttons">
              <Button buttonText="Aceptar" onClick={this.handleSubmit} />
              <Button buttonText="Regresar" direccion="/"/>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
export default Register;
