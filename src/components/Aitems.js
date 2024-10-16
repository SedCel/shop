import React, { Component } from 'react'
import Item from './Item'

export class Aitems extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(el => (
            <Item key={el.id} item={el} onAdd={this.props.onAdd} />
        ))}
      </main>
    )
  }
}

export default Aitems
