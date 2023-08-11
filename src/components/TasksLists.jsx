import React from "react";
import {
  useDeleteTasksMutation,
  useGetTasksQuery,
  useCreateTaskMutation,
  useUpdateTasksMutation,
} from "../api/apiSlice";

export const TasksLists = () => {
  const { data: tasks, isError, isLoading, error } = useGetTasksQuery();
  const [deleteTask] = useDeleteTasksMutation();
  const [updateTask] = useUpdateTasksMutation();
  if (isLoading) {
    return <div>Cargando...</div>;
  } else {
    if (isError) {
      return <div>Error:{error.message}</div>;
    }
  }
  console.log(tasks);
  return (
    <div className="bg-red-200">
      <ul className="container-tasks">
        {tasks.map((tasks) => (
          <li className="task-item" key={tasks.name}>
            <h3>{tasks.name}</h3>
            <p>{tasks.descriptionl}</p>
            <button
              onClick={() => {
                deleteTask(tasks.id);
              }}
            >
              Delete
            </button>
            <input
              type="checkbox"
              checked={tasks.completed}
              id={tasks.id}
              onChange={(e) => {
                updateTask({
                  ...tasks,
                  completed: e.target.checked,
                });
              }}
            />
            <label htmlFor={tasks.id}>completed</label>
          </li>
        ))}
      </ul>
    </div>
  );
};
