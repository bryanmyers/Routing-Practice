import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Variable from './components/Variable'
import WordColors from './components/WordColors'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/:variable" element={<Variable />} />
        <Route path="/:word/:color1/:color2" element={<WordColors />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
