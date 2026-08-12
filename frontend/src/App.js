import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  return (
    <div>
      <h1>Task Management Platform</h1>

      {tasks.map((task) => (
        <div key={task.id}>
          <p>
            {task.title} — {task.completed ? "Completed" : "Incomplete"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;