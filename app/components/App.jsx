import React from 'react'
import Note from './Note.jsx'
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
        <ul>
          {items.map(item => 
           <li key={item.id}>{item.text}</li>
          )} </ul>
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
}
