import React, { useContext } from 'react';
import { View } from '../../../models/view';
import { TodoContext } from '../../../store/todo-context';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = () => {

	const todosCtx = useContext(TodoContext);

	if (todosCtx.view === View.Completed)
		return <>
			<ul className='todo-list'>
				{todosCtx.todos.map(element => element.completed === true ? <TodoItem item={element} key={element.id} /> : null)}
			</ul>
		</>

	else if (todosCtx.view === View.Active)
		return <>
			<ul className='todo-list'>
				{todosCtx.todos.map(element => element.completed === false ? <TodoItem item={element} key={element.id} /> : null)}
			</ul>
		</>
	else
		return <ul className='todo-list'>
			{todosCtx.todos.map(element => <TodoItem item={element} key={element.id} />)}
		</ul>
}

export default TodoList;