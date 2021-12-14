import React, {useState} from 'react'
import "./App.css"


function App() {
  const [position, setPosition] = useState(0)

  const handleShift = () => {
    setPosition(position+50)
  }

  return (
    <div className='App'>
      <div style={{transform: `translateX(${position}px)`}} className='rectangle'></div>
      <button onClick={handleShift} className='shift_right'>Shift Right</button>
    </div>
  )
}

export default App
