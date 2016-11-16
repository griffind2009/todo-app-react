import React, {Component} from 'react'
import Item from './Item.js'

class ToDo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items:[ "code", "laundry" ],
      newTodo: '',
      completed: false
    }
  }

  handleChange(e){
    this.setState({
      newTodo: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    let oldItems = this.state.items.concat([this.state.newTodo])
    this.setState({
      items: oldItems
    })
  }

  render() {
    let items = this.state.items.map((item, i) => {
      return <Item body={item} key={i} />
    })
      return (
        <div>
        <h1>To Do list</h1>
        {items}
        <form onSubmit={e => this.handleSubmit(e)}>
        New Item:
        <input type="text" placeholder="New Todo Item" value={this.state.newTodo} onChange={e => this.handleChange(e)} />
        <input type="submit" value="submit" />
        </form>
        </div>
      )
    }
}

export default ToDo
