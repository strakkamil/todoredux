import { connect } from 'react-redux'
import Task from '../Task/Task'
import EmptyTasks from '../EmptyTasks/EmptyTasks'
import styles from './OptionalTasks.module.scss'

function OptionalTasks({ optional }) {
  return (
    <div
      className={styles.wrapper}>
      <p
        className={styles.heading}>
        opcjonalne
        </p>
      <div
        className={styles.tasks}>
        {optional.length === 0
          ? <EmptyTasks /> :
          optional.map(({ title, type, time, description }) =>
            (<Task key={title} title={title} type={type} time={time} description={description} />
            ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    optional: state.optional
  }
}

export default connect(mapStateToProps)(OptionalTasks)