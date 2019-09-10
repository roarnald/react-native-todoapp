import React from 'react';
import {Text, TouchableHighlight, StyleSheet} from 'react-native';

const TodoOptionsButton = ({onPress, complete, name}) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor="#403501"
    style={styles.button}>
    <Text
      style={[
        styles.text,
        complete ? styles.complete : null,
        name === 'Delete' ? styles.deleteButton : null,
      ]}>
      {name}
    </Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    padding: 7,
    backgroundColor: '#444',
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 5,
  },
  text: {
    color: '#eee',
    fontWeight: '900',
  },
  complete: {
    color: '#eee',
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    color: '#f22',
  },
});

export default TodoOptionsButton;
