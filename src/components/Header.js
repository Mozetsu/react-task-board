import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
	return (
		<header className="header">
			<h1>{title}</h1>
			<Button onClick={onAdd} text={showAdd ? 'Cancel' : 'Add'} />
		</header>
	);
};

export default Header;
