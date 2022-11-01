import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import './style.css'

const ContactPage = () => {

  return (
    <section>
      <Container id='contact-container'>
        <Row>
          <Col lg={{ span: 5, offset: 1 }}>
            <article>
              <h2><u>Our address:</u></h2>
              <h4>Mail: lukier.sweets@gmail.com</h4>
              <h4>Phone: 898 243 332</h4>
              <h2><u>Confectionery address:</u></h2>
              <h4>ul. Sztabowa 35</h4>
              <h4>53-407 Wrocław</h4>
            </article>
          </Col>
          <Col lg={5}>
            <article>
              <iframe
                title='map'
                id="map"
                src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=sztabowa%2035%20Wroc%C5%82aw+()&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              />
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactPage