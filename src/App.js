import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <h1>React Similar in look different in Data</h1>
      <District
      name='Dhaka'
      town ='Gulshan'
      ></District>
      <District
      name='Rajshahi'
      town ='Charghat'
      ></District>
      <District
      name='Chittagong'
      town ='Potengga'
      ></District>
    </div>
  );
}

function District(props){
  const [power, setPower] = useState(1);
  const boostPower = () => setPower(power*2);
  return(
    <div className='district'>
      <h3>Distric: {props.name} </h3>
      <p>Town: {props.town} </p>
      <h4>Power: {power} </h4>
      <button onClick={boostPower}>Boost</button>
    </div>
  )
}

export default App;
