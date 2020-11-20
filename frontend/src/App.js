import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Comentario from "./pages/comentarios/Comentario"
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import mainPlay from "./pages/MainPlay/MainPlay";
import Particles from "./commons/particulas/Particles"
import "./commons/Styles/fondos.css"
import Quiz from './pages/Quiz/QuizFinal'
import Leaderboard from './pages/Leaderboard/Leaderboard'
import Profile from "./pages/profile/ProfileDefinitivo"

class App extends React.Component {
  render() {
    return (
      <div className="canvas">
        <Particles />
      </div>,
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/MainPlay" component={mainPlay} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Quiz" component={Quiz} />
          <Route exact path="/Leaderboard" component={Leaderboard} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Comentario" component={Comentario}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
