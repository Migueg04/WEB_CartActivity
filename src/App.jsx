import { useState } from 'react'
import { ShoppingCart } from './components/card/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Productos</h1>
      <ShoppingCart></ShoppingCart>


    </>
  )
}

export default App
