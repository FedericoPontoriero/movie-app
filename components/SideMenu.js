import Modal from "./Modal";

const SideMenu = (props) => {
	const { categories } = props;
	return (
		<div>
			<Modal />
			<h1 className="my-4">{props.appName}</h1>
			<div className="list-group">
				{categories.map((c) => (
					<a key={c.id} href="#" className="list-group-item">
						{c.name}
					</a>
				))}
				<a href="#" className="list-group-item">
					Category 1
				</a>
				<a href="#" className="list-group-item">
					Category 2
				</a>
				<a href="#" className="list-group-item">
					Category 3
				</a>
			</div>
		</div>
	);
};

export default SideMenu;
