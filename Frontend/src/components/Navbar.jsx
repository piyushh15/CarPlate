import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

const Navbar = () => {
  const Navigate=useNavigate();
  const handlelogout=()=>{
    Navigate('/login');
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-black bg-gradient ">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 px-4 " to="#" style={{"font-family":"'Belanosima', sans-serif","color":"#64CCC5"}}>SecureCar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2" style={{"font-family":"'Belanosima', sans-serif"}}>
            <li className="nav-item">
              <Link className="nav-link active fs-5" aria-current="page"  to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active fs-5" aria-current="page"  style={{"font-family":"'Belanosima', sans-serif",backgroundColor:"#64CCC5"}} to="/data">Data</Link>
            </li>
          </ul>
          <div className='d-flex'>
            <Link className="btn  text-dark mx-1"  style={{"font-family":"'Belanosima', sans-serif",backgroundColor:"#64CCC5"}}to="/Login">Login</Link>
            <Link className="btn text-dark mx-1"  style={{"font-family":"'Belanosima', sans-serif",backgroundColor:"#64CCC5"}}to="/createuser">Signup</Link>
          </div>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Navbar