import React from 'react'
import Item from "./Item.jsx"

// component accepts items, onEdit and onDelete as props
export default ({items, onEdit, onDelete}) => {
  return (
    <ul>{items.map(item =>
      <li key={item.id}>
        <Item 
          text={item.text}
          onEdit={onEdit.bind(null, item.id)}
          onDelete={onDelete.bind(null, item.id)}
        />
      </li>
    )}</ul>
  )
}
