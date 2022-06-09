import React, { Component } from "react";
import Slider from "react-slick";
import { Card, Container } from "react-bootstrap";
import bebidas from "../assets/bebidas.png";

import electro from "../assets/electro.png";
import envios from "../assets/envios.png";
import farmacia from "../assets/farmacia.png";
import canasta from "../assets/canasta.png";
import mascotas from "../assets/mascotas.png";
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 900,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: false,
      
      
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
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
              <Card style={{border:'none' ,padding:'20px',backgroundColor: '#5175D8',color:'white' }}>
                <Card.Title className="text-center  "  >Bebidas</Card.Title>
                <Card.Img
                 
                  src={bebidas}
                  style={{maxWidth:'150px',margin:'0 auto',padding:'10px' }}
                />
              </Card>
            </div>
            <div>
              <Card style={{border:'none' ,padding:'20px',backgroundColor: '#5175D8',color:'white' }}>
                <Card.Title className="text-center">Electro</Card.Title>
                <Card.Img
                  style={{maxWidth:'120px',margin:'0 auto'  }}
                  src={electro}
                  
                />
                <Card.Body></Card.Body>
              </Card>
            </div>
            <div>
             <Card style={{border:'none' ,padding:'20px',backgroundColor: '#5175D8',color:'white' }}>
                <Card.Title className="text-center">Farmacia</Card.Title>
                <Card.Img
                  style={{maxWidth:'210px',margin:'0 auto'  }}
                  src={farmacia}
                  
                />
                <Card.Body></Card.Body>
              </Card>
            </div>
            <div>
             <Card style={{border:'none' ,padding:'20px',backgroundColor: '#5175D8',color:'white' }}>
                <Card.Title className="text-center">Mascotas</Card.Title>
                <Card.Img
                  style={{maxWidth:'120px',margin:'0 auto'  }}
                  src={mascotas}
                  
                />
                <Card.Body></Card.Body>
              </Card>
            </div>
            <div>
             <Card style={{border:'none' ,padding:'20px',backgroundColor: '#5175D8',color:'white' }}>
                <Card.Title className="text-center">Canasta</Card.Title>
                <Card.Img
                  style={{maxWidth:'120px',margin:'0 auto'  }}
                  src={canasta}
                  
                />
                <Card.Body></Card.Body>
              </Card>
            </div>
            <div>
             <Card style={{border:'none' ,padding:'20px',backgroundColor: '#5175D8',color:'white' }}>
                <Card.Title className="text-center">Bebidas</Card.Title>
                <Card.Img
                  style={{maxWidth:'120px',margin:'0 auto'  }}
                  src={bebidas}
                  
                />
                <Card.Body></Card.Body>
              </Card>
            </div>
            <div>
             <Card style={{border:'none' ,padding:'20px',backgroundColor: '#5175D8',color:'white' }}>
                <Card.Title className="text-center">Electro</Card.Title>
                <Card.Img
                  style={{maxWidth:'120px',margin:'0 auto'  }}
                  src={electro}
                  
                />
                <Card.Body></Card.Body>
              </Card>
            </div>
            <div>
             <Card style={{border:'none'   ,padding:'20px',backgroundColor: '#5175D8',color:'white' }}>
                <Card.Title className="text-center">Farmacia</Card.Title>
                <Card.Img
                  style={{maxWidth:'210px',margin:'0 auto'  }}
                  src={farmacia}
                  
                />
                <Card.Body></Card.Body>
              </Card>
            </div>
            <div>
             <Card style={{border:'none' ,padding:'20px',backgroundColor: '#5175D8',color:'white' }}>
                <Card.Title className="text-center">Envios</Card.Title>
                <Card.Img
                  style={{maxWidth:'120px',margin:'0 auto'  }}
                  src={envios}
                  
                />
                <Card.Body></Card.Body>
              </Card>
            </div>
            <div>
             <Card style={{border:'none' ,padding:'20px',backgroundColor: '#5175D8',color:'white' }}>
                <Card.Title className="text-center">M   ascotas</Card.Title>
                <Card.Img
                  style={{maxWidth:'120px',margin:'0 auto'  }}
                  src={mascotas}
                  
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
