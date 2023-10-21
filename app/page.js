"use client";
import React, { useState } from "react";

const page = () => {
  let [title, useTitle] = useState("");
  let [desc, useDesc] = useState("");
  let [task, useTask] = useState([]);
  let renderTask = (
    <h2 className="text-2xl font-bold text-center">There is no task</h2>
  );

  if (task.length > 0) {
    renderTask = task.map((t, i) => {
      return (
        <li key={i}>
          <div className="flex items-center p-3 justify-between mb-5 border-solid border-black border-4 ">
            <h5 className="text-2xl font-bold">{t.title}</h5>
            <p className="text-lg">{t.desc}</p>
            <button
              className="p-3 bg-red-500 text-white font-bold rounded-md"
              onClick={() => {
                deleteTask(i);
              }}
            >
              {" "}
              Task Done{" "}
            </button>
          </div>
        </li>
      );
    });
  }

  let deleteTask = (i) => {
    let tmp = [...task];
    tmp.splice(i, 1);
    useTask(tmp);
  };

  let handelSubmit = (e) => {
    e.preventDefault();

    useTask([...task, { title, desc }]);

    useTitle("");
    useDesc("");
  };

  return (
    <>
      <h1 className="bg-black text-white p-5 text-center text-4xl tracking-normal">
        Rushikesh shrimanwar's TO-DO List
      </h1>

      <form
        className="flex items-center justify-between m-3"
        onSubmit={handelSubmit}
      >
        <input
          type="text"
          placeholder="Enter The Task Title"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          value={title}
          required
          onChange={(e) => {
            useTitle(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Enter The Task Description"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          value={desc}
          required
          onChange={(e) => {
            useDesc(e.target.value);
          }}
        />

        <button className="bg-black text-white px-4 py-2 text-2xl border-r-8 rounded-lg">
          Add Task
        </button>
      </form>

      <hr />

      <div className="p-8 bg-slate-200" id="taskInformation">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
