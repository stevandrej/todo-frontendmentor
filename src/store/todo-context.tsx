import React, { createContext, useReducer, useState } from 'react';
import Todo from '../models/todo';
import { View } from '../models/view';
import todoReducer, { ADD_TODO, CLEAR_ALL_COMPLETED, MARK_COMPLETED, MARK_INCOMPLETED, REMOVE_TODO, SET_REORDERED_LIST } from './TodoReducer';

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
	setReorderedList: (reorderedList: Todo[]) => void;
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
	countUncompleted: () => { return 0 },
	setReorderedList: () => {}
});

const TodoContextProvider: React.FC = (props) => {

	const dummyItems = [new Todo('Complete online JavaScript course', true), 
	new Todo('Joh around the park 3x', false),
	new Todo('10 minutes meditation', false),
	new Todo('Read for 1 hour', false),
	new Todo('Pick up groceries', false),
	new Todo('Complete Todo App on Frontend Mentor', false)
];

	const [theme, setTheme] = useState('dark');
	const [view, setView] = useState(View.All);
	const [todos, dispatch] = useReducer(todoReducer, dummyItems);

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

	const setReorderedList = (reorderedList: Todo[]) => {
		dispatch({ type: SET_REORDERED_LIST, payload: reorderedList })
	}

	const countUncompleted = () => {
		let counter = 0;
		todos.forEach((item: { completed: boolean; }) => {
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
		countUncompleted: countUncompleted,
		setReorderedList: setReorderedList
	}

	return <TodoContext.Provider value={contextValue}>
		{props.children}
	</TodoContext.Provider>
}

export default TodoContextProvider;