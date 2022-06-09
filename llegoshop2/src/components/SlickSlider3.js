import React, { Component } from "react";
import Slider from "react-slick";
import { Card, Container } from "react-bootstrap";
import bebidas from "../assets/bebidas.png";
import pic1 from '../assets/Junk-Food-Transparent-Background.png'
import pic2 from '../assets/canasta1.png'
import pic3 from '../assets/carrito.png'
import electro from "../assets/electro.png";
import envios from "../assets/envios.png";
import farmacia from "../assets/farmacia.png";
import canasta from "../assets/canasta.png";
import mascotas from "../assets/mascotas.png";
export default class Responsive extends Component {
  render() {
    var settings = {
      
      
    
      slidesToShow: 3,
      
      centerPadding: "160px",
      
      
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div style={{position:'relative',top:'30px'  }}>
        <Container>
          <Slider {...settings}>
            <div >
              <Card style={{border:'none' ,padding:'20px',backgroundColor: '#5175D8',color:'white',margin:'20px' }}>
                <Card.Title style={{display:'flex',justifyContent:'center',fontSize:'30px',position:'relative',top:'20px',fontFamily:'cursive',color:'white'}}  >Bebidas</Card.Title>
                <Card.Img
                 
                  src={pic1}
                  style={{ height: "330px", position: "relative", right: "10px",margin:'0 auto',padding:'40px' }}
                />
              </Card>
            </div>
            <div>
              <Card style={{border:'none' ,padding:'20px',backgroundColor: '#5175D8',color:'white',margin:'20px'  }}>
                <Card.Title style={{display:'flex',justifyContent:'center',fontSize:'30px',position:'relative',top:'20px',fontFamily:'cursive',color:'white',margin:'0 auto'}}>Electro</Card.Title>
                <Card.Img
                    style={{ height: "300px", position: "relative", right: "10px",margin:'0 auto',padding:'40px' }}
                  src={pic2}
                  
                />
                <Card.Body></Card.Body>
              </Card>
            </div>
            <div>
             <Card style={{border:'none' ,padding:'20px',backgroundColor: '#5175D8',color:'white',margin:'20px'  }}>
                <Card.Title style={{display:'flex',justifyContent:'center',fontSize:'30px',position:'relative',top:'20px',fontFamily:'cursive',color:'white'}}  >Farmacia</Card.Title>
                <Card.Img
                    style={{ height: "300px", position: "relative", right: "10px",margin:'0 auto',padding:'40px' }}
                  src={pic3}
                  
                />
                <Card.Body></Card.Body>
              </Card>
            </div>
           
            
          </Slider>
        </Container>
      </div>
    );
  }
}
