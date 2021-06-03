import React, { useContext } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import { TodoContext } from './store/todo-context';
import './App.scss';

function App() {

	const todosCtx = useContext(TodoContext);

	return (
		<div className="App">
			<div className='bg-image'></div>
			<div className="container">
				<div className='input-form'>
					<AddTodo />
				</div>
				<TodoList />
				<button onClick={todosCtx.clearAllCompleted}>Clear All Completed</button>
			</div>
		</div>
	);
}

export default App;