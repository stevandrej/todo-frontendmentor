import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import TodoContextProvider from './store/todo-context';

ReactDOM.render(
	<React.StrictMode>
		<TodoContextProvider>
			<App />
		</TodoContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
