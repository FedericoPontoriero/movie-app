import { useRouter } from "next/router";
import { getMovieById } from "../../actions";

const Movie = () => {
	const router = useRouter();
	const { id } = router.query;
	const { movie } = props;
	return (
		<div className="container">
			<div className="jumbotron">
				<h1 className="diplay-4">{movie.name}</h1>
				<p className="lead"></p>
				<hr className="my-4" />
				<p></p>
				<a className="btn btn-primary btn-lg" role={button}>
					Learn more
				</a>
			</div>
			<p>description</p>
		</div>
	);
};

Movie.getInitialProps = async () => {
	const movie = await getMovieById("2");

	return { movie };
};

export default Movie;
