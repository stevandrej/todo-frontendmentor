class Todo {
	id: string;
	content: string;
	completed: boolean;

	constructor(content: string) {
		this.id = new Date().toISOString();
		this.content = content;
		this.completed = false;
	}
}

export default Todo;