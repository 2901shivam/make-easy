import React from 'react'
import Item from './Item'

const Itemlist = (props) => {
  return (
    <div className='container'>
     
     <h3>Orders</h3>
  {/* <>{props.item[0].id},{props.item[0].dish},{props.item[0].price}</>   */}
     {props.item.map((item)=>{
        return<Item item={item} key={item.sno} onDelete={props.onDelete}/>
     })} 
    </div>
  )
}

export default Itemlist
