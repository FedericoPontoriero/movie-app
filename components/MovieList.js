import React from "react";
import Link from "next/link";
const MovieList = (props) => {
	const movies = props.movies;
	shorten = (text, maxLength) => {
		if (text && text.length >= maxLength) {
			return text.substr(0, maxLength) + "...";
		}
		return text;
	};
	return (
		<React.Fragment>
			{movies.map((movie) => (
				<div key={movie.id} className="col-lg-4 col-md-6 mb-4">
					<div className="card h-100">
						<Link href={`/movies/${movie.id}`}>
							<a>
								<img className="card-ilmg-top" src={movie.image} alt="" />
							</a>
						</Link>
						<div className="card-body">
							<h4 className="card-title">
								<Link href={`/movies/${movie.id}`}>
									<a>{movie.name}</a>
								</Link>
							</h4>
							<h5>$24.99</h5>
							<p className="card-text">{shorten(movie.description, 100)}</p>
						</div>
						<div className="card-footer">
							<small className="text-muted">{movie.rating}</small>
						</div>
					</div>
				</div>
			))}
		</React.Fragment>
	);
};

export default MovieList;
