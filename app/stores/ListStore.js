import uuid from 'node-uuid'
import alt from '../libs/alt'
import ListActions from '../actions/ListActions'

class ListStore {
  constructor() {
    this.bindActions(ListActions)

    this.lists = []
  }

  create(list) {
    const lists = this.lists

    list.id = uuid.v4()
    list.items = list.items || []

    this.setState({
      lists: lists.concat(list)
    })
  }

  update(updatedList) {
    const lists = this.lists.map(list => {
      if(list.id === updatedList.id) {
        return Object.assign({}, lane, updatedList)
      }

     return list
    })

   this.setState({lists})
  }

  delete(id) {
    this.setState({
      lists: this.lists.filter(list => list.id !== id)
    })
  }

  connectToList({listId, itemId}) {
    const lists = this.lists.map(list => {
     if(list.id === listId) {
       if(list.items.includes(itemId)) {
         console.warn('Already attached item to list', lists)
       } else {
         list.items.push(itemId)
       }
     }

     return list
    })

    this.setState({lists})
  }

  disconnectFromList({listId, itemId}) {
    const lists = this.lists.map(list => {
      if(list.id === listId) {
        list.items = list.items.filter(item => item !== itemId)
      }

      return list
    })

    this.setState({lists})
  }
}

export default alt.createStore(ListStore, 'ListStore')
