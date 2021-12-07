import React from 'react';
import './SecondComponents.css';
import logo1 from './download.jfif';
import logo2 from './edit.png';
import FirstComponents from './FirstComponents';
import {
  BrowserRouter as
  Route,
  Link
} from "react-router-dom";
function SecondComponents() {
    return <div>
    <div className="da">
          <h2>
              Add Items
          </h2>   <p/>
            <div className="inp">
                <h5>
                 Update item succesfully
                </h5><p/>
                <input type="text" id="fname" name="fname" ></input>
                <button className="b1">Submit</button>
                <Link to="/FirstComponents">
                <button className="b1">Add</button>   <p/></Link>
                <Route path="./FirstComponents" component={FirstComponents} />
            </div>
            <div className="inp">
              <b>Show Data</b><p/>
              <table className="t1">
                   <tr>
                        <td>Mohd Aqib</td>
                        <td>     
                          <button className="b2e" >   <img src={logo2} className="b2ed"/>  </button> 
                           <button className="b2d">    <img src={logo1}  className="b2ed"/> </button> 
                                 </td>
                    </tr>
               </table>
            </div>      
   </div>
   </div>;
  }
   export default SecondComponents;