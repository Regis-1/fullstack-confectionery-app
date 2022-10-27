import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col'
import Form from 'react-bootstrap/Form'

import './style.css'

const FilterBar = (props) => {

  return (
    <div id='filter-bar'>
      <Row>
        <Col lg={6}>
          <Form.Control type='text' placeholder='Search cake' />
        </Col>
        <Col lg={3} className='d-flex'>
          <h3>Price:</h3>
          <Form.Control type='number' placeholder='From' min='0' />
          <h3>-</h3>
          <Form.Control type='number' placeholder='To' min='0' />
        </Col>
        <Col lg={3} className='d-flex'>
          <h3>Time:</h3>
          <Form.Control type='number' placeholder='From' min='0' />
          <h3>-</h3>
          <Form.Control type='number' placeholder='To' min='0' />
        </Col>
      </Row>
    </div>
  )
}

export default FilterBar