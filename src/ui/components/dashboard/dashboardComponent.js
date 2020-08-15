import React from "react";
import '../../../../src/App.css';
import Autocomplete from "./autosuggestion";

export function Board(name) {

  function logout(){
    window.open(
      '/','_self'
      
    )
  }
  // const elements = ['apple', 'banana', 'papaya','watermelon'];
  return (
    
    <div className="welcomeDom">

      <div className= "container-logout">
       
    <button type="button"  onClick= {logout}>LogOut</button>
    </div>
        <div className="top">
    
   <h1>Wecome to the Predection Mode </h1>

   {/* <div className = "board-gap">
      {elements.map((value, index) => {
        return <li className="board-gap-li" key={index}>{value}</li>
      })}
    </div>  */}
    <div>
      <h1> Autocompletion Component</h1>
      <h2>Lets experience the autocomplete </h2>
      <Autocomplete
        suggestions={[
          "Alligator",
          "Bask",
          "Crocodilian",
          "Death Roll",
          "Eggs",
          "Jaws",
          "Reptile",
          "Solitary",
          "Tail",
          "Wetlands",
          "amit",
          "singh",
          "naveen",
          "ramdayal",
          "nisha",
          "shashi"
        ]}
      />
    </div>
    </div>

    </div>
    

  );
}