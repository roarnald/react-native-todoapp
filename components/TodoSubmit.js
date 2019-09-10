import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const TodoSubmit = ({submitToDo}) => (
  <View style={styles.buttonContainer}>
    <TouchableHighlight
      underlayColor="#555"
      style={styles.button}
      onPress={submitToDo}>
      <Text style={styles.submit}>Add to list</Text>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    paddingBottom: 7,
  },
  button: {
    height: 30,
    padding: 0,
    backgroundColor: '#333',
    width: 300,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    color: '#fff',
    fontWeight: '900',
  },
});

export default TodoSubmit;
