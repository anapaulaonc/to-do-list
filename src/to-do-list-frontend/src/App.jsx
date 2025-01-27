import { useState } from 'react';
import { to_do_list_backend } from 'declarations/to-do-list-backend';

function App() {
  const [tasks, setTasks] = useState([]); 

  function handleSubmit(event) {
    event.preventDefault();
    const taskName = event.target.elements.task.value;

    if (taskName.trim() === '') {
      return; // Impede adicionar tarefas vazias
    }

    // Chama o backend para processar a tarefa
    to_do_list_backend.greet(taskName).then((response) => {
      const newTask = {
        id: Date.now(), // Cria um ID único para a tarefa
        name: response,
        completed: false, // Inicialmente não concluída
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    });

    event.target.reset(); // Reseta o campo de input
  }


  function toggleTaskCompletion(taskId) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <main>
      <br />
      <h1>To-Do List</h1>
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="task">Enter Task: &nbsp;</label>
        
        <input id="task" alt="task" type="text" />
        <button type="submit">Submit Task</button>
      </form>
      <section id="tasks">
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
              />
              <span className={task.completed ? 'completed' : ''}>{task.name}</span>

            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
