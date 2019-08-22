import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addTodo} from './redux/Todo/todo.action';

class AddTodo extends Component {
    state = {
        content: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let todo = this.state;
        todo.id = Math.random();
        this.props.addTodo(todo)
        this.setState({
            content: ''
        })
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Add new todo:</label>
                <input type="text" onChange={this.handleChange} value={this.state.content}/>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch(addTodo(todo))
})

export default connect(null, mapDispatchToProps)(AddTodo);