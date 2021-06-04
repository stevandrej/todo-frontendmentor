import { count } from 'console';
import React, { createContext, useReducer } from 'react';
import Todo from '../models/todo';
import reducer, { ADD_TODO, CLEAR_ALL_COMPLETED, MARK_COMPLETED, MARK_INCOMPLETED, REMOVE_TODO } from './TodoReducer';

enum View {
	All,
	Active,
	Completed
}

interface TodoContextObj {
	todos: Todo[];
	addTodo: (todoContent: string, markedComplete: boolean) => void;
	removeTodo: (id: string) => void;
	markCompleted: (id: string) => void;
	markIncompleted: (id: string) => void;
	clearAllCompleted: () => void;
	countUncompleted: () => number;
}

export const TodoContext = createContext<TodoContextObj>({
	todos: [],
	addTodo: () => { },
	removeTodo: () => { },
	markCompleted: () => { },
	markIncompleted: () => { },
	clearAllCompleted: () => { },
	countUncompleted: () => { return 0 }
});

const TodoContextProvider: React.FC = (props) => {
	const [todos, dispatch] = useReducer(reducer, []);

	const addTodoHandler = (todoContent: string, markedComplete: boolean) => {
		const newTodo = new Todo(todoContent, markedComplete);
		dispatch({ type: ADD_TODO, payload: newTodo });
	}

	const removeTodoHandler = (id: string) => {
		dispatch({ type: REMOVE_TODO, payload: id });
	}

	const markCompletedHandler = (id: string) => {
		dispatch({ type: MARK_COMPLETED, payload: id })
	}

	const markIncompletedHandler = (id: string) => {
		dispatch({ type: MARK_INCOMPLETED, payload: id })
	}

	const clearAllCompletedHandler = () => {
		dispatch({ type: CLEAR_ALL_COMPLETED })
	}

	const countUncompleted = () => {
		let counter = 0;
		todos.forEach(item => {
			if (item.completed === false)
				counter++;
		});

		return counter;
	}

	const contextValue: TodoContextObj = {
		todos: todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler,
		markCompleted: markCompletedHandler,
		markIncompleted: markIncompletedHandler,
		clearAllCompleted: clearAllCompletedHandler,
		countUncompleted: countUncompleted
	}

	return <TodoContext.Provider value={contextValue}>
		{props.children}
	</TodoContext.Provider>
}

export default TodoContextProvider;