const Button = ({ color, text, onClick }) => {
	return (
		<button onClick={onClick} className="btn">
			{text}
		</button>
	);
};

export default Button;
