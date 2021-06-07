import React, { useContext } from 'react';
import './App.scss';
import Todo from './components/Todo/Todo';
import { TodoContext } from './store/todo-context';
import './styles/themes/dark.css';
import './styles/themes/light.css';
import bgDark from './images/bg-desktop-dark.jpg';
import bgLight from './images/bg-desktop-light.jpg';

function App() {

	const { theme } = useContext(TodoContext);

	return (
		<div className={`${theme} App`}>
			<div className='bg-image' style={
				{
					backgroundImage: theme === 'dark' ? `url('${bgDark}')` : `url('${bgLight}')`
				}
			}>
			</div>
			<div className="container">
				<Todo />
			</div>
		</div >
	);
}

export default App;