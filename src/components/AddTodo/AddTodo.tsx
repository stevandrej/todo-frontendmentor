import React, { useContext, useRef } from 'react';
import { TodoContext } from '../../store/todo-context';
import '../Todo.scss';
import './AddTodo.scss';

const AddTodo = () => {

	const todosCtx = useContext(TodoContext);
	const inputContent = useRef<HTMLInputElement>(null);

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const content = inputContent.current!.value;

		if (content.trim().length === 0)
			return;

		todosCtx.addTodo(content);
		inputContent.current!.value = '';
	}

	return <>
		<form onSubmit={handleSubmit}>
			<input placeholder='Create a new todo...' type="text" ref={inputContent} className='todo-item input-item' />
		</form>
	</>
}

export default AddTodo;