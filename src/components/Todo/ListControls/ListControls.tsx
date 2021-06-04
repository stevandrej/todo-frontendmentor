import React, { useContext } from 'react';
import { TodoContext } from '../../../store/todo-context';

const ListControls: React.FC = () => {
	const todosCtx = useContext(TodoContext);

	const getItemsLeft = () => {
		const itemsLeft = todosCtx.countUncompleted();

		switch (itemsLeft) {
			case 0:
				return 'All completed'
			case 1:
				return `${itemsLeft} item left`;
			default:
				return `${itemsLeft} items left`;
		}
	}

	return (
		<div className='todo-controls'>
			<div className='controls-section items-left'>{getItemsLeft()}</div>
			<div className='controls-section view-mode'>
				<ul>
					<li>All</li>
					<li>Active</li>
					<li>Completed</li>
				</ul>
			</div>
			<div className='controls-section clear-completed'>
				<button onClick={todosCtx.clearAllCompleted}>Clear Completed</button>
			</div>
		</div>
	)

}

export default ListControls;