import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './style.css'

const PageHeader = (props) => {
  return (
    <Col className='header-main'>
      <h1 id='page-title'>Confectionery Lukier</h1>
      <Navbar expand="sm" className='d-flex justify-content-center '>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/catalog">Cakes</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/history">History</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  )
}

export default PageHeader