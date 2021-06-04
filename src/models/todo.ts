class Todo {
	id: string;
	content: string;
	completed: boolean;

	constructor(content: string, markedComplete: boolean) {
		this.id = new Date().toISOString();
		this.content = content;
		this.completed = markedComplete;
	}
}

export default Todo;