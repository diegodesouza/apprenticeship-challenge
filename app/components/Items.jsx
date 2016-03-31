import React from 'react'
import Item from "./Item.jsx"
import Editor from './Editor'

// component accepts items, onEdit and onDelete as props
export default ({items, onEdit, onDelete, onValueClick}) => {
  return (
    <ul>{items.map(item =>
      <li key={item.id}>
        <Editor
          editing={item.editing}
          value={item.text}
          onValueClick={onValueClick.bind(null, item.id)}
          onEdit={onEdit.bind(null, item.id)}
          onDelete={onDelete.bind(null, item.id)}
        />
      </li>
    )}</ul>
  )
}
