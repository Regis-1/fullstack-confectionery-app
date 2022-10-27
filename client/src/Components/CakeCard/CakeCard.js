import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import './style.css'

const CakeCard = (props) => {
  const info = props.cake.info
  return (
    <Col md={6} lg={4}>
      <div className='cake-card p-2'>
        <Image height={140} src={props.cake.image} />
        <div className='info'>
          <h4>{info.name}</h4>
          <span>
            <h5>{info.price} PLN</h5>
            <h5>{info.estimated_time} days</h5>
          </span>
        </div>
      </div>
    </Col>
  )
}

export default CakeCard