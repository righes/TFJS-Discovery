import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LiveCamera from './components/LiveCamera.jsx' //canvas Live camera
import './App.css'

// RIGHES : Composent integration on tah App 
import LiveCamera from './components/LiveCamera.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div> 
      <h1 style={{ textAlign: 'center'}}>Live TFJS App</h1>
      <LiveCamera />
    </div>
  );
}

export default App
