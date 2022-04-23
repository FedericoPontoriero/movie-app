/* import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
 */

import App from "next/app";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import '../styles/index.scss'
class MovieApp extends App {
	static async getInitialProps(appContext) {
		const appProps = await App.getInitialProps(appContext);
		return { ...appProps };
	}
	render() {
		const { Component, pageProps } = this.props;

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
				<div className="base-page">
					<Component {...pageProps} />
				</div>

				<Footer />
				<style jsx>{`
					.base-page {
						padding-top: 100px;
						padding-botom: 200px;
					}
				`}</style>
			</div>
		);
	}
}

export default MovieApp;
