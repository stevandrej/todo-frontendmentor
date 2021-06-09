import React, { useContext } from 'react';
import Todo from '../../../models/todo';
import { TodoContext } from '../../../store/todo-context';
import iconCross from '../../../images/icon-cross.svg';

const TodoItem: React.FC<{ item: Todo, provided?: any }> = (props) => {

	const todosCtx = useContext(TodoContext);

	const handleMarkStatus = () => {
		if (props.item.completed)
			todosCtx.markIncompleted(props.item.id)
		else
			todosCtx.markCompleted(props.item.id)
	}

	//With DND REOrder options
	if (props.provided)
		return <li className={`todo-item ${props.item.completed ? 'todo-item--completed' : ''}`}  ref={props.provided.innerRef} {...props.provided.dragHandleProps} {...props.provided.draggableProps}>
			<label htmlFor={props.item.id} className='checkmark'>
				<input type="checkbox" id={props.item.id} className='checkmark__checkbox' checked={props.item.completed} onChange={handleMarkStatus} />
				<span className='checkmark__mark'></span>
			</label>
			{props.item.content}

			<div className='remove-item' onClick={() => { todosCtx.removeTodo(props.item.id) }}>
				<img src={iconCross} alt='remove item' />
			</div>
		</li>
	else
	//withOUT DND REOrder options
		return <li className={`todo-item ${props.item.completed ? 'todo-item--completed' : ''}`}>
			<label htmlFor={props.item.id} className='checkmark'>
				<input type="checkbox" id={props.item.id} className='checkmark__checkbox' checked={props.item.completed} onChange={handleMarkStatus} />
				<span className='checkmark__mark'></span>
			</label>
			{props.item.content}

			<div className='remove-item' onClick={() => { todosCtx.removeTodo(props.item.id) }}>
				<img src={iconCross} alt='remove item' />
			</div>
		</li>


}

export default TodoItem;