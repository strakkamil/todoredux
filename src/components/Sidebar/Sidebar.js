import styles from './Sidebar.module.scss'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import NewTask from '../NewTask/NewTask'

function Sidebar({ openModal }) {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <Navigation />
      <NewTask openModal={openModal} />
    </div>
  )
}

export default Sidebar