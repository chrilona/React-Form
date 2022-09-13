// import logo from './logo.svg';
// import './App.css';
// import './ Registration';
// import Registration from './ Registration';

// function App() {
//   return (
//     <div>
//      <Registration/> 

      
//     </div>
//   );
// }

// export default App;

// import Trial from './Trial';


import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Registration from './Registration';

function App() {
const [password,setPassword]= useState("");
const [name,setName]= useState("");
const handleSubmit = ()=>{
  const data = {
    email:email,
    password:password,
  }
}
  return (
    <div>
    {/* <h1>Form</h1>
    <form>
    <input type = "email" name="email" placeholder="Enter your email"
    value={email}
    onChange = {(e)=>{setPassword(e.target.value)}}/>
    <br/>
    <br/>
    </form>
    <p>{count}</p>
    <button
    onClick={()=>{setCount(count+1)}}>Click me</button> */}
    <Registration/>
    </div>
     

  );
}

export default App;
