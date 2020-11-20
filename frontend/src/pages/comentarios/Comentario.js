import React from "react";
import Head from "../../commons/Head/Head.jsx";
import Footer from "../../commons/Footer/Footer";
import Particles from "../../commons/particulas/Particles";
import CommentBox from "./componentes/CommentBox";
import Comment from "./componentes/Comment";
import "./dist/style.css"
class Comentario extends React.Component {
 render(){
    return (
        <section className="Fondo">
          <div className="canvas">
            <Particles />
          </div>
          <Head />
          <div className="main">
            <form className="formComentarios">
              <CommentBox />
           
              <Comment/>
              
            </form>
            <Footer footer="footerComentario"/>
          </div>
        </section>
      );
 }
}
export default Comentario;
