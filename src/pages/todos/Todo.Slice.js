import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoStore: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoStore.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todoStore = state.todoStore.filter(
        (todo) => todo.id !== action.payload
      );
      // console.log("State", state);
      // console.log("Action", action);
    },
    editTodo: (state, action) => {
      const { id, updatedTitle } = action.payload;
      const todoToUpdate = state.todoStore.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.title = updatedTitle;
      }
    },
    deleteAllTodos: (state) => {
      state.todoStore = [];
    },
  },
});

export const { addTodo, deleteTodo, editTodo, deleteAllTodos } =
  todoSlice.actions;
export default todoSlice.reducer;
