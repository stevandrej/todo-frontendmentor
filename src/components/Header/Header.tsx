import React, { useContext } from 'react';
import './header.scss';
import moon from '../../images/icon-moon.svg';
import sun from '../../images/icon-sun.svg';
import { TodoContext } from '../../store/todo-context';

const Header: React.FC = () => {
	const { theme, toggleTheme } = useContext(TodoContext);

	let icon = sun;

	if (theme === 'dark') {
		icon = sun;
	}
	else if (theme === 'light') {
		icon = moon
	}

	return (
		<header className='header-area'>
			<h1 className='title'>TODO</h1>
			<div className='theme'>
				<button className='theme__button' onClick={() => { toggleTheme() }} ><img src={icon} alt='theme icon' /></button>
			</div>
		</header>
	);
}

export default Header;
