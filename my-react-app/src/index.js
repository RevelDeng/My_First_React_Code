import React, {useState} from 'react';
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
  return <h2>This is my {props.color} {props.name} {props.model}!</h2>
}

function Garage() {
  const cars = [
    {id: 1, name: "Pontiac", model: "Grand Am", color: "teal"},
    {id: 2, name: "Ford", model: "Fiesta", color: "mahogany"},
    {id: 3, name: "Subaru", model: "Crosstrek", color: "gold"}
  ]
  const start = (startchance) => {
    if (startchance < 0.5) {
      alert("Starting up the car")
    }
    else {
      alert("Failed to start up the car")
    }
  }
  return <>
    <h3>These cars are in my garage:</h3>
    <ul>
      {cars.map((car) => <Car key={car.id} name={car.name} model={car.model} color={car.color} />)}
    </ul>
    <button onClick={() => start(Math.random())}>Start the car</button>
  </>
}

function Form() {
  const [name, setName] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    alert("Your name: ${name}")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit"/>
    </form>
  )
}

ReactDOM.render(
  myfirstelement,
  document.getElementById('root')
);

ReactDOM.render(
  <Garage/>,
  document.getElementById('second_root')
)

ReactDOM.render(
  <Form/>,
  document.getElementById('third_root')
)