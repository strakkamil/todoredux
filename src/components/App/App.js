import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeType } from '../../actions'
import { BrowserRouter, Route } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import Modal from '../Modal/Modal'
import MainView from '../MainView/MainView';
import CriticalTasks from '../CriticalTasks/CriticalTasks'
import ImportantTasks from '../ImportantTasks/ImportantTasks'
import OptionalTasks from '../OptionalTasks/OptionalTasks'
import styles from './App.module.scss'

class App extends Component {
  state = {
    isModalOpen: false,
  }

  openModal = () => {
    this.setState({
      isModalOpen: true
    })
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false
    })

    this.props.changeType('critical')
  }

  render() {
    const { isModalOpen } = this.state
    return (
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Sidebar openModal={this.openModal} />
          <Route exact path='/' component={MainView} />
          <Route path='/critic' component={CriticalTasks} />
          <Route path='/important' component={ImportantTasks} />
          <Route path='/optional' component={OptionalTasks} />
          {isModalOpen && <Modal closeModal={this.closeModal} />}
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeType: (itemType) => (dispatch(changeType(itemType)))
})

export default connect(null, mapDispatchToProps)(App);
