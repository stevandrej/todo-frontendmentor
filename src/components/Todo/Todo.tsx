import React from 'react';
import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';
import './Todo.scss';
import ListControls from './ListControls/ListControls';
import Header from '../Header/Header';

const Todo: React.FC = () => {
	return (
		<>
			<Header />
			<div className='input-form'>
				<AddTodo />
			</div>
			<div className='todo-content-wrapper'>
				<TodoList />
				<ListControls />
			</div>
			<div className='dnd-description'>Drag and drop to reorder list</div>
		</>
	)

}

export default Todo;