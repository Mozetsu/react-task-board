import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

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

	// Delete task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	// Toggle reminder
	const toggleReminder = (id) => {
		console.log(id);
	};

	return (
		<div className="container">
			<Header title="React Task Board" />
			{tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks here...'}
		</div>
	);
}

export default App;
