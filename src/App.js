import './App.css';
import Additem from './Components/Additem';
import Item from './Components/Item';
import { useState } from 'react';

function App() {
  const [orders, setOrders]= useState([]);
   

  const addOrder=(order)=>{
    setOrders([...orders, order])
    localStorage.setItem(order.id, JSON.stringify(order));
  }

  const deleteOrder=(orderId)=>{
    const newOrder= orders.filter(ele=> ele.id!==orderId);
    setOrders(newOrder);
  }
  
  return (
    <div>
      <Additem  onAddOrder={addOrder}/>
      <Item item={orders} onDeleteOrder={deleteOrder} />
    </div>
  );
}

export default App;
