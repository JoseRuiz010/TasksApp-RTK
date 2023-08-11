import React, { useEffect } from "react";
import { useCreateTaskMutation } from "../api/apiSlice";
import "../App.css";
import { Input, Switch } from "antd";
import TextArea from "antd/es/input/TextArea";
export const TasksForm = () => {
  const [createTask, { isError, error, isLoading }] = useCreateTaskMutation();

  const hanldleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value?.trim();
    const description = e.target.elements.description.value?.trim();
    const completed = e.target.elements.completed.value?.trim();

    try {
      await createTask({
        name,
        description,
        completed,
      })
        .unwrap()
        .then((res) => alert("Listado"))
        .catch((rej) => console.log((rej) => console.error(rej)));
    } catch (error) {
      alert(JSON.stringify({ error }));
    }
  };

  return (
    <div className="basis-1/2 h-min shadow-2xl p-7 rounded-xl">
      {isLoading && <h1>{"Creando Task...."}</h1>}
      <h1 className=" font-bold text-2xl text-center mb-5">Nueva</h1>
      <form className="form" action="" onSubmit={hanldleSubmit}>
        <Input showCount maxLength={20} type="text" name="name" />
        <br />
        <br />
        <TextArea showCount maxLength={100} type="text" name="description" />

        <input type="checkbox" name="completed" />
        <br />
        <button className="p-3 w-full bg-blue-500 rounded-md" type="submit">
          Add Tasks
        </button>
      </form>
      {isError && <h1>Error: {error.error}</h1>}{" "}
      {/* Mostrar mensaje de error si ocurrió un error */}
    </div>
  );
};
