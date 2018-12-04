import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Home.scss'
import DisplayItem from './subcomponents/displayItem';

export default class Home extends Component {
  static propTypes = {
    addItemOperation: PropTypes.func.isRequired,
    deleteItemOperation: PropTypes.func.isRequired,
  }

  state = {
    content: 'aaaaa',
    list: [],
  }

  componentWillReceiveProps = ({ home: { list } }) => {
    this.setState({
      list,
    })
  }

  onChange = (content) => {
    this.setState({
      content,
    })
  }

  onAddItem = () => {
    const { addItemOperation } = this.props
    const { content } = this.state

    addItemOperation(content)
  }


  render() {
    const { deleteItemOperation, addItemOperation } = this.props
    const { content } = this.state

    const { list } = this.state
    return (
      <div className="App">
        <input value={content} onChange={e => this.onChange(e.target.value)} />
        <button type="submit" onClick={() => addItemOperation(content)}> add </button>
        <DisplayItem list={list} onDelete={deleteItemOperation} />
      </div>
    )
  }
}
