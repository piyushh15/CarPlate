
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Body from "../components/Body";

const Home = () => {

  return (
    <div className="bg-black bg-gradient">
    <div>
      <Navbar />
    </div>
    <div>
      <Body/>
    </div>

    <div className="bg-black bg-gradient">
      <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">

        <div className="carousel-inner " id='carousel'>
          <div className=" carousel-caption  " style={{ zIndex: "9" }}>
          </div>
          <div className="carousel-item active" >
            <img src="https://th.bing.com/th/id/OIP.LGQ0Eja_NrJ-XswAs-tqEQHaEo?w=243&h=180&c=7&r=0&o=5&pid=1.7" className="d-block w-100  " style={{ backgroundSize:"fill",filter:"brightness(30%)" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://spoudazo.online/wp-content/uploads/cybersecurity.jpg" className="d-block w-100 " style={{ backgroundSize:"fill" ,filter:"brightness(30%)"}} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://i.pinimg.com/originals/a5/0e/05/a50e0509d2cae1e2884cf15da6482023.jpg" className="d-block w-100 " style={{ backgroundSize:"fill",filter:"brightness(30%)" }} alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <Footer />
  </div>
  );
};

export default Home;
