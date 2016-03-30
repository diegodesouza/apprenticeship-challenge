import React from 'react'
import Items from './Items.jsx'
import uuid from 'node-uuid'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: uuid.v4(),
          text: "Learn React"
        },
        {
          id: uuid.v4(),
          text: "Learn Javascript"
        }
      ]
    } 
  }
  render() {
    const items = this.state.items

    return (
      <div>
        <button onClick={this.addItem}>+</button>
        <Items 
          items={items}
          onEdit={this.editItem}
          onDelete={this.deleteItem}
        />
      </div>
    )
  }

  addItem = () => {
    this.setState({
      items: this.state.items.concat(
        [
          {
            id: uuid.v4(),
            text: "New Shopping Item"
          }
        ]
      )
    })
  }

  editItem = (id, text) => {
    if(!text.trim()) {
      return;
    }    

    const items = this.state.items.map(item => {
      if(item.id === id && text) {
        item.text = text
      }

      return item
    })

    this.setState({items})
  }

  deleteItem = (id, e) => {
    e.stopPropagation();

    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    })
  }
}
