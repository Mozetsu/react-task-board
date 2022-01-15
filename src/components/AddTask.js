import { useState } from 'react';

const AddTask = ({ onAdd }) => {
	const [text, setText] = useState('');
	const [day, setDay] = useState('');
	const [reminder, setReminder] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();

		if (!text) {
			return alert('Task name required!');
		}

		onAdd({ text, day, reminder });

		setText('');
		setDay('');
		setReminder(false);
	};

	return (
		<form className="mb-6" onSubmit={onSubmit}>
			<div className="field">
				<label className="label">Task</label>
				<div className="control">
					<input
						className="input"
						type="text"
						placeholder="Task title..."
						value={text}
						onChange={(e) => setText(e.target.value)}
					></input>
				</div>
			</div>
			<div className="field">
				<label className="label">Day and Time</label>
				<div className="control">
					<input
						className="input"
						type="text"
						placeholder="Day..."
						value={day}
						onChange={(e) => setDay(e.target.value)}
					></input>
				</div>
			</div>
			<div className="field ">
				<label className="label">Set reminder</label>
				<input
					className="p-2 is-large"
					type="checkbox"
					checked={reminder}
					value={reminder}
					onChange={(e) => setReminder(e.currentTarget.checked)}
				></input>
			</div>
			<input className="button is-medium is-primary  is-fullwidth" type="submit" value="Save"></input>
		</form>
	);
};

export default AddTask;
