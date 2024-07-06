import React from 'react'
import './Item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Item = (props) => {
  return (
    <div className='item-container' id='section-p1'>
      <div className='item'>
        <div className='img-box'>
          <img src={props.image} alt="" />
        </div>
        <div className='des'>
          <h5>{props.name}</h5>
          <div className="item-prices" >
            <div className="item-price-old">
              <p>{props.old_price}</p>
            </div>
            <div className="item-price-new">
              <p>{props.new_price}</p>
            </div>
          </div>
          <div className='star'>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Item