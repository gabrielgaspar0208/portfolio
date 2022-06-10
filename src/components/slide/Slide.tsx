import foto1 from '../../assets/images/foto1.jpg';
import foto2 from '../../assets/images/foto2.jpg';
import foto3 from '../../assets/images/foto3.jpg';
import '../slide/slide.scss';

import Carousel from 'nuka-carousel';
import {Paper, Button} from '@mui/material';
import React from 'react';

import {Theme, makeStyles, createStyles} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    
    carousel:{
      borderBox:'200px',
      button: {
        background: 'blue',
        display: 'flex',
      }
    }

  })
)

function Slide() {
  
  const classes = useStyles();

  return(
    <Carousel 
    className={classes.carousel}
    wrapAround={true}
    slidesToShow={1}
    cellSpacing={10} 
    dragging={true} 
    speed={700}
    >
      <img className="carousel-img" src={foto1} alt="foto 1" />
      <img className="carousel-img" src={foto2} alt="foto 1" />
      <img className="carousel-img" src={foto3} alt="foto 1" />
    </Carousel>
  );
}

export default Slide;

    
    
