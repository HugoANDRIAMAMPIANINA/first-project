import './App.css'
import Title from './components/Title'
import Game from './components/Game/Game'

const App = () => {
  return (
    <div className='p-20 flex flex-col items-center gap-8 h-screen dark:bg-gray-800'>
      <Title />
      <Game />
    </div>
  )
}

export default App
