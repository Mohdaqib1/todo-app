

import React, { useState } from "react";
import './App.css';





export default function App() {

  const [number1,setNumber1]=useState();
  const [number2,setNumber2]=useState();
  const [number3,setNumber3]=useState();
  const [number4,setNumber4]=useState();
  const [total, setTotal] = useState(number1+number2+number3+number4);
  

  const [number5,setNumber5]=useState();
  const [number6,setNumber6]=useState();
  const [number7,setNumber7]=useState();
  const [number8,setNumber8]=useState();
  const [total1, setTotal1] = useState(number5+number6+number7+number8);

  const [number9,setNumber9]=useState();
  const [number10,setNumber10]=useState();
  const [number11,setNumber11]=useState();
  const [number12,setNumber12]=useState();
  const [total2, setTotal2] = useState(number9+number10+number11+number12);

  const [number13,setNumber13]=useState();
  const [number14,setNumber14]=useState();
  const [number15,setNumber15]=useState();
  const [number16,setNumber16]=useState();
  const [total3, setTotal3] = useState(number13+number14+number15+number16);

  const [number17,setNumber17]=useState();
  const [number18,setNumber18]=useState();
  const [number19,setNumber19]=useState();
  const [number20,setNumber20]=useState();
  const [total4, setTotal4] = useState(number17+number18+number19+number20);

  const [number21,setNumber21]=useState();
  const [number22,setNumber22]=useState();
  const [number23,setNumber23]=useState();
  const [number24,setNumber24]=useState();
  const [total5, setTotal5] = useState(number21+number22+number23+number24);

  const [number25,setNumber25]=useState();
  const [number26,setNumber26]=useState();
  const [number27,setNumber27]=useState();
  const [number28,setNumber28]=useState();
  const [total6, setTotal6] = useState(number25+number26+number27+number28);

  const [stotol,setStotal] =useState(number1+number5+number9+number13+number17+number21+number25);
  const [stotol1,setStotal1] =useState(number2+number6+number10+number14+number18+number22+number26);
  const [stotol2,setStotal2] =useState(number3+number7+number11+number15+number19+number23+number27);
  const [stotol3,setStotal3] =useState(number4+number8+number12+number16+number20+number24+number28);

  const[Final,setFinal] =useState(number1+number5+number9+number13+number17+number21+number25+number2+number6+number10+number14+number18+number22+number26+number3+number7+number11+number15+number19+number23+number27+number4+number8+number12+number16+number20+number24+number28);

  function addThemTogether(){
    setTotal(number1+number2+number3+number4);
    setTotal1(number5+number6+number7+number8);
    setTotal2(number9+number10+number11+number12);
    setTotal3(number13+number14+number15+number16);
    setTotal4(number17+number18+number19+number20);
    setTotal5(number21+number22+number23+number24);
    setTotal6(number25+number26+number27+number28);
    setStotal(number1+number5+number9+number13+number17+number21+number25);
    setStotal1(number2+number6+number10+number14+number18+number22+number26);
    setStotal2(number3+number7+number11+number15+number19+number23+number27);
    setStotal3(number4+number8+number12+number16+number20+number24+number28);
    
    setFinal(number1+number5+number9+number13+number17+number21+number25+number2+number6+number10+number14+number18+number22+number26+number3+number7+number11+number15+number19+number23+number27+number4+number8+number12+number16+number20+number24+number28);
    
  }


  return(
    <div className="inp">
        
<table className="t1">
  <tr>
    <th>Subject</th>
    <th>P.A. 10</th>
    <th>N.B 05</th>
    <th>N.B 05</th>
    <th>N.B 80</th>
    <th>M.Ob 100</th>
  </tr>
  <tr>
    <th>English</th>
    <th><input type='number' className='input' value={number1} onChange={e=>setNumber1(+e.target.value)}></input></th>
    <th><input type='number'className='input'  value={number2} onChange={e=>setNumber2(+e.target.value)}></input></th>
    <th><input type='number'className='input' value={number3} onChange={e=>setNumber3(+e.target.value)}></input></th>
    <th><input type='number' className='input' value={number4} onChange={e=>setNumber4(+e.target.value)}></input></th>
    <th><h4>{total}</h4></th>
  </tr>
  <tr>
    <th>Hindi</th>
    <th><input type='number'className='input'  value={number5} onChange={e=>setNumber5(+e.target.value)}></input></th>
    <th><input type='number' className='input' value={number6} onChange={e=>setNumber6(+e.target.value)}></input></th>
    <th><input type='number'className='input' value={number7} onChange={e=>setNumber7(+e.target.value)}></input></th>
    <th><input type='number' className='input' value={number8} onChange={e=>setNumber8(+e.target.value)}></input></th>
    <th><h4>{total1}</h4></th>
  </tr>
  <tr>
    <th>Lang.3</th>
    <th><input type='number' className='input' value={number9} onChange={e=>setNumber9(+e.target.value)}></input></th>
    <th><input type='number'className='input'  value={number10} onChange={e=>setNumber10(+e.target.value)}></input></th>
    <th><input type='number'className='input' value={number11} onChange={e=>setNumber11(+e.target.value)}></input></th>
    <th><input type='number' className='input' value={number12} onChange={e=>setNumber12(+e.target.value)}></input></th>
    <th><h4>{total2}</h4></th>
  </tr>
  <tr>
    <th>Maths</th>
    <th><input type='number' className='input' value={number13} onChange={e=>setNumber13(+e.target.value)}></input></th>
    <th><input type='number'className='input'  value={number14} onChange={e=>setNumber14(+e.target.value)}></input></th>
    <th><input type='number'className='input' value={number15} onChange={e=>setNumber15(+e.target.value)}></input></th>
    <th><input type='number'className='input'  value={number16} onChange={e=>setNumber16(+e.target.value)}></input></th>
    <th><h4>{total3}</h4></th>
  </tr>
  <tr>
    <th>SC./Evs</th>
    <th><input type='number' className='input' value={number17} onChange={e=>setNumber17(+e.target.value)}></input></th>
    <th><input type='number'className='input'  value={number18} onChange={e=>setNumber18(+e.target.value)}></input></th>
    <th><input type='number'className='input' value={number19} onChange={e=>setNumber19(+e.target.value)}></input></th>
    <th><input type='number' className='input' value={number20} onChange={e=>setNumber20(+e.target.value)}></input></th>
    <th><h4>{total4}</h4></th>
  </tr>
  <tr>
    <th>COMPU</th>
    <th><input type='number' className='input' value={number21} onChange={e=>setNumber21(+e.target.value)}></input></th>
    <th><input type='number' className='input' value={number22} onChange={e=>setNumber22(+e.target.value)}></input></th>
    <th><input type='number'className='input' value={number23} onChange={e=>setNumber23(+e.target.value)}></input></th>
    <th><input type='number' className='input' value={number24} onChange={e=>setNumber24(+e.target.value)}></input></th>
    <th><h4>{total5}</h4></th>
  </tr>
  <tr>
    <th>Sco.SC</th>
    <th><input type='number' className='input' value={number25} onChange={e=>setNumber25(+e.target.value)}></input></th>
    <th><input type='number' className='input' value={number26} onChange={e=>setNumber26(+e.target.value)}></input></th>
    <th><input type='number'className='input' value={number27} onChange={e=>setNumber27(+e.target.value)}></input></th>
    <th><input type='number'className='input'  value={number28} onChange={e=>setNumber28(+e.target.value)}></input></th>
    <th><h4>{total6}</h4></th>
  </tr>
  <tr>
    <th>Total</th>
    <th><h4>{stotol}</h4></th>
    <th><h4>{stotol1}</h4></th>
    <th><h4>{stotol2}</h4></th>
    <th><h4>{stotol3}</h4></th>
    <th><h4>{Final}</h4></th>
  </tr>

</table>
<div className="da">
<button onClick={addThemTogether} className="bu">Submit</button>

    </div>
    </div>
  );
}
