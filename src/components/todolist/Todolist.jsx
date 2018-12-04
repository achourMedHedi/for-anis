import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Todolist.scss'

export default class Todolist extends Component {
  state = {}

  static propTypes = {
    sampleOperation: PropTypes.func.isRequired,
  }

  render() {
    const { sampleOperation } = this.props
    return (
      <div className="C">
        <button type="submit" onClick={() => sampleOperation()}> button </button>
      Hello from Todolist
      </div>
    )
  }
}
