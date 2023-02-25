import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Habit from './components/Habit'
import './styles/global.css'

function App() {

  return (
    <div>
        <Habit completed={3} />
        <Habit completed={3}/>
        <Habit completed={3}/>
        <Habit completed={3}/>
    </div>
  )
}

export default App
