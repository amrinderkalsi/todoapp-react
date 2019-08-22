import React from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return(
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.props.todos} />
        <AddTodo />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todo.todos
})

export default connect(mapStateToProps)(App);
