import React from "react";
import bike from "./images/guyonbike-removebg-preview.png"
import {useState,useEffect} from "react"
import "./App.css"
import User from "./User";
<script src="https://kit.fontawesome.com/3fc43c6e4b.js" crossorigin="anonymous"></script> 


const Registration = ()=> {
const [password,setPassword]= useState("");
const [email,setEmail]= useState("");
const [changeColor,setChangeColor]= useState("");

const handleSubmit = ()=>{
  setChangeColor(!changeColor);
  const data = {
    email:email,
    password:password,
  }
  alert(JSON.stringify(data))
}
  return(
    <form className="form1" onSubmit={handleSubmit}>
    <div className='main'>
      <div className="form">
        <h5>EddieShop</h5> 
        <h6>Don't have an account? Signup</h6>
        <div className="header3">
          <p>Welcome Back</p>
        </div>
        <div className='form'>
      
         
            <label for="email">Email</label>
            <br/>
            {/* <input type="text" id="email" placeholder="Your email" name="email" required></input> */}
            <input type="email" id="email" name="email" placeholder="name@domain.com"  value={email} onChange={(e)=>{setEmail(e.target.value)}} required ></input> <br></br>
            <br></br>
            <label for="password">Password</label>

            <br/>
            <input type="password" id="password" placeholder="Atleast 8 characters" name="password" value = {password}
            onChange={(e)=>{setPassword(e.target.value)}}required></input>
          
        </div>
    
        <div className='checkbox'>
          <input type="checkbox" id="veh" name="veh" value="name"></input>
          <div className="log">
            <p>Keep me logged in </p>
          </div>
          <div className="pass">
            <a href="forgot password">Forgot password?</a>
          </div> 
          <button  onclick={handleSubmit}className={changecolor ? "change": "btn"} type="submit">{changecolor ? "Submit": "Submit"}t</button>
        </div>
        <div className="or">
          <p>-------------------Or--------------------</p>
        </div>

        <div className="facebook">
        <i class="fa-brands fa-facebook" />
        </div>

        <div className="google">
        <i class="fa-brands fa-google" />
        </div>
        <div className="insta">
        <i class="fa-brands fa-square-instagram" />
        </div> 
        
      </div>

      <div className="image">
        <img src= {bike} alt="" width="400px"/>
      </div>

      
    </div>
    < User email ={email}/>
    </form>
  )
}



export default Registration;