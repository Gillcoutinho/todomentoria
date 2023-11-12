import { Header } from "./components/Header";
import styles from './app.module.css'
import { PlusCircle } from 'phosphor-react';
import { EmptyState } from "./components/EmptyState";
import { TaskInfo } from "./components/TaskInfo";
import { Info } from "./components/Info";
import { useState } from "react";

export function App() {
  const [text, setText] = useState('');
  const [allTasks, setAllTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  function click(event) {
    event.preventDefault();
    setAllTasks([...allTasks, text])
    setText('');
  }

  function handleDeleteTask(taskToDelete) {
    const tasksWithoutDeletedOne = allTasks.filter(task => { return task !== taskToDelete })
    setAllTasks(tasksWithoutDeletedOne);
  }

  function handleCompletedTask(taskToComplete, isTaskChecked) {
    if (!isTaskChecked) {
      setCompletedTasks([...completedTasks, taskToComplete]);
    } else {
      const completedTasksWithoutDeletedOne = completedTasks.filter(task => { return task !== taskToComplete });
      setCompletedTasks(completedTasksWithoutDeletedOne);
    }
  }

  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <main>
          <form className={styles.formTask}>
            <input className={styles.input} type="text" placeholder="Adicione uma nova tarefa"
              value={text} onChange={(e) => setText(e.target.value)} />
            <button className={styles.buttonAddTask} onClick={click}>
              <PlusCircle size={16} />
              Criar
            </button>
          </form>

          <Info total={allTasks.length} totalCompletedItems={completedTasks.length} />
          {
            allTasks.length === 0 ? <EmptyState /> : (<div>
              {allTasks.map((item) => {
                return (
                  <TaskInfo key={item} item={item} handleDeleteTask={handleDeleteTask} handleCompletedTask={handleCompletedTask} />
                )
              })}
            </div>

            )
          }
        </main>
      </div>
    </div>
  );
}

