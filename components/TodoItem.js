import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TodoOptionsButton from './TodoOptionsButton';

const TodoItem = ({todo, toggleComplete, deleteTodo}) => (
  <View style={styles.todoContainer}>
    <Text
      style={[
        styles.text,
        todo.complete ? styles.todoTextCompleted : styles.todoText,
      ]}>
      {todo.title}
    </Text>
    <View style={styles.buttons}>
      <TodoOptionsButton
        name="Done"
        complete={todo.complete}
        onPress={() => toggleComplete(todo.todoIndex)}
      />
      <TodoOptionsButton
        name="Delete"
        onPress={() => deleteTodo(todo.todoIndex)}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  todoContainer: {
    marginLeft: 20,
    marginRight: 20,
    padding: 5,
    backgroundColor: '#ddd',
    flexDirection: 'row',
  },
  todoText: {
    fontSize: 20,
  },
  todoTextCompleted: {
    textDecorationLine: 'line-through',
    color: '#ccc',
    fontSize: 20,
    fontStyle: 'italic',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default TodoItem;
