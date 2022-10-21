import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import PageHeader from './Components/PageHeader'
import Home from './Components/Home'

function App() {
  return (
    <div className="App">
      <Container>
        <PageHeader />
        <Home />
      </Container>
    </div>
  );
}

export default App;
