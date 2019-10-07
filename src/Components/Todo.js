import React, { Component } from 'react';
import './Styles/Todo.css';

class Todo extends Component{
    constructor(props){
        super(props);
        this.state={
            isEditing: false,
            task: this.props.task
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        this.toggleCompleted = this.toggleCompleted.bind(this);
    }

    clickHandler(){
        this.props.removeTodo(this.props.id);
    }

    toggleEdit(){
        this.setState({
            isEditing: !this.state.isEditing
        });
    }

    changeHandler(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    updateHandler(evt){
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({ isEditing: !this.state.isEditing})
    }

    toggleCompleted(){
        this.props.toggleComplete(this.props.id)
    }

    render(){
        let result;
        if(this.state.isEditing){
            result = (
                <div className="Todo">
                    <form className="Todo-edit-form" onSubmit={this.updateHandler}>
                        <input 
                            type='text'
                            name='task'
                            value={this.state.task}
                            onChange={this.changeHandler}
                        />
                        <button>Submit</button>
                    </form>
                </div>
            )
        }
        else{
            result=(
                <div className="Todo">
                    <div className="button-wrap">
                        <button onClick={this.toggleEdit}>
                            <i class="fas fa-pen" />
                        </button>
                        <button onClick={this.clickHandler}>
                        <i class="fas fa-trash" />
                        </button>
                    </div>
                    <li
                    onClick={this.toggleCompleted}
                    className={this.props.completed ? "Todo-task completed" : "Todo-task"}>
                        {this.props.task}
                    </li>
                </div>
            )
        }
        return result;
    }
}

export default Todo;