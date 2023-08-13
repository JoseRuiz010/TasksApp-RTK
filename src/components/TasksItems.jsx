import React from "react";
import {
  useDeleteTasksMutation,
  useUpdateTasksMutation,
} from "../api/apiSlice";

export const TasksItems = ({ tasks }) => {
  const [deleteTask] = useDeleteTasksMutation();
  const [updateTask] = useUpdateTasksMutation();

  const onDeleteTask = (id) => deleteTask(id);
  const oUpdateTask = (data) => updateTask(data);

  return (
    <li
      className="flex justify-between mx-4 m-3 bg-white p-4 rounded-2xl gap-3 shadow-lg"
      key={tasks.name}
    >
      <div className="h-min m-auto p-3 text-center bg-yellow-200 rounded-md">
        <h1 className="my-auto font-bold">{tasks.id}</h1>
      </div>
      <div className="flex flex-col w-full p-2">
        <h3 className="underline font-bold mb-3">{tasks.name}</h3>
        <p>{tasks.descriptionl}</p>
        <div className="h-min flex">
          <input
            className="self-auto"
            type="checkbox"
            checked={tasks.completed}
            id={tasks.id}
            onChange={(e) =>
              oUpdateTask({
                ...tasks,
                completed: e.target.checked,
              })
            }
          />
          <label className="ml-2 self-center" htmlFor={tasks.id}>
            completed
          </label>
        </div>
      </div>
      <button
        className="bg-red-400 p-2 rounded-md h-min my-auto"
        onClick={() => onDeleteTask(tasks.id)}
      >
        Delete
      </button>
    </li>
  );
};
