import React, {useState, useEffect } from "react";
import Axios from 'axios'

import { Switch, Link, Route} from 'react-router-dom'

// Component and Element
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Contenue from "./components/Contenue/Contenue";

// Css
import "./App.css";

// Constance APiKey and Url
const API_KEY = "bbd2542b8c37690c53dab4cb39912bb8";
const URL_TV = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=fr&page=1`;
const URL_MOVIE = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr&page=1`;
const URL_UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=fr&page=1`;
const URL_GENRE = `https://api.themoviedb.org/3/genre/tv/list?language=en-US&api_key=${API_KEY}`;




function App() {

  // Use State
  const [series, setSeries] = useState([]);
  const [sLoad, setSload] = useState(false)

  // Use Effect
  useEffect(() => {
    const getSeries = async () => {
      const serie = await Axios.get(URL_TV);
      setSeries(serie.data);
      setSload(true)
    };
    getSeries()
  }, [])
console.log(sLoad)
  return (
    <div className="App">
      <div className="Left">
        <Menu />
      </div>
      <div className="Right">
        <Header />
        <Contenue series={series} sLoad={sLoad}/>
      </div>
    </div>
  );
}

export default App;
