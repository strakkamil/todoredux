import { connect } from 'react-redux'
import Task from '../Task/Task'
import EmptyTasks from '../EmptyTasks/EmptyTasks'
import styles from './CriticalTasks.module.scss'

function CriticalTasks({ critical }) {
  return (
    <div
      className={styles.wrapper}>
      <p
        className={styles.heading}>
        krytyczne
        </p>
      <div
        className={styles.tasks}>
        {critical.length === 0 ?
          <EmptyTasks /> :
          critical.map(({ title, type, time, description }) =>
            (<Task key={title} title={title} type={type} time={time} description={description} />
            ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    critical: state.critical
  }
}

export default connect(mapStateToProps)(CriticalTasks)