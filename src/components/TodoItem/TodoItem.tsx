import React, { useContext } from 'react';
import Todo from '../../models/todo';
import { TodoContext } from '../../store/todo-context';
import '../Todo.scss';
import './TodoItem.scss';

const TodoItem: React.FC<{ item: Todo }> = (props) => {

	const todosCtx = useContext(TodoContext);

	const handleMarkStatus = () => {
		if (props.item.completed)
			todosCtx.markIncompleted(props.item.id)
		else
			todosCtx.markCompleted(props.item.id)
	}

	return <li className='todo-item'>
		<label htmlFor={props.item.id} className='item-checkbox'><input type='checkbox' className='item-checkbox' id={props.item.id}
			onClick={handleMarkStatus} defaultChecked={props.item.completed ? true : false} />
			<span className='checkmark'></span>
		</label>
		{props.item.content} {props.item.completed ? ' completed' : ' incompleted'}
	</li>
}

export default TodoItem;