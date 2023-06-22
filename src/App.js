import logo from './logo.svg';
import './App.css';
import Additem from './Components/Additem';
import Itemlist from './Components/Itemlist';
import { useState } from 'react';

function App() {
   
  const onDelete=(item)=>{
    console.log('delete');

    setItems(items.filter((e)=>{
     return e!=item;
    }))
  }

    const[items,setItems]=useState([
      
  ])
  const addOn=(order,dish,price)=>{
    // let sno=items[items.length-1].sno+1;
    const myItem={
      //sno:sno,
      order:order,
      dish:dish,
      price:price,
    }
    setItems([...items,myItem]);
  }
  
  return (
    <div>
      <Additem  addOn={addOn}/>
      <Itemlist item={items} onDelete={onDelete} />
    </div>
  );
}

export default App;
