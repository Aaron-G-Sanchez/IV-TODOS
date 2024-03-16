import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Todos from './components/Todos'

const App = () => {
  const [todos, setTodos] = useState(null)
  // Get time to move todos to next day
  const time = Date.now()
  const now = new Date(time)
  console.log(JSON.stringify(now))

  // console.log(todos)

  useEffect(() => {
    setTodos(['Learn gRPC', 'Get profile info to show with auth'])
  }, [])

  return (
    <>
      <Navbar />
      {todos ? <Todos todos={todos} /> : <p>Loading...</p>}
    </>
  )
}

export default App
