import React from 'react';
import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';
import './Todo.scss';
import ListControls from './ListControls/ListControls';

const Todo: React.FC = () => {
	return (
		<>
			<div className='input-form'>
				<AddTodo />
			</div>
			<TodoList />
			<ListControls />
		</>
	)

}

export default Todo;