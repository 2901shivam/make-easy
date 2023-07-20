import React, { useState } from 'react'
import Input from './UI/Input';

const Additem = (props) => {
    const[orderId,setOrderId]=useState("");
    const[dish,setDish]=useState("");
    const[price,setPrice]=useState("");
    const [tables, setTables]= useState("Choose Table");

    const idChangeHandler =(e)=>{
      setOrderId(e.target.value);
    }
    const dishChangeHandler=(e)=>{
      setDish(e.target.value);
    }
    const priceChangeHandler=(e)=>{
      setPrice(e.target.value);
    }
    const tableChangeHandler=(e)=>{
      setTables(e.target.value);
    }

    const submitOrder=((event)=>{
        event.preventDefault();

        if(!orderId || !dish || !price || tables==="Choose Table"){
            alert("Please filled all the fields");
        }

            const order={
              id:orderId,
              dish:dish,
              price:price,
              tables:tables
            }
            props.onAddOrder(order)

            setOrderId("");
            setDish("");
            setPrice("");
            setTables('Choose Table')
    })
  return (
    <div className='container'>
    <form>

    <Input label="Unique Order Id : " type="number" value={orderId} id="orderId" onChange={idChangeHandler}/>
  <Input label="Choose a Dish : " type="text" value={dish} id="dish" onChange={dishChangeHandler}/>
  <Input label="Price : " type="number" value={price} id="price" onChange={priceChangeHandler}/>
  <label htmlFor='tables'>Table : </label>
  <select id="tables" onChange={tableChangeHandler} value={tables}>
  <option disabled>Choose Table</option>
  <option>Table 1</option>
  <option>Table 2</option>
  <option>Table 3</option>
  </select>
  
  <button type="submit" onClick={submitOrder} className="btn btn-primary">AddToBill</button>
</form>
      
    </div>
  )
}

export default Additem;
