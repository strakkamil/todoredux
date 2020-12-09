import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../actions'
import styles from './Form.module.scss'

class Form extends Component {
  state = {
    title: '',
    time: '',
    description: '',
    type: ''
  }

  handleOnChangeInput = e => {
    this.setState({
      type: this.props.type,
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = () => {
    const { title, time, description, type } = this.state
    if (title === '' || time === '' || description === '' || type === '') {
      return null
    }
    this.props.addItem(this.state.type, this.state)
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <input
            type="text"
            name="title"
            placeholder="tytuł"
            value={this.state.title}
            onChange={this.handleOnChangeInput}
          />
          <label htmlFor="date">termin do:</label>
          <input
            name="time"
            value={this.state.date}
            onChange={this.handleOnChangeInput}
            type="date"
          />
          <textarea
            placeholder="opis..."
            value={this.state.description}
            onChange={this.handleOnChangeInput}
            name="description"
            cols="20"
            rows="5" />
        </form>
        <button onClick={this.onSubmit}>dodaj</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  type: state.type
})

const mapDispatchToProps = dispatch => ({
  addItem: (itemType, itemContent) => {
    dispatch(addItem(itemType, itemContent))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)