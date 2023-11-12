import Clipboard from "../../assets/Clipboard.svg"
import styles from './styles.module.css';

export function EmptyState() {
    return(
        <div className={styles.semTarefasCadastrada}>
        <img className={styles.clipboard} width={56} height={56} src={Clipboard}></img>
        <p className={styles.titulo}>Você ainda não tem tarefas cadastradas</p>
        <p className={styles.subtitulo}>Crie tarefas e organize seus itens a fazer</p>
      </div>
    )
}