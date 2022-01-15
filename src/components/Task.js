const Task = ({ task, onToggle, onDelete }) => {
	return (
		<div
			className={`message is-clickable is-light ${task.reminder ? 'is-primary' : ''}`}
			onDoubleClick={() => onToggle(task.id)}
		>
			<div className="message-body">
				<div className="level">
					<div className="level-left">
						<div>
							<h3 className="title is-4">{task.text}</h3>
							<p className="subtitle">{task.day}</p>
						</div>
					</div>
					<div className="level-right">
						<button onClick={() => onDelete(task.id)} className="delete p-3"></button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Task;
