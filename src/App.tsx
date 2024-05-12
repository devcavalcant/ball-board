import { useState } from 'react'
import './App.css'

function App() {

  const [balls, setBalls] = useState([])
  const [removedBalls, setRemovedBalls] = useState([])

  return (
    <main>
      <div className='options'>
        <img src="/src/assets/logotipo.svg" height={40} alt='Ball Board Logo' />

        <div className='boardOptions'>
          <button disabled={balls.length == 0} onClick={() => {
            setRemovedBalls([...removedBalls, balls[balls.length - 1]])
            setBalls(balls.slice(0, balls.length - 1))
          }}>Back</button>
          <button disabled={removedBalls.length == 0} onClick={() => {
            setBalls([...balls, removedBalls[removedBalls.length - 1]])
            setRemovedBalls(removedBalls.slice(0, removedBalls.length - 1))
          }}>Forward</button>
          <button disabled={balls.length == 0} onClick={() => {
            setBalls([])
            setRemovedBalls([])
          }}>
            Reset
          </button>
        </div>

        <div className='configs'>
          <button>
            Theme
          </button>
        </div>
      </div>

      <div onClick={(e: React.MouseEvent) => {
        setBalls([...balls, { x: e.clientX - 20, y: e.clientY - 20 }])
      }} className='board'>

        {
          balls.map((ball, i) => <div className='ball' key={i} style={
            { left: ball.x, top: ball.y }
          }></div>)
        }

      </div>
    </main>
  )
}

export default App
