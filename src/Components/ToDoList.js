import React, {Component} from 'react';
import NewToDoForm from './NewToDoForm';
import Todo from './Todo';
import './Styles/ToDoList.css';

class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state={
            todos:[]
        }
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
    }

    create(newTodo){
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }

    remove(id){
        this.setState({
            todos: this.state.todos.filter(f => f.id !== id)
        });
    }

    update(id, updatedTask){
        const updatedTodos = this.state.todos.map(todo=>{
            if(todo.id === id){
                return {...todo, task: updatedTask}
            }
            return todo;
        });
        this.setState({
            todos: updatedTodos
        });
    }

    toggleComplete(id){
        const updatedTodos = this.state.todos.map(todo=>{
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo;
        });
        this.setState({
            todos: updatedTodos
        });
    }

    render(){
        const todos = this.state.todos.map(todo => {
            return <Todo 
                    id={todo.id} 
                    key={todo.id} 
                    task={todo.task}
                    completed={todo.completed}
                    removeTodo={this.remove}
                    updateTodo={this.update}
                    toggleComplete={this.toggleComplete}
                    />;
        });
        return(
            <div className="TodoList">
                <h1>Todo-do List <span>A simple React Todo List App</span></h1>
                <NewToDoForm createNewTodo={this.create}/>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }
}

export default ToDoList;