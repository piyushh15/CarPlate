import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


const Signup = () => {
    const [credentials, setCredentials] = useState({name:"",email:"",password:"",geolocation:""})


    const handleSubmit=async (e)=>{
        e.preventDefault();
        const response= await fetch("http://localhost:5000/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify( {name:credentials.name,email:credentials.email,password:credentials.password,geolocation:credentials.geolocation})

        })
        const json=await response.json()
        console.log(json);

        if(!json.success){
            alert("enter valid credentials ")

        }


    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
        
      }
  return (
    <>
   <div style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/3d-data-technology-background-with-low-poly-plexus-design_1048-18066.jpg?size=626&ext=jpg&ga=GA1.1.315140480.1698958348&semt=ais")', backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat'}}>
      <div>
      <Navbar/>  
      </div>

        <div className='container pb-5' >
          <form className='w-50 m-auto mt-5 border bg-black bg-gradient border-success rounded' onSubmit={handleSubmit}>
            <div className="m-3">
              <label htmlFor="name" className="form-label" style={{"font-family":"'Belanosima', sans-serif"}}>Name</label>
              <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} aria-describedby="emailHelp" />
            </div>
            <div className="m-3">
              <label htmlFor="email" className="form-label" style={{"font-family":"'Belanosima', sans-serif"}}>Email address</label>
              <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
            </div>
            <div className="m-3">
              <label htmlFor="address" className="form-label" style={{"font-family":"'Belanosima', sans-serif"}}>Address</label>
               <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} aria-describedby="emailHelp" />   
            </div>
            <div className="m-3">
              <label htmlFor="exampleInputPassword1" className="form-label" style={{"font-family":"'Belanosima', sans-serif"}}>Password</label>
              <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
            </div>
            <button type="submit" className="m-3 btn "  style={{"font-family":"'Belanosima', sans-serif",backgroundColor:"#F2BE22"}}>Submit</button>
            <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;

