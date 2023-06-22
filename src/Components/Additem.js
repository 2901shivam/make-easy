import React, { useState } from 'react'

const Additem = (props) => {
    const[order,setOrderid]=useState();
    const[dish,setDish]=useState();
    const[price,setPrice]=useState();
    const submit=((event)=>{
        event.preventDefault();

        if(!order || !dish || !price){
            alert("Please filled all the fields")
        }

        props.addOn(order,dish,price);

    })
  return (
    <div className='container'>
    <form onSubmit={submit}>
  <div class="mb-3">
    <label htmlFor="Orderid" class="form-label">Unique OrderId</label>
    <input type="number" value={order} onChange={(event)=>setOrderid(event.target.value)} class="form-control" id="Orderid"/>
    
  </div>
  <div class="mb-3">
    <label for="dish" class="form-label">Choose Dish</label>
    <input type="text" value={dish} onChange={(event)=>setDish(event.target.value)} class="form-control" id="dish"/>
  </div>

  <div class="mb-3">
    <label for="table" class="form-label">Choose Price</label>
    <input type="text" value={price} onChange={(event)=>setPrice(event.target.value)} class="form-control" id="table"/>
  </div>
  
  <button type="submit" class="btn btn-primary">AddToBill</button>
</form>
      
    </div>
  )
}

export default Additem;
