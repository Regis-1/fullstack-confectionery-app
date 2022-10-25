import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import {useState, useEffect} from 'react'

import useRandomImage from '../../Hooks/useRandomCake'
import './style.css'

const Home = (props) => {
  const [rndCake, setRndCake] = useState({})

  useRandomImage(setRndCake)

  return (
    <Container id="home-container">
      <Col xs={{span:8, offset:2}}>
        <h1>🍰 Best confectionery products ever! 🍰</h1>
        <p>Welcome to the website of our confectionery. If you have looked here, it means that you appreciate the taste of sweets, such as cakes, pastries, croissants and doughnuts. Perhaps you need a professionally made wedding or birthday cake, or perhaps you would like to taste the best croissants?</p>
        <p>Take a virtual tour of the pastry shop!</p>
        <div className='img-div'>
          <Image id='rndCakeImg' src={rndCake.img} height={300}/>
          <label htmlFor='rndCakeImg'>{rndCake.desc}</label>
        </div>
      </Col>
    </Container>
  )
}

export default Home