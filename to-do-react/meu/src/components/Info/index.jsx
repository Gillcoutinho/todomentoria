import styles from './styles.module.css';

export function Info(props) {
    return (
        <div className={styles.tarefasCriadasInfo}>
            <div className={styles.containerTarefas}>
                <p className={styles.tarefasCriadas}>Tarefas Criadas</p>
                <div className={styles.contador}>{props.total}</div>
            </div>

            <div className={styles.containerTarefas}>
                <p className={styles.concluidas}>Concluídas</p>
                <div className={styles.contador}>{props.totalCompletedItems}</div>
            </div>
        </div>
    )
}