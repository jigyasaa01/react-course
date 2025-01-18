import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj={
    name:"Hitesh",
    age:20,
    address:{
      city:"Delhi",
      state:"Delhi",
      country:"India"
    }
  }

  let newArr = [1,2,3,4,5,6]

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card username="Hitesh" myArr={newArr}/> {/* key=value */}
      <Card username='Jigyasa' post='Frontend Developer'/>
      <Card />
      <Card />
    </>
  )
}

export default App
