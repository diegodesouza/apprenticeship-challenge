import React from 'react'

export default class Item extends React.Component {
  // constructor(props) {
    // super(props)

    // this.state = {
      // isEditing: false
    // }
  // }

  // render() {
    // if(this.state.isEditing) {
      // return this.renderEdit()
    // }

    // return this.renderItem()
  // }

  // renderEdit = () => {
    // return (
      // <input 
        // type="text"
        // ref={(e) => e ? e.selectionStart = this.props.text.length : null}
        // autoFocus={true}
        // defaultValue={this.props.text}
        // onBlur={this.finishEdit}
        // onKeyPress={this.checkEnter}
      // />
    // )
  // }

  // renderItem = () => {
    // return (
      // <div onClick={this.edit}>
        // <span>{this.props.text}</span>
        // { this.props.onDelete ? this.renderDelete() : null }
      // </div>
    // )
  // }
  
  // renderDelete = () => {
    // return (
      // <button onClick={this.props.onDelete}>x</button>
    // )
  // }

  // edit = () => {
    // this.setState({
      // isEditing: true
    // })
  // }
 
  // checkEnter = (e) => {
    // if(e.key === "Enter") {
      // this.finishEdit(e);
    // }
  // }

  // finishEdit = (e) => {
    // const value = e.target.value
    
    // if(this.props.onEdit) {
      // this.props.onEdit(value)

      // this.setState({
        // isEditing: false
      // })
    // }
  // }
}
