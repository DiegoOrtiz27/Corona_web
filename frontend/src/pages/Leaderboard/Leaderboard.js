import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Particles from "../../commons/particulas/Particles"
import "./styles.css";
import List from "./List";
import { getInitialData, genNextData } from "./data";
import Head from '../../commons/Head/Head'
import Footer from '../../commons/Footer/Footer'

function Leaderboard () {
  const [data, setData] = useState(getInitialData());
  const doSwitch = () => {
    setData(d => {
      [d[0], d[1]] = [d[1], d[0]];
      d[0].score += 1000;
      d[1].score += 2000;
      return [...d];
    });
  };
  useEffect(() => {
    // const timer = setInterval(() => setData(genNextData()), 1000);
    // return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="canvas">
        <Particles />
      </div>
      <Head/>
      <button onClick={doSwitch}>switch</button>
      <List data={data} />
      <Footer footer="footerRanking"/>
    </div>
  );
}

export default Leaderboard