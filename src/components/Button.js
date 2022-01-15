const Button = ({ text, onAdd, showAdd }) => {
	return (
		<button onClick={onAdd} className={`button is-medium ${showAdd ? 'is-danger is-light' : 'is-primary'}`}>
			{text}
		</button>
	);
};

export default Button;
