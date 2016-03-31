import React from 'react'
import Lists from './Lists'
import ListActions from '../actions/ListActions'
import ListStore from '../stores/ListStore'
import AltContainer from 'alt-container'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.addList}>+</button>
        <AltContainer
          stores={[ListStore]}
          inject={{lists: () => ListStore.getState().lists || []}}
        >
          <Lists />
        </AltContainer>
      </div>
    )
  }

  addList = () => {
    ListActions.create({title: "New Shopping List"})
  }
}
