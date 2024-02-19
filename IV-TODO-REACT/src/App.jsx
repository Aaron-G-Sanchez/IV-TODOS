import './App.css'
import Navbar from './components/Navbar'
import Todos from './components/Todos'

const App = () => {
  // Get time to move todos to next day
  const time = Date.now()
  // Not actuall needed just for trial
  const now = new Date(time)
  console.log(JSON.stringify(now))

  return (
    <>
      <Navbar />
      <Todos />
    </>
  )
}

export default App
