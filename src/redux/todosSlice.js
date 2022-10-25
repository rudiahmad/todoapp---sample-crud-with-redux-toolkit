import { createSlice } from '@reduxjs/toolkit';

let nextTodoId = 1;

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push({ id: nextTodoId++, text: action.payload, completed: false });
    },
    updateTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload.id);

      if (todo) {
        todo.text = action.payload.text;
      }
    },
    deleteTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, toggleTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
