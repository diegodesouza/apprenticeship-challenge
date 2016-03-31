import AltContainer from 'alt-container'
import React from 'react'
import Items from './Items.jsx'
import ItemActions from '../actions/ItemActions'
import ItemStore from '../stores/ItemStore'
import ListActions from '../actions/ListActions'
import Editor from '../components/Editor'

export default class List extends React.Component {
  render() {
    const {list, ...props} = this.props;

    return (
      <div {...props}>
        <div className="" onClick={this.activateListEdit}>
          <div className="">
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

      return;
    }

    ItemActions.update({id, text, editing: false});
  }

  activateListEdit = () => {
    const listId = this.props.list.id

    ListActions.udpate({id: listId, editing: true})
  }

  activateItemEdit(id) {
    ItemActions.update({id: id, editing: true})
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
