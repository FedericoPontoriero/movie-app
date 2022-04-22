import React, { useState, useEffect } from "react";

import SideMenu from "../components/SideMenu";
import Carousel from "../components/Carousel";
import MovieList from "../components/MovieList";
import { getMovies, getCategories } from "../actions/index";

export default function Home(props) {
	const { images, categories, movies } = props;
	const [filter, setFilter] = useState('')

	
	const changeCategory = (category) => { 
		setFilter(category)
	 }

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
							<SideMenu changeCategory={changeCategory} activeCategory={filter} appName={"Movie DB"} categories={categories} />
						</div>

						<div className="col-lg-9">
							<Carousel images={images} />
							<h1>Displaying {filter} movies</h1>

							<div className="row">
								<MovieList movies={movies || []} />
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
	const categories = await getCategories();
	const images = movies.map((movie) => {
		return {
			id: `image-${movie.id}`,
			url: movie.image,
			name: movie.name,
		};
	});
	return {
		movies,
		images,
		categories,
	};
};
