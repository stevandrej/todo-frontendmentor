import Todo from "../models/todo";

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const MARK_COMPLETED = 'MARK_COMPLETED';
export const MARK_INCOMPLETED = 'MARK_INCOMPLETED';
export const CLEAR_ALL_COMPLETED = 'CLEAR_ALL_COMPLETED';
export const SET_REORDERED_LIST = 'SET_REORDERED_LIST';

const todoReducer = (state: Todo[], action: { type: string; payload?: any }) => {
	switch (action.type) {
		case ADD_TODO:
			return state.concat(action.payload);

		case REMOVE_TODO:
			return state.filter(item => item.id !== action.payload)

		case MARK_COMPLETED:
			return state.map(item => {
				if (item.id === action.payload) {
					item.completed = true;
				}
				return item;
			});

		case MARK_INCOMPLETED:
			return state.map(item => {
				if (item.id === action.payload) {
					item.completed = false;
				}
				return item;
			});

		case CLEAR_ALL_COMPLETED:
			return state.filter(item => item.completed === false);

		case SET_REORDERED_LIST:
			return action.payload;

		default:
			return state;
	}
}

export default todoReducer;