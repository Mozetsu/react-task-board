import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Doctors appointment',
			day: 'Feb 5th at 2:30pm',
			reminder: true,
		},
		{
			id: 2,
			text: 'Meeting at School',
			day: 'Feb 12th at 2:30pm',
			reminder: false,
		},
		{
			id: 3,
			text: 'Shopping',
			day: 'Feb 15th at 2:30pm',
			reminder: false,
		},
	]);

	// Add task
	const addTask = (task) => {
		const id = tasks.length + 1;
		const newTask = { id, ...task };
		setTasks([...tasks, newTask]);
	};

	// Delete task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	// Toggle reminder
	const toggleReminder = (id) => {
		setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
	};

	return (
		<div className="container">
			<Header title="React Task Board" />
			<AddTask onAdd={addTask} />
			{tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks here...'}
		</div>
	);
}

export default App;
