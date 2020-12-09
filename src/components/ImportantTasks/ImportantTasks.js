import { connect } from 'react-redux'
import Task from '../Task/Task'
import EmptyTasks from '../EmptyTasks/EmptyTasks'
import styles from './ImportantTasks.module.scss'

function ImportantTasks({ important }) {
  return (
    <div
      className={styles.wrapper}>
      <p
        className={styles.heading}>ważne</p>
      <div
        className={styles.tasks}>
        {important.length === 0 ? <EmptyTasks /> : important.map(({ title, type, time, description }) =>
          (<Task key={title} title={title} type={type} time={time} description={description} />
          ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    important: state.important
  }
}

export default connect(mapStateToProps)(ImportantTasks)