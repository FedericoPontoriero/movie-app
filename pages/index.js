import React, { useState, useEffect } from "react";

import SideMenu from "../components/SideMenu";
import Carousel from "../components/Carousel";
import MovieList from "../components/MovieList";
import { getMovies } from "../actions/index";

export default function Home(props) {
	// Client Side fetching
	/* const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const resMovies = await getMovies();
			setMovies(resMovies);
		};
		fetchData();
	}, []); */
	return (
		<div>
			<div className="home-page">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<SideMenu appName={"Movie DB"} />
						</div>

						<div className="col-lg-9">
							<Carousel />

							<div className="row">
								<MovieList movies={props.movies || []} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

Home.getInitialProps = async () => {
	const movies = await getMovies();
	return {
		movies,
	};
};
