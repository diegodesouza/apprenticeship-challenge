import React from 'react'
import AltContainer from 'alt-container'
import Items from './Items.jsx'
import ItemActions from '../actions/ItemActions'
import ItemStore from '../stores/ItemStore'
import ListActions from '../actions/ListActions'
import Editor from '../components/Editor'

export default class List extends React.Component {
  render() {
    // extracts list as this.props
    const {list, ...props} = this.props;

    return (
      <div {...props}>
        <div className="" onClick={this.activateListEdit}>

          <div className="add-item">
            <button onClick={this.addItem}>+</button>
          </div>

          <Editor className=""
            editing={list.editing}
            value={list.title}
            onEdit={this.editTitle}
          />

          <div className="">
            <button onClick={this.deleteList}>x</button>
          </div>

        </div>
        <AltContainer
          stores={[ItemStore]}
          inject={{ items: () => ItemStore.getItemsByIds(list.items) }}
        >
          <Items 
            onValueClick={this.activateItemEdit}
            onEdit={this.editItem} 
            onDelete={this.deleteItem}
          />
        </AltContainer>
      </div>
    )
  }

  addItem = (event) => {
    event.stopPropagation()

    const listId = this.props.list.id
    const item = ItemActions.create({text: "New Shopping Item"})

    ListActions.connectToList({
      itemId: item.id,
      listId
    })
  }

  editTitle = (title) => {
    const listId = this.props.list.id

    if(!title.trim()) {
      ListActions.update({id: listId, editing: false})

      return
    }
    ListActions.update({id: listId, title, editing: false})
  }

  editItem(id, text) {
    if(!text.trim()) {
      ItemActions.update({id, editing: false})

      return
    }

    ItemActions.update({id, text, editing: false});
  }

  activateListEdit = () => {
    const listId = this.props.list.id

    ListActions.update({id: listId, editing: true})
  }

  activateItemEdit(id) {
    ItemActions.update({id, editing: true})
  }


  deleteItem = (itemId, event) => {
    event.stopPropagation()

    const listId = this.props.list.id

    ListActions.disconnectFromList({listId, itemId})
    ItemActions.delete(itemId)
  }

  deleteList = () => {
    const listId = this.props.list.id

    ListActions.delete(listId)
  }
}
