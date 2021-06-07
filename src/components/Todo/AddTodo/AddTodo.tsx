import React, { useContext, useRef, useState } from 'react';
import { TodoContext } from '../../../store/todo-context';
import '../Todo.scss';

const AddTodo = () => {

	const todosCtx = useContext(TodoContext);
	const inputContent = useRef<HTMLInputElement>(null);

	const [markedComplete, setMarkedComplete] = useState(false)

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const content = inputContent.current!.value;

		if (content.trim().length === 0)
			return;

		todosCtx.addTodo(content, markedComplete);
		inputContent.current!.value = '';
		setMarkedComplete(false);
	}

	return <>
		<form onSubmit={handleSubmit}>
			<div className='todo-item todo-item--inputform'>
				<div><label htmlFor='checkmark-completed-input' className='checkmark'>
					<input type="checkbox" id='checkmark-completed-input' className='checkmark__checkbox' checked={markedComplete} onChange={()=>{setMarkedComplete(!markedComplete)}}  />
					<span className='checkmark__mark'></span>
				</label>
				</div>
				<input placeholder='Create a new todo...' type="text" ref={inputContent} className='todo-item__input-text' />
			</div>
		</form>
	</>
}

export default AddTodo;