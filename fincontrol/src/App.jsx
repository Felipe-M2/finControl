import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './Home';
import Loguin from './Pages/Loguin/Loguin';
import CadDados from './Pages/CadDados/CadDados';

function App() {

  return (
    <section className='aplication'>
        <Router>
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/loguin" element={ <Loguin /> } />
            <Route path='/cadastro' element={ <CadDados/> } />
          </Routes>
        </Router>
    </section>
  )
}

export default App
