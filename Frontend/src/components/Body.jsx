
import "./Body.css";

const Upper = () => {
  return (
      <div id="container"  style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/abstract-digital-grid-black-background_53876-97647.jpg?size=626&ext=jpg&ga=GA1.1.315140480.1698958348&semt=ais")',height: '100vh',backgroundSize:"cover" }}>
      <div id="row">
        <div id="left">
          <h2> Security used to be an inconvenience sometimes,</h2>
          <h2> but now it`s a necessity all the time.</h2>
          <h3> Let`s start to secure our Area with a small step Now!!!</h3>
        </div>
        <div id="right">
          <div className="img">
            <img
              alt=""
              src="https://img.freepik.com/free-photo/3d-data-technology-background-with-low-poly-plexus-design_1048-18066.jpg?size=626&ext=jpg&ga=GA1.1.315140480.1698958348&semt=ais"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upper;
