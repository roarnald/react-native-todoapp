import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Head from './components/Head';
import TodoInput from './components/TodoInput';
import TodoSubmit from './components/TodoSubmit';
// import ToDoItem from './components/ToDoItem';

let todoIndex = 0;

class App extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
  }

  inputChange = inputValue => {
    this.setState({inputValue});
  };

  submitToDo = () => {
    if (this.state.inputValue === '') {
      return;
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false,
    };

    todoIndex++;

    const todoList = [...this.state.todos, todo];

    this.setState({
      todos: todoList,
      inputValue: '',
    });
  };

  render() {
    const {inputValue} = this.state;

    return (
      <View>
        <Head />
        <TodoInput
          inputValue={inputValue}
          inputChange={text => this.inputChange(text)}
        />
        <TodoSubmit submitToDo={this.submitToDo} />
        <Text style={styles.sectionTitle}>See Your1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
