import React from 'react';
import {View} from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({todos, deleteTodo, toggleComplete}) => {
  todos = todos.map((todo, i) => {
    return (
      <TodoItem
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        key={i}
        todo={todo}
      />
    );
  });

  return <View>{todos}</View>;
};

export default TodoList;
