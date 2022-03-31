import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import Carousel from "../components/Carousel";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

const MOVIE_DATA = [
	{
		id: "1",
		name: "The Shawshank Redemption",
		releaseYear: 1994,
		description:
			"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
		rating: 4.8,
		genre: "drama",
		image:
			"https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg",
	},
	{
		id: "2",
		name: "The Dark Knight",
		releaseYear: 2008,
		description:
			"When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
		rating: 4.7,
		genre: "action, crime, drama",
		image:
			"https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600",
	},
	{
		id: "3",
		name: "Lord of the Rings",
		releaseYear: 2004,
		description:
			"A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
		rating: 4.9,
		genre: "adventure, drama, fantasy",
		image:
			"https://img.cinemablend.com/filter:scale/quill/0/f/5/2/a/6/0f52a6843a25c1a5c1f9a0c00548cad9e1d912e2.jpg?mw=600",
	},
];

export default function Home() {
	return (
		<div>
			<Head>
				<title>Home</title>
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
					crossOrigin="anonymous"></link>
				<script
					src="https://code.jquery.com/jquery-3.6.0.slim.min.js"
					integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI="
					crossOrigin="anonymous"></script>
				<script
					src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.11.4/umd/popper.min.js"
					integrity="sha512-+Tn2V/oN9O/kiaJg/1o5bETqyS35pMDJzkhkf8uvCzxmRox69AsWkSpBSMEGEe4EZp07Nunw712J3Xvh5Tti0w=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"></script>
			</Head>

			<Navbar />
			<div className="home-page">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<SideMenu appName={"Movie DB"} />
						</div>

						<div className="col-lg-9">
							<Carousel />

							<div className="row">
								<MovieList movies={MOVIE_DATA} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
			<style jsx>{`
				.home-page {
					padding-top: 80px;
				}
			`}</style>
		</div>
	);
}
