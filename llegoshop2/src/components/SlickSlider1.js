import React from "react";
import Card from "./Card"
import bebidas from '../assets/bebidas.png'
import Slider from "react-slick";
import electro from '../assets/electro.png'
import envios from '../assets/envios.png'
import farmacia from '../assets/farmacia.png'
import canasta from '../assets/canasta.png'
import mascotas from '../assets/mascotas.png'
import {Link} from "react-router-dom"
import './slickSlider.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
      };
    return (
        <div style={{marginTop:'60px',with:'98%'}}>
        
        <Slider {...settings}  style={{display:'flex',justifyContent:'center'}}>
          <div className="bordeCarrousel">
            <div>
            <h4 style={{textAlign:'center'}}>Bebidas </h4>
          <img src={bebidas} style={{height:'120px',margin:'0 auto' }} alt="perrito"></img></div>
          </div>
          <div className="bordeCarrousel">
          <h4 style={{textAlign:'center'}}>Electro </h4>
          <img src={electro} style={{height:'120px',margin:'0 auto' }} alt="perrito"></img>
          </div>
          <div className="bordeCarrousel">
          <h4 style={{textAlign:'center'}}>Farmacia </h4>
          <img src={farmacia} style={{height:'120px',margin:'0 auto' }} alt="perrito"></img>
          </div>
          <div className="bordeCarrousel">
          <h4 style={{textAlign:'center'}}>Envíos </h4>
          <img src={envios} style={{height:'120px',margin:'0 auto' }} alt="perrito"></img>
          </div>
          <div className="bordeCarrousel">
          <h4 style={{textAlign:'center'}}>Mascotas </h4>
          <img src={mascotas} style={{height:'120px',margin:'0 auto' }} alt="perrito"></img>
          </div>
          <div className="bordeCarrousel">
          <h4 style={{textAlign:'center'}}>Canasta </h4>
          <img src={canasta} style={{height:'120px',margin:'0 auto' }} alt="perrito"></img>
          </div>
          <div className="bordeCarrousel">
            <h4 style={{textAlign:'center'}}>Bebidas </h4>
          <img src={bebidas} style={{height:'120px',margin:'0 auto' }} alt="perrito"></img>
          </div>
          <div className="bordeCarrousel">
          <h4 style={{textAlign:'center'}}>Electro </h4>
          <img src={electro} style={{height:'120px',margin:'0 auto' }} alt="perrito"></img>
          </div>
          <div className="bordeCarrousel">
          <h4 style={{textAlign:'center'}}>Farmacia </h4>
          <img src={farmacia} style={{height:'120px',margin:'0 auto' }} alt="perrito"></img>
          </div>
          <div className="bordeCarrousel">
          <h4 style={{textAlign:'center'}}>Envíos </h4>
          <img src={envios} style={{height:'120px',margin:'0 auto' }} alt="perrito"></img>
          </div>
          <div className="bordeCarrousel">
          <h4 style={{textAlign:'center'}}>Mascotas </h4>
          <img src={mascotas} style={{height:'120px',margin:'0 auto' }} alt="perrito"></img>
          </div>
        </Slider>
      </div>
    );
  }