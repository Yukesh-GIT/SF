import React from 'react'
import './Popular.css'
import data_products from '../Assets/Data'
import Item from '../Items/Item'

const Popular = () => {
  return (
    <div className='popular'>
       <h1>Popular</h1>
       <hr />
       <div className="popular-item">
        {data_products.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
       </div>
    </div>
  )
}

export default Popular