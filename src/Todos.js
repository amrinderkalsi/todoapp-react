import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from './redux/Todo/todo.action';

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })        
    ) : (
        <p>You have no todo's left, yay!</p>
    )
    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}

const mapDispatchToState = dispatch => ({
    deleteTodo: (id) => dispatch(deleteTodo(id))
})

export default connect(null, mapDispatchToState)(Todos);