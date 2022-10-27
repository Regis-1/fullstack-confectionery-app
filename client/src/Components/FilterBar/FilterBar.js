import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col'
import Form from 'react-bootstrap/Form'

import { useState } from 'react'

import './style.css'

const FilterBar = (props) => {
  const [filterProps, setFilterProps] = useState({
    searchPhrase: '',
    priceFrom: '',
    priceTo: '',
    timeFrom: '',
    timeTo: ''
  })

  const filterCakes = (allCakes, filteredSetter) => {
    const _filteredCakes = allCakes.filter(item => {
      const check1 = item.info.name.toUpperCase()
        .includes(filterProps.searchPhrase.toUpperCase())
      const check2 =
        (Number(filterProps.priceFrom)) <= item.info.price
        &&
        item.info.price <= (Number(filterProps.priceTo) ? Number(filterProps.priceTo) : Infinity)
      const check3 =
        (Number(filterProps.timeFrom) ? Number(filterProps.timeFrom) : 1) <= item.info.estimated_time
        &&
        item.info.estimated_time <= (Number(filterProps.timeTo) ? Number(filterProps.timeTo) : Infinity)

      return check1 && check2 && check3
    })

    filteredSetter(_filteredCakes)
  }

  const filterOnChange = (e) => {
    let _filterProps = filterProps
    _filterProps[e.target.id] = e.target.value
    setFilterProps(_filterProps)

    filterCakes(props.cakes, props.filteredSetter)
  }

  return (
    <div id='filter-bar'>
      <Row>
        <Col lg={6}>
          <Form.Control
            type='text'
            placeholder='Search cake'
            id='searchPhrase'
            onChange={e => filterOnChange(e)}
          />
        </Col>
        <Col lg={3} className='d-flex'>
          <h3>Price:</h3>
          <Form.Control
            type='number'
            placeholder='From'
            min='0'
            id='priceFrom'
            onChange={e => filterOnChange(e)}
          />
          <h3>-</h3>
          <Form.Control
            type='number'
            placeholder='To'
            min='0'
            id='priceTo'
            onChange={e => filterOnChange(e)}
          />
        </Col>
        <Col lg={3} className='d-flex'>
          <h3>Time:</h3>
          <Form.Control
            type='number'
            placeholder='From'
            min='1'
            id='timeFrom'
            onChange={e => filterOnChange(e)}
          />
          <h3>-</h3>
          <Form.Control
            type='number'
            placeholder='To'
            min='1'
            id='timeTo'
            onChange={e => filterOnChange(e)}
          />
        </Col>
      </Row>
    </div>
  )
}

export default FilterBar