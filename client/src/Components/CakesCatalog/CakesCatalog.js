import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { useState, useEffect } from 'react'

import FilterBar from '../FilterBar'
import CakeCard from '../CakeCard'
import './style.css'

const CakesCatalog = (props) => {
  const [allCakes, setAllCakes] = useState([]);
  const [filteredCakes, setFilteredCakes] = useState([])

  useEffect(() => {
    const fetchAllCakes = async (baseUrl) => {
      const cakes = await (await fetch(`${baseUrl}/cakes`)).json()
      const images = []
      for (let item of cakes) {
        const _img = await (await fetch(`http://localhost:8081/api/img/${item.cake_id}`)).blob()
        images.push(URL.createObjectURL(_img))
      }

      const mergedCakes = cakes.map((item, idx) => {
        return { info: item, image: images[idx] }
      })
      setAllCakes(mergedCakes)
      setFilteredCakes(mergedCakes)
    }

    fetchAllCakes('http://localhost:8081/api')
  }, [])

  return (
    <section>
      <Container id="catalog-container">
        <Col>
          <FilterBar cakes={allCakes} filteredSetter={setFilteredCakes} />
          <Row className='g-2'>
            {filteredCakes.map(item => {
              return (
                <CakeCard key={item.info.cake_id} cake={item} />
              )
            })}
          </Row>
        </Col>
      </Container>
    </section>
  )
}

export default CakesCatalog