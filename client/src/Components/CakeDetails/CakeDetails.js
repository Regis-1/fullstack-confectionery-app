import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import './style.css'

const CakeDetails = (props) => {
  const location = useLocation()
  const [allInfo, setAllInfo] = useState({})

  useEffect(() => {
    const getEmployeeInfo = async baseUrl => {
      const employeeInfo = await (
        await fetch(`${baseUrl}/employees/${location.state.info.author}`)
      ).json()

      setAllInfo({ image: location.state.image, ...location.state.info, ...employeeInfo })
    }

    if (location.state && Object.keys(location.state) !== 0)
      getEmployeeInfo('http://localhost:8081/api')
  }, [])

  return (
    <Container id='details-container'>
      {(location.state && Object.keys(location.state).length !== 0 &&
        <Row>
          <Col lg={{ span: 5, offset: 1 }}>
            <Image src={allInfo.image} fluid />
          </Col>
          <Col lg={5} id='info-col'>
            <div>
              <h1>{allInfo.name}</h1>
              <h3>Created by: {allInfo.full_name}</h3>
            </div>
            <div>
              <p>Price: {allInfo.price} PLN</p>
              <p>Estimted time: {allInfo.estimated_time} days</p>
              <p>Phone number: {allInfo.phone_number}</p>
              <p>Email: {allInfo.email}</p>
            </div>
          </Col>
        </Row>)
        ||
        <Row>
          <Col xs={12}>
            <h1>Please use cakes catalog to browse specific cake!</h1>
          </Col>
        </Row>}
    </Container>
  )
}

export default CakeDetails