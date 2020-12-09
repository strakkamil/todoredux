import { connect } from 'react-redux'
import { changeType } from '../../actions'
import styles from './Radio.module.scss'

function Radio({ changeType }) {
  const handleOnChangeType = (e) => {
    changeType(e.target.id)
  }
  return (
    <div
      className={styles.wrapper}>
      <form
        onChange={(e) => handleOnChangeType(e)} className={styles.form}>
        <label
          className={styles.radio}
        >
          krytyczne
              <input
            className={styles.input}
            type="radio"
            id="critical"
            value="krytyczne"
            name="type"
            defaultChecked />
          <div
            className={styles.radioButton}
          />
        </label>
        <label
          className={styles.radio}
        >
          ważne
              <input
            className={styles.input}
            type="radio"
            id="important"
            value="wazne"
            name="type" />
          <div
            className={styles.radioButton}
          />
        </label>
        <label
          className={styles.radio}
        >
          opcjonalne
              <input
            className={styles.input}
            type="radio"
            id="optional"
            value="opcjonalne"
            name="type" />
          <div
            className={styles.radioButton}
          />
        </label>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  changeType: (itemType) => (dispatch(changeType(itemType)))
})

export default connect(null, mapDispatchToProps)(Radio)