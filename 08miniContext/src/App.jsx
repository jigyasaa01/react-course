import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import UserContextProvider from './context/USerContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React video for Context API</h1>
      <Login />
      <Profile/>
    </UserContextProvider> //wrapping the components into the context
  )
}

export default App
