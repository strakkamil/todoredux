import styles from './NewTask.module.scss'

function NewTask({ openModal }) {
  return (
    <div
      className={styles.wrapper}>
      <p>
        dodaj taska
        </p>
      <div
        onClick={openModal}
        className={styles.add}>
        +
        </div>
    </div>
  )
}

export default NewTask