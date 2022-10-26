import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';
import PageHeader from './Components/PageHeader'
import Home from './Components/Home'
import CakesCatalog from './Components/CakesCatalog'

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <PageHeader />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalog' element={<CakesCatalog />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
