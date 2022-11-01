import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

import './style.css'

const HistoryPage = () => {
  return (
    <Container id='history-container'>
      <Row>
        <Col lg={6} xl={8}>
          <div id='story-div'>
            <h1>Our story</h1>
            <p>The story of the world’s most famous bakery begins in 1996 on a quaint, cobblestone corner in the West Village where Lukier Bakery opened its doors for the first time. The sweet smell of cakes and cookies and pies and pudding tumbled out, wafting down the streets, beckoning all in.</p>
            <p>Our red velvet cupcakes became iconic and people lined up around the block for our banana pudding. There was even talk of New York pretzel guys becoming cupcake guys. Lukier Bakery was a destination for locals and tourists alike.</p>
            <p>It was time for us to open the cupboards and share our magic with the world. Our neighborhood bakery found its way into new neighborhoods near and far, we wrote cookbooks and helped people all over celebrate their most important moments.</p>
            <p>And while we have grown, a few things will always remain: open early and close late, a dollop of buttercream makes everything better, and our mission: make today sweeter than yesterday.</p>
          </div>
        </Col>
        <Col lg={6} xl={4} className='d-flex'>
          <Image
            src='https://cdn.shopify.com/s/files/1/1703/7103/files/section_2_1_1000x.jpg?v=1613785090'
            fluid
          />
        </Col>
      </Row>
    </Container>
  )
}

export default HistoryPage