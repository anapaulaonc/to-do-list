import { useState } from 'react';
import { to_do_list_backend } from 'declarations/to-do-list-backend';

function App() {
  const [tasks, setTasks] = useState([]); // Define um estado para uma lista de tarefas

  function handleSubmit(event) {
    event.preventDefault();
    const task = event.target.elements.task.value;

    if (task.trim() === '') {
      return; // Impede adicionar tarefas vazias
    }

    to_do_list_backend.greet(task).then((response) => {
      setTasks((prevTasks) => [...prevTasks, response]); // Adiciona a nova tarefa à lista
    });

    event.target.reset(); // Reseta o campo de input
  }

  return (
    <main>
      <h1>To Do List</h1>
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="task">Enter Task: &nbsp;</label>
        <input id="task" alt="task" type="text" />
        <button type="submit">Submit Task</button>
      </form>
      <section id="tasks">
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
