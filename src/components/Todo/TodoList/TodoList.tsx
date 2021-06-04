import React, { useContext } from 'react';
import { TodoContext } from '../../../store/todo-context';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = () => {

	const todosCtx = useContext(TodoContext);

	return <>
		<ul className='todo-list'>
			{todosCtx.todos.map(element => <TodoItem item={element} key={element.id} />)}
		</ul>
	</>
}

export default TodoList;