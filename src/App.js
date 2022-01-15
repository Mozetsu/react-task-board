import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import NoTask from './components/NoTask';
import AddTask from './components/AddTask';

function App() {
	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Appointment One',
			day: 'Feb 21 2:30pm',
			reminder: true,
		},
		{
			id: 2,
			text: 'Appointment Two',
			day: 'Feb 29 1pm',
			reminder: true,
		},
		{
			id: 3,
			text: 'Appointment Three',
			day: 'Mar 1 9:30am',
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
		<div className="container p-6 is-max-desktop">
			<Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} title="The-Amazing-Task-Board" />
			{showAddTask && <AddTask onAdd={addTask} />}
			{tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} /> : <NoTask />}
		</div>
	);
}

export default App;
