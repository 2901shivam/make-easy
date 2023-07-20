import React from 'react'

const Input = (props) => {
  return (
    <div className="mb-3">
    <label htmlFor={props.id} className="form-label">{props.label}</label>
    <input type={props.type} value={props.value} onChange={props.onChange} className="form-control" id={props.id}/> 
  </div>
  )
}

export default Input;

