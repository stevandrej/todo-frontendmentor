import React, { createContext, useReducer, useState } from 'react';
import Todo from '../models/todo';
import { View } from '../models/view';
import todoReducer, { ADD_TODO, CLEAR_ALL_COMPLETED, MARK_COMPLETED, MARK_INCOMPLETED, REMOVE_TODO } from './TodoReducer';

interface TodoContextObj {
	theme: string,
	toggleTheme: () => void,
	view: View;
	setViewMode: (payload: View) => void;
	todos: Todo[];
	addTodo: (todoContent: string, markedComplete: boolean) => void;
	removeTodo: (id: string) => void;
	markCompleted: (id: string) => void;
	markIncompleted: (id: string) => void;
	clearAllCompleted: () => void;
	countUncompleted: () => number;
}

export const TodoContext = createContext<TodoContextObj>({
	theme: 'dark',
	toggleTheme: () => { },
	view: View.All,
	setViewMode: () => { },
	todos: [],
	addTodo: () => { },
	removeTodo: () => { },
	markCompleted: () => { },
	markIncompleted: () => { },
	clearAllCompleted: () => { },
	countUncompleted: () => { return 0 }
});

const TodoContextProvider: React.FC = (props) => {
	const [theme, setTheme] = useState('dark');
	const [view, setView] = useState(View.All);
	const [todos, dispatch] = useReducer(todoReducer, []);

	const toggleTheme = () => {
		if (theme === 'dark')
			setTheme('light');
		else
			setTheme('dark');
	}

	const setViewMode = (payload: View) => {
		setView(payload);
	}

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
		theme: theme,
		toggleTheme: toggleTheme,
		view: view,
		setViewMode: setViewMode,
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