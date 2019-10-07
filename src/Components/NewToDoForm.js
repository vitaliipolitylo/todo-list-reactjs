import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './Styles/NewTodoForm.css';

class NewTodoForm extends Component{
    constructor(props){
        super(props);
        this.state={
            task: ""
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    submitHandler(evt){
        evt.preventDefault();
        this.props.createNewTodo({...this.state, id:uuid(), completed: false});
        this.setState({
            task: ""
        })
    }

    render(){
        return(
            <form className="NewTodoForm" onSubmit={this.submitHandler}>
                <label htmlFor="task">New Todo-do</label>
                <input 
                    id="task"
                    type="text"
                    name="task"
                    placeholder="New Todo-do"
                    value={this.state.task}
                    onChange={this.changeHandler}
                    required
                />
                <button>Add Todo!</button>
            </form>
        );
    }
}

export default NewTodoForm;