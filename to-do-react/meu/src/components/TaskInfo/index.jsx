import styles from './styles.module.css';
import { Trash, Check } from 'phosphor-react';
import { useState } from 'react';

export function TaskInfo(props) {

  const [isChecked, setIsChecked] = useState(false);

  function handleChangeCheckBox(event) {
    setIsChecked(event.target.checked);
    props.handleCompletedTask(props.item, isChecked)
  }

  return (
    <div className={styles.card}>
      <label className={styles.wrapper}>
        <input checked={isChecked} type="checkbox" onChange={(event) => handleChangeCheckBox(event)} />
        <div className={`${styles.checkbox} ${isChecked ? styles.checkboxChecked : styles.checkboxUnchecked}`}>
          {isChecked ? <Check size={16} color="#fff" /> : null}
        </div>
        <p className={`${isChecked ? styles.textCheck : styles.info}`}>{props.item}</p>
      </label>

      <button className={styles.trash} onClick={()=> props.handleDeleteTask(props.item)}><Trash size={24} color='#808080' /></button>
    </div>
  )
}