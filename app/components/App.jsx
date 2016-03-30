import React from 'react'
import Items from './Items'
import ItemActions from '../actions/ItemActions'
import ItemStore from '../stores/ItemStore'
import AltContainer from 'alt-container'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.addItem}>+</button>
        <AltContainer
          stores={[ItemStore]}
          inject={{items: () => ItemStore.getState().items}}
        >
          <Items 
            onEdit={this.editItem}
            onDelete={this.deleteItem}
          />
        </AltContainer>
      </div>
    )
  }

  addItem = () => {
    ItemActions.create({text: "New Shopping Item"})
  }

  editItem = (id, text) => {
    if(!text.trim()) {
      return;
    }    

    ItemActions.update({id, text})
  }

  deleteItem = (id, e) => {
    e.stopPropagation();

    ItemActions.delete(id)
  }
}
