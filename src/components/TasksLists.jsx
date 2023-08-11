import React from "react";
import {
  useDeleteTasksMutation,
  useGetTasksQuery,
  useCreateTaskMutation,
  useUpdateTasksMutation,
} from "../api/apiSlice";
import { TasksItems } from "./TasksItems";

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
    <div className="basis-1/2 h-4/5">
      <ul className="p-1 max-h-96 overflow-auto scrollbar">
        {tasks.map((tasks) => (
          <TasksItems tasks={tasks} />
        ))}
      </ul>
    </div>
  );
};
