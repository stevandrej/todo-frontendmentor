import { v4 as uuidv4 } from 'uuid';

class Todo {
	id: string;
	content: string;
	completed: boolean;

	constructor(content: string, markedComplete: boolean) {
		this.id = uuidv4();
		this.content = content;
		this.completed = markedComplete;
	}
}

export default Todo;