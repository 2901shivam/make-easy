import React from 'react'

const Item = (props) => {

  const deleteOrder=(id)=>{
    localStorage.removeItem(id);
    props.onDeleteOrder(id);
  }

  return (
    <div>
     <h1>Tables</h1>
     <ul>
     <h2>Table 1</h2>
      {props.item.map((order)=>{
        if(order.tables==="Table 1"){
          return(
            <li key={order.id}>
              {order.dish} - {order.price}
              {<button onClick={()=>deleteOrder(order.id)}>Delete Order</button>}
            </li>
          ) 
        }
      })}
     </ul>
     <ul>
     <h2>Table 2</h2>
      {props.item.map((order)=>{
        if(order.tables==="Table 2"){
          return(
            <li key={order.id}>
              {order.dish} - {order.price}
              {<button onClick={()=>deleteOrder(order.id)}>Delete Order</button>}
            </li>
          ) 
        }
      })}
     </ul>
     <ul>
     <h2>Table 3</h2>
      {props.item.map((order)=>{
        if(order.tables==="Table 3"){
          return(
            <li key={order.id}>
              {order.dish} - {order.price}
              {<button onClick={()=>deleteOrder(order.id)}>Delete Order</button>}
            </li>
          ) 
        }
      })}
     </ul>
    </div>
  )
}

export default Item
