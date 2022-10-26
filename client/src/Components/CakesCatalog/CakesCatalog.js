import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import FilterBar from '../FilterBar/FilterBar'
import './style.css'

const CakesCatalog = (props) => {

  return (
    <Container id="catalog-container">
      <Col>
        <FilterBar />
        <h1>Hello from Catalog</h1>
        <h1>Hello from Catalog</h1>
        <h1>Hello from Catalog</h1>
        <h1>Hello from Catalog</h1>
        <h1>Hello from Catalog</h1>
        <h1>Hello from Catalog</h1>
        <h1>Hello from Catalog</h1>
        <h1>Hello from Catalog</h1>
      </Col>
    </Container>
  )
}

export default CakesCatalog