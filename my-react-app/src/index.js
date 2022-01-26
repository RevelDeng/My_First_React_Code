import React from 'react';
import ReactDOM from 'react-dom';

var x = 5

const myfirstelement = (
  <>
    <h1>My First React Code!</h1>
    <ul>
      <li>{5 + 5}</li>
      <li>{6 * 6}</li>
    </ul>
    <p>{x < 10 ? x : x + 5}</p> 
  </>
)

function Car(props) {
  return <h2>This is my {props.brand.color} {props.brand.name} {props.brand.model}!</h2>
}

function Garage() {
  const carInfo = {
    name: "Pontiac",
    model: "Grand Am",
    color: "teal"
  }
  const start = () => {
    alert("Starting up the car")
  }
  return <>
    <h3>These cars are in my garage:</h3>
    <Car brand={carInfo} />
    <button onClick={start}>Start the car</button>
  </>
}

ReactDOM.render(
  myfirstelement,
  document.getElementById('root')
);

ReactDOM.render(
  <Garage/>,
  document.getElementById('second_root')
)