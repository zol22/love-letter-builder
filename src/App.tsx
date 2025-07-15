import { LoveLetterProvider } from './LoveLetterContext'

import './App.css'
import LoveLetterBuilder from './components/LoveLetterBuilder'

function App() {

  return (
    <LoveLetterProvider>
      <LoveLetterBuilder />
    </LoveLetterProvider>
  )
}

export default App
