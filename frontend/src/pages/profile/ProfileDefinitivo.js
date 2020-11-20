import React, { Component } from "react";
import GetAvatar from "./components/GetAvatar";
import Profile from "./components/Profile";
import defaultImage from "./components/defaultImage";
import Head from "../../commons/Head/Head.jsx";
import Footer from "../../commons/Footer/Footer";
import Particles from "../../commons/particulas/Particles";
import Title from "../../commons/Title/Title.jsx";
import Input from "../../commons/Input/Input";
import user from "../../image/user.png";
import contraseña from "../../image/password.png";
import email from "../../image/email.png";
import Button from "../../commons/Button/Button";
import "./Definitivo.css"
class Profiledefinitivo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAvatarDefault: true,
      profile: {
        avatar: defaultImage,
      },
    };
    this.updateAvatar = this.updateAvatar.bind(this);
  }

  updateAvatar(img) {
    const { profile } = this.state;
    this.setState((prevState) => {
      const newProfile = { ...profile, avatar: img };
      return {
        profile: newProfile,
        isAvatarDefault: false,
      };
    });
  }

  render() {
    const { profile, isAvatarDefault } = this.state;
    return (
      <section className="Fondo">
        <div className="canvas">
          <Particles />
        </div>
        <Head />
        <div className="main">
          <form className="formProfile">
            <Title title="PERFIL" />
            <div className="App">
              <GetAvatar
                avatar={profile.avatar}
                isAvatarDefault={isAvatarDefault}
                updateAvatar={this.updateAvatar}
              />
              <Profile avatar={profile.avatar} />
            </div>
            <div className="containerInput">
              <Input placeholder="Ingrese email" img={user} />
              <Input placeholder="Nombre de usuario" img={email} />
              <Input placeholder="Ingrese contraseña" img={contraseña} />
            </div>
            <div className="buttons">
              <Button buttonText="Cambiar" />
              <Button buttonText="Regresar" direccion="/MainPlay"  />
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Profiledefinitivo;
