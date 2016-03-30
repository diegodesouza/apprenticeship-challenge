import uuid from 'node-uuid'
import alt from '../libs/alt'
import ListActions form '../actions/ListActions'

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
}

export default alt.createStore(ListStore, 'ListStore')
