import React, { useState } from "react";
import '../../../../src/ui/components/login.css';
// import {Board} from './dashboardComponent';
import Axios from 'axios';

import {HeaderExampleImage} from '../header';


export function NameForm() {
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");
  const [test, settest] = useState("");
  
  

  function valid() {
    
    return name.length>0 && password.length>0;   
  }

  function create()
  {
          window.open(
          'create','_self'
          
        )
      // }
  }

  function val()
  {
    Axios.get("http://localhost:8080/app/t1/login/"+name+"/"+password)
      .then(res => {
        const persons = res.data.data;
        console.log(persons)
        
        if(persons!=="invalid")
        {
          settest(persons)
          window.open(
            '/doc','_self'
            
          )
         
        }
        else
        {
          alert("invalid")
        }
      })
  }
  
  
  const handleSubmit = (evt) => {
    val()
      evt.preventDefault();
      // // alert(`Submitting Name ${name}`)
      // if(name==="amit" && password==="singh")
      // {
      //   window.open(
      //     '/doc','_self'
          
      //   )
      // }
      // else
      // {
      //   alert("You not an authorized user \n Please try again later")
      // }
  }


  return (
    <div className = "login">
      
      <div className = "loginPage">
      <HeaderExampleImage/>
        <h1>Welcome to the Homepage </h1>
    <form  onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={e => setpassword(e.target.value)}
        />
      </label>
      <br/>
      <br/>
      <input type="submit" value="Submit" disabled={!valid()} />
      <button onClick={create} >create Account</button>
    </form>
  <h1>{test}</h1>
    </div>
    </div>
  );
}