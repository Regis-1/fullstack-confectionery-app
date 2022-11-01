import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';
import PageHeader from './Components/PageHeader'
import Home from './Components/Home'
import CakesCatalog from './Components/CakesCatalog'
import ContactPage from './Components/ContactPage';
import HistoryPage from './Components/HistoryPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <header>
            <PageHeader />
          </header>
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/catalog' element={<CakesCatalog />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='/history' element={<HistoryPage />} />
            </Routes>
          </main>
        </Container>
      </Router>
    </div>
  );
}

export default App;
