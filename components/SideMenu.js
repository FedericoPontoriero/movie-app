import Modal1 from './Modal';
import MovieCreateForm from './MovieCreateForm';
import createMovie from '../actions';
const SideMenu = props => {
	const { categories } = props;
	const handleCreateMovie = movie => {
		createMovie(movie).then(movies => {
			console.log(JSON.stringify(movies));
		});
	};
	return (
		<div>
			<Modal1
				handleFormSubmit={handleCreateMovie}
				hasSubmit={false}
				buttonLabel='Create Movie'
			/>
			<h1 className='my-4'>{props.appName}</h1>
			<div className='list-group'>
				{categories.map(c => (
					<a key={c.id} href='#' className='list-group-item'>
						{c.name}
					</a>
				))}
			</div>
		</div>
	);
};

export default SideMenu;
