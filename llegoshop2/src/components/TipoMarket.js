import pic1 from '../assets/Junk-Food-Transparent-Background.png'
import pic2 from '../assets/canasta1.png'
import pic3 from '../assets/carrito.png'

export default function TipoMarket() {
  return (
    <div className="container row justify-center" style={{margin:'0 auto',marginTop:'20px'}}>

      <div className="col-4 col-md-4 col-sm-12" style={{border:'2px solid #2B4898',borderRadius:'50px',position:'relative',right:'30px'   }}>
        <p style={{display:'flex',justifyContent:'center',fontSize:'30px',position:'relative',top:'20px',fontFamily:'cursive'}}>Restaurantes</p>
        <img
          className="d-block "
          src={pic1}
          alt="First slide"
          style={{ height: "300px", position: "relative", right: "10px",margin:'0 auto',padding:'40px' }}
        />
      </div>


      <div className="col-4 col-md-4 col-sm-12" style={{border:'2px solid #2B4898',borderRadius:'50px',position:'relative'    }}>
        <p style={{display:'flex',justifyContent:'center',fontSize:'30px',position:'relative',top:'20px',fontFamily:'cursive'}}>Mini Market</p>
        <img
          className="d-block "
          src={pic2}
          alt="First slide"
          style={{ height: "300px", position: "relative", right: "10px",margin:'0 auto',padding:'40px' }}
        />
      </div>
      <div className="col-4 col-md-4 col-sm-12" style={{border:'2px solid #2B4898',borderRadius:'50px',position:'relative',left:'30px'   }}>
        <p style={{display:'flex',justifyContent:'center',fontSize:'30px',position:'relative',top:'20px',fontFamily:'cursive'}}>Supermercados</p>
        <img
          className="d-block "
          src= {pic3} 
          alt="First slide"
          style={{ height: "300px", position: "relative", right: "10px",margin:'0 auto',padding:'40px' }}
        />
      </div>
    </div>
  );
}