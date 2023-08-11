import React from "react";
import { TasksLists } from "./components/TasksLists";
import { TasksForm } from "./components/TasksForm";

export const App = () => {
  return (
    <div className="p-4  bg-red-200 max-w-5xl  mx-auto">
      <div className="my-6">
        <h1 className="font-bold text-4xl text-center">APP TASK</h1>
      </div>
      <div className="flex">
        <TasksForm />
        <TasksLists />
      </div>
    </div>
  );
};
