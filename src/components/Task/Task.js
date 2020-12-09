import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeItem } from '../../actions'
import styles from './Task.module.scss'

class Task extends Component {
  state = {
    isDone: false
  }

  toggleDoneClass = () => {
    this.setState({
      isDone: !this.state.isDone
    })
  }

  render() {
    const { isDone } = this.state
    return (
      <div
        className={styles.wrapper}
        onClick={this.toggleDoneClass}
      >
        {isDone && <div
          className={styles.done}>
          zrobione
          </div>}
        <div
          className={styles.change}>
          <button
            onClick={() => this.props.removeItem(this.props.type, this.props.title)}>
            usuń
            </button>
        </div>
        <p
          className={styles.title}>
          {this.props.title}
        </p>
        {this.props.type === 'critical' ?
          <p className={styles.type}>krytyczne</p> :
          this.props.type === 'important' ?
            <p className={styles.type}>ważne</p> :
            <p className={styles.type}>opcjonalne</p>}
        <p
          className={styles.time}>
          {this.props.time}
        </p>
        <span
          className={styles.description}>
          {this.props.description}
        </span>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  removeItem: (itemType, title) => {
    dispatch(removeItem(itemType, title))
  }
})

export default connect(null, mapDispatchToProps)(Task)