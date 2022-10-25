import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { TodoApp } from './src/module/todos/TodoApp';

export default function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}
