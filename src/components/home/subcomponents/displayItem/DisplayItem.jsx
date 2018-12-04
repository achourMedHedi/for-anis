import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './DisplayItem.scss'

export default class DisplayItem extends Component {
  state = {}

  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.any).isRequired,
    onDelete: PropTypes.func.isRequired,
  }

  render() {
    const { list, onDelete } = this.props
    return (
      <div className="C">
        {
            list.map(el => (
              <div key={Math.random(150)}>
                {el}
                <button type="submit" onClick={() => onDelete(el)}>delete</button>
              </div>
            ))
          }
      </div>
    )
  }
}
