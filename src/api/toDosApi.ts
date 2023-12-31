import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { store } from "../store/store";
import { Todo } from "../slices/todosSlice";

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const state = store.getState();
  const todos = state.todos.todos;

  if (todos.length === 0) {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      return response.data as Todo[];
    } catch (error) {
      throw new Error("Failed to fetch todos");
    }
  } else {
    return todos;
  }
});
