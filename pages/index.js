import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import Carousel from "../components/Carousel";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

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
								<MovieList />
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
