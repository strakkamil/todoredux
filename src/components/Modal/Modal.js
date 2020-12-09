import Radio from '../Radio/Radio'
import Form from '../Form/Form'
import styles from './Modal.module.scss'

function Modal({ closeModal }) {
  return (
    <div
      className={styles.wrapper}>
      <button
        onClick={closeModal}
        className={styles.close}>
        x
        </button>
      <p
        className={styles.heading}>
        dodaj taska
        </p>
      <Radio />
      <Form />
    </div>
  )
}

export default Modal