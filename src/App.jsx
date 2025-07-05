import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// RIGHES : Composent integration on tah App 
import LiveCamera from './components/LiveCamera.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: '2rem'}}>
      <h1>Live TFJS Demo </h1>
      <LiveCamera />
    </div>
  );
}

export default App
