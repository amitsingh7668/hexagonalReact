import React, { useState } from "react";
import '../../../../src/ui/components/login.css';
// import {Board} from './dashboardComponent';
import Axios from 'axios';

import {HeaderExampleImage} from '../header';

export function Createuser() {
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastname] = useState("");
  const [userid, setuserid] = useState("");
  const [password, setpassword] = useState("");
  
  
  

  function valid() {
    
    return firstname.length>0 && lastname.length>0  && userid.length>0 &&password.length>4;   
  }

  function val()
  {
    Axios.get("http://localhost:8080/app/t1/user/"+userid+"/"+firstname+"/"+lastname+"/"+password)
      .then(res => {
        const persons = res.data.data;
        console.log(persons)
        
        if(persons==="created")
        {

          alert("Congrats !!! user created")   
        }
        else if(persons==="taken"){
          alert("UserId is already taken by someone")

        }
        else
        {
          alert("invalid")
        }
      })
  }
  
  
  const handleSubmit = (evt) => {
    
      evt.preventDefault();
  }

  function loginnow(){
    window.open(
      '/log','_self'
    )
  }


  return (
    <div className = "login">
      
      <div className = "loginPage">
      <HeaderExampleImage/>
        <h1>Create your Account </h1>
    <form  onSubmit={handleSubmit}>
      
      <label>
        First Name
        <input
          type="text"
          value={firstname}
          onChange={e => setfirstName(e.target.value)}
        />
      </label>
      
      <br/>
      <label>
        Last Name
        <input
          type="text"
          value={lastname}
          onChange={e => setlastname(e.target.value)}
        />
      </label>
     <br/>
      <label>
        User Id
        <input
          type="text"
          value={userid}
          onChange={e => setuserid(e.target.value)}
        />
      </label>
    <br/>
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
      <ul>
      <input type="submit" value="Submit"  onClick={val}  disabled={!valid()} />
      <button onClick={loginnow}>Log In</button>
      </ul>
    </form>
    </div>
    </div>
  );
}