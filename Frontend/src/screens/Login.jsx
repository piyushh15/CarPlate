import { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";


const Login = () => {
  let navigate=useNavigate();
    const [credentials, setCredentials] = useState({email:"",password:""})  //This variable holds the user's email and password as an object.

    const handleSubmit=async (e)=>{
        e.preventDefault();   //It prevents the default form submission behavior using e.preventDefault() to avoid a page reload.
        //it sends a POST request to a server endpoint (http://localhost:5000/api/loginuser) with the user's email and password as JSON data in the request body.
        const response= await fetch("https://carplate.onrender.com/api/loginuser",{  
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify( {email:credentials.email,password:credentials.password})
        })

        //Upon receiving a response from the server, it parses the JSON response (json) and checks if json.success is true.
        const json=await response.json()
        console.log(json);

        if(json.success){
          //If the login is successful (json.success is true), it stores an authentication token (json.authToken) in the browser's local storage using localStorage.setItem.
          // This token is typically used to authenticate the user for subsequent requests.
          localStorage.setItem("authToken",json.authToken);
          navigate("/");
        }
        else {
          alert("Enter Valid Credentials");
          
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })     
    }

    //The setCredentials function is called with a new object. This new object is created using the spread operator ({ ...credentials }), 
    //which makes a shallow copy of the existing credentials object.

  
  return (
    <> 
       <div style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/abstract-techno-background-with-connecting-lines_1048-5570.jpg?size=626&ext=jpg&ga=GA1.1.315140480.1698958348&semt=ais")',height: '100vh',backgroundSize:"cover" }}>
      <div>
      <Navbar/>  
      </div>

        <div className='container pb-3' >
          <form className='w-50 m-auto mt-5 border bg-black bg-gradient rounded' onSubmit={handleSubmit}>
           
            <div className="m-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
            </div>
           
            <div className="m-3 " >
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
            </div>
            <button type="submit" className="m-3 btn"  style={{"font-family":"'Belanosima', sans-serif",backgroundColor:"#F2BE22"}}>Submit</button>
            <Link to="/createuser" className="m-3 mx-1 btn btn-danger bg-gradient">I'm a new user</Link>
            
          </form>
        </div>
      </div>

    </>
  )
}

export default Login
