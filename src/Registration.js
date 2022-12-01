import React from "react";
import bike from "./images/guyonbike-removebg-preview.png"
import {useState,useEffect} from "react"
import "./App.css"
import User from "./User";
<script src="https://kit.fontawesome.com/3fc43c6e4b.js" crossorigin="anonymous"></script>  


const Registration = ()=> {

  const[email , setEmail]=useState("");
  const [password,setpassword]=useState("");
  const[changeColor,setChangeColor]=useState(false);

  const handleSubmit=()=>{
    setChangeColor(!changeColor);
    const data={
        email:email,
        password:password
    }
    alert(JSON.stringify(data))
  }

  
    return (
        <form className="container" onSubmit={handleSubmit}>
        <div className="top">
        <p><span>Tieno's Shop</span></p>
        <div className="sign">
         <p>Don't have an account :</p>
         <p type="submit" className="signup"><span>SignUp</span></p>
        </div>
         </div>
        <div className="all">
         <h1>Welcome Back</h1>
        <label>Email</label><br></br>
        <input type="email" name="email" placeholder= "name@domain.com"size="30" value={email}  onChange={(e)=>{setEmail(e.target.value)}} required />
        <br></br>
        <label>Password</label><br></br>
        <input type="password" name="password" placeholder= "Atleast 8 characters " size="30" value={password} onChange={(e)=>{setpassword(e.target.value)}} required/>
        <div className="check">
        <input type="checkbox" id="" name="in" value="in"/>
        <label >Keep me logged in</label>
        <label className="forgot">Forgot password?</label>
        </div>
        <button 
        className={changeColor ? 'change ' : 'login '} type="submit">{changeColor ? 'Login':'Login'}
         </button>
        </div>
         <p className="p1">Or</p>
        <div className="icons">
        <i class="fa fa-facebook" Sans-serif="true"></i>
        <i class="fa fa-google" Sans-serif="true"></i>
         <i class="fa fa-instagram" Sans-serif="true"></i>
         </div>
         <img src={bike} className="pic" alt=""   />
         
        </form>
    );

}
export default Registration;




















































































// const [password,setPassword]= useState("");
// const [email,setEmail]= useState("");
// const [changeColor,setChangeColor]= useState("");

// const handleSubmit = ()=>{
//   setChangeColor(!changeColor);
//   const data = {
//     email:email,
//     password:password,
//   }
//   alert(JSON.stringify(data))
// }
//   return(
//     <form className="form1" onSubmit={handleSubmit}>
//     <div className='main'>
//       <div className="form">
//         <h5>EddieShop</h5> 
//         <h6>Don't have an account? Signup</h6>
//         <div className="header3">
//           <p>Welcome Back</p>
//         </div>
//         <div className='form'>
      
         
//             <label for="email">Email</label>
//             <br/>
//             {/* <input type="text" id="email" placeholder="Your email" name="email" required></input> */}
//             <input type="email" id="email" name="email" placeholder="name@domain.com"  value={email} onChange={(e)=>{setEmail(e.target.value)}} required ></input> <br></br>
//             <br></br>
//             <label for="password">Password</label>

//             <br/>
//             <input type="password" id="password" placeholder="Atleast 8 characters" name="password" value = {password}
//             onChange={(e)=>{setPassword(e.target.value)}}required></input>
          
//         </div>
    
//         <div className='checkbox'>
//           <input type="checkbox" id="veh" name="veh" value="name"></input>
//           <div className="log">
//             <p>Keep me logged in </p>
//           </div>
//           <div className="pass">
//             <a href="forgot password">Forgot password?</a>
//           </div> 
//           <button  onclick={handleSubmit}className={changeColor ? "change": "btn"} type="submit">{changeColor ? "Submit": "Submit"}t</button>
//         </div>
//         <div className="or">
//           <p>-------------------Or--------------------</p>
//         </div>

//         <div className="facebook">
//         <i class="fa-brands fa-facebook" />
//         </div>

//         <div className="google">
//         <i class="fa-brands fa-google" />
//         </div>
//         <div className="insta">
//         <i class="fa-brands fa-square-instagram" />
//         </div> 
        
//       </div>

//       <div className="image">
//         <img src= {bike} alt="" width="400px"/>
//       </div>

      
//     </div>
//     < User email ={email}/>
//     </form>
//   )
