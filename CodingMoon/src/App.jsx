import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './componenent/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import QRCodeGenerator from './componenent/QR/QR'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home></Home>
    </>
  )
}

export default App
