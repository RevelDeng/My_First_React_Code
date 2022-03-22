import React, {useState, useEffect, createContext, useContext, useRef, useReducer} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import reactDom from 'react-dom';

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
  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert("Your username: " + inputs.username + " Your age: " + inputs.age)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          name='username'
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>Enter your age:
        <input
          type='number'
          name='age'
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit"/>
    </form>
  )
}

function TextareaForm() {
  const [textarea, setTextarea] = useState(
    "text area content is set by value attribute"
  )

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleChange}/>
    </form>
  )
}

function SelectForm() {
  const [myTree, setMyTree] = useState("Maple")

  const handleChange = (event) => {
    setMyTree(event.target.value)
  }

  return (
    <form>
      <select value={myTree} onChange={handleChange}>
        <option value="Oak">Oak</option>
        <option value="Pine">Pine</option>
        <option value="Maple">Maple</option>
      </select>
    </form>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='blogs' element={<Blogs/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='*' element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const [supercount, setSupercount] = useState(0);

  useEffect(() => {
    setSupercount(() => count * 3);
  }, [count]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Super Count: {supercount}</p>
    </>
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

ReactDOM.render(
  <TextareaForm/>,
  document.getElementById('fourth_root')
)

ReactDOM.render(
  <SelectForm/>,
  document.getElementById('fifth_root')
)

ReactDOM.render(
  <App/>,
  document.getElementById('sixth_root')
)

ReactDOM.render(
  <Counter/>,
  document.getElementById('seventh_div')
)

const NameContext = createContext();

function ContextComponent1() {
  const [name, setName] = useState("name tag");

  return (
    <NameContext.Provider value={name}>
      <h1>{`Hello ${name}!`}</h1>
      <ContextComponent2 name={name}/>
    </NameContext.Provider>
  );
}

function ContextComponent2() {
  return (
    <>
      <h1>Context Component 2</h1>
      <ContextComponent3/>
    </>
  )
}

function ContextComponent3() {
  const name = useContext(NameContext);

  return (
    <>
      <h1>Context Component 3</h1>
      <h2>{`Hello again, ${name}`}</h2>
    </>
  )
}

ReactDOM.render(
  <ContextComponent1/>,
  document.getElementById('eighth_div')
)

function RefComponent() {
  const [inputValue, setInputValue] = useState("")
  const previousInputValue = useRef("")

  useEffect(() => {
    previousInputValue.current = inputValue
  }, [inputValue])

  return (
    <>
      Ref Input:{" "}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  )
}

ReactDOM.render(
  <RefComponent/>,
  document.getElementById('ninth_div')
)

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false
  }
]

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {...todo, complete: !todo.complete}
        }
        else {
          return todo
        }
      })
    default:
      return state
  }
}

function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos)

  const handleComplete = (todo) => {
    dispatch({type: "COMPLETE", id: todo.id})
  }
}

ReactDOM.render(
  <Todos/>,
  document.getElementById('tenth_div')
)