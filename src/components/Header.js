import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
	return (
		<>
			<div className="level">
				<div className="level-left">
					<h3 className="title is-3">{title}</h3>
				</div>
				<div className="level-right">
					<Button
						showAdd={showAdd}
						className="level-right"
						onAdd={onAdd}
						showAdd={showAdd}
						text={showAdd ? 'Close' : 'New task'}
					/>
				</div>
			</div>
		</>
	);
};

export default Header;
