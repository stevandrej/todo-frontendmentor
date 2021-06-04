import React from 'react';
import './App.scss';
import Todo from './components/Todo/Todo';

function App() {

	return (
		<div className="App">
			<div className='bg-image'></div>
			<div className="container">
				<Todo />
			</div>
		</div>
	);
}

export default App;