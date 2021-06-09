import React, { useContext } from 'react';
import { View } from '../../../models/view';
import { TodoContext } from '../../../store/todo-context';
import TodoItem from '../TodoItem/TodoItem';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import Todo from '../../../models/todo';

const TodoList = () => {

	const todosCtx = useContext(TodoContext);

	//REORDER LIST
	const reorder = (list: Todo[], startIndex: number, endIndex: number) => {
		const result = Array.from(list);
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);

		return result;
	};

	const onDragEnd = (result: DropResult) => {
		// dropped outside the list
		if (!result.destination) {
			return;
		}

		const items = reorder(
			todosCtx.todos,
			result.source.index,
			result.destination.index
		);

		todosCtx.setReorderedList(items);
	}

	//CONDITIONAL RENDERING OF LIST
	let listItems: any;

	if (todosCtx.view === View.Completed) {
		listItems = todosCtx.todos.map((element, index) => element.completed && <Draggable key={element.id} draggableId={element.id} index={index}>
			{(provided, _) => (
				<TodoItem item={element} key={element.id} provided={provided} />
			)}
		</Draggable>);
	}
	else if (todosCtx.view === View.Active) {
		listItems = todosCtx.todos.map((element, index) => !element.completed && <Draggable key={element.id} draggableId={element.id} index={index}>
			{(provided, _) => (
				<TodoItem item={element} key={element.id} provided={provided} />
			)}
		</Draggable>);
	}
	else
		listItems = todosCtx.todos.map((element, index) => (
			<Draggable key={element.id} draggableId={element.id} index={index}>
				{(provided, _) => (
					<TodoItem item={element} key={element.id} provided={provided} />
				)}
			</Draggable>
		));

	
	
	return <DragDropContext onDragEnd={onDragEnd}>
		<Droppable droppableId='droppable-1'>
			{(provided, _) => (
				<ul className='todo-list' ref={provided.innerRef} {...provided.droppableProps}>
					{listItems}
					{provided.placeholder}
				</ul>
			)}
		</Droppable>
	</DragDropContext>
}

export default TodoList;