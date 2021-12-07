import React from 'react';
import './FirstComponents.css';
import SecondComponents from './SecondComponents';

import {
    BrowserRouter as
    Route,
    Link
  } from "react-router-dom";

function FirstComponents() {
    return(
    
         <div>
        
  <div className="da">
      <h2>
          Add Items
      </h2><p/>
      <div className="inp">
              <h5 className="lb">
                  Add item succesfully
              </h5><p/>
              <input type="text" id="fname" name="fname"></input>
         
      <button className="b1">Submit</button> <p/>
      </div>
      <div className="inp">
     
      <b>Show Data</b>
      <Link to="./SecondComponents"><button className="b2">click</button>   <p/> </Link> 
      
      <Route path="./SecondComponents" component={SecondComponents} /> 
      
        
      </div> 
           
 </div>
 
 </div>
    )
 
  }
   export default FirstComponents;