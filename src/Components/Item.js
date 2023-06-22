import React from 'react'

const Item = (props) => {
  return (
    <div>
      <li>
        {props.item.order},
        {props.item.dish},
        {props.item.price}
        <button type="button" class="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.item)}} >Delete</button>
      </li>
    </div>
  )
}

export default Item
