import React from "react";
import Card from "../../elements/Card/Card";
import Title from "../../elements/Title/Title";

import Slider from 'react-slick'
import {MoonLoader} from 'react-spinners'
// Import Css files
import Classes from "./Contenue.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

  const IMG = `http://image.tmdb.org/t/p/w185/`;


//{series.results.map(s => (<Card name={s.name} img={IMG + s.poster_path}/>))}
const Contenue = ({ series , sLoad }) => {
  
  // Setting react-Slick ( Carouselle) 
  let settings = {
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 6,
    slidesToScrool: 4,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScrool: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScrool: 2
        }
      }
    ]
  }

  return (
    <div className={Classes.ContenueWrapper}>
      <h3>Contenue</h3>
      <Title title='Tv Show'/>
      <div className={Classes.CardWrrapper}>
        {sLoad ? <Slider {...settings}>{
          series.results.map(s => <Card name={s.name} img={IMG + s.poster_path}/>) }</Slider>: <MoonLoader />}
      </div>
    </div>
  );
};

export default Contenue;
