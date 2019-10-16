import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const TodoInput = ({inputValue, inputChange}) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      value={inputValue}
      placeholder="Task description..."
      placeholderTextColor="#999"
      selectionColor="#222"
      onChangeText={inputChange}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 5,
    shadowColor: '#000',
  },
  input: {
    height: 60,
    backgroundColor: '#ddd',
    color: '#222',
    fontWeight: '800',
    padding: 15,
    textAlign: 'left',
  },
});

export default TodoInput;
