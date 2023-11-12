import toDoLogo from '../../assets/logo.svg';
import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={toDoLogo} alt="to-do-list" />
    </header>
  )
}