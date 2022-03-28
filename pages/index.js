import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";

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

			<div className="container">
				<div className="row">
					<div className="col-lg-3">
						<SideMenu />
					</div>

					<div className="col-lg-9">
						<div
							id="carouselExampleIndicators"
							className="carousel slide my-4"
							data-ride="carousel">
							<ol className="carousel-indicators">
								<li
									data-target="#carouselExampleIndicators"
									data-slide-to="0"
									className="active"></li>
								<li
									data-target="#carouselExampleIndicators"
									data-slide-to="1"></li>
								<li
									data-target="#carouselExampleIndicators"
									data-slide-to="2"></li>
							</ol>
							<div className="carousel-inner" role="listbox">
								<div className="carousel-item active">
									<img
										className="d-block img-fluid"
										src="http://placehold.it/900x350"
										alt="First slide"
									/>
								</div>
								<div className="carousel-item">
									<img
										className="d-block img-fluid"
										src="http://placehold.it/900x350"
										alt="Second slide"
									/>
								</div>
								<div className="carousel-item">
									<img
										className="d-block img-fluid"
										src="http://placehold.it/900x350"
										alt="Third slide"
									/>
								</div>
							</div>
							<a
								className="carousel-control-prev"
								href="#carouselExampleIndicators"
								role="button"
								data-slide="prev">
								<span
									className="carousel-control-prev-icon"
									aria-hidden="true"></span>
								<span className="sr-only">Previous</span>
							</a>
							<a
								className="carousel-control-next"
								href="#carouselExampleIndicators"
								role="button"
								data-slide="next">
								<span
									className="carousel-control-next-icon"
									aria-hidden="true"></span>
								<span className="sr-only">Next</span>
							</a>
						</div>

						<div className="row">
							<div className="col-lg-4 col-md-6 mb-4">
								<div className="card h-100">
									<a href="#">
										<img
											className="card-img-top"
											src="http://placehold.it/700x400"
											alt=""
										/>
									</a>
									<div className="card-body">
										<h4 className="card-title">
											<a href="#">Item One</a>
										</h4>
										<h5>$24.99</h5>
										<p className="card-text">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Amet numquam aspernatur!
										</p>
									</div>
									<div className="card-footer">
										<small className="text-muted">
											&#9733; &#9733; &#9733; &#9733; &#9734;
										</small>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 mb-4">
								<div className="card h-100">
									<a href="#">
										<img
											className="card-img-top"
											src="http://placehold.it/700x400"
											alt=""
										/>
									</a>
									<div className="card-body">
										<h4 className="card-title">
											<a href="#">Item Two</a>
										</h4>
										<h5>$24.99</h5>
										<p className="card-text">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Amet numquam aspernatur! Lorem ipsum dolor sit amet.
										</p>
									</div>
									<div className="card-footer">
										<small className="text-muted">
											&#9733; &#9733; &#9733; &#9733; &#9734;
										</small>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 mb-4">
								<div className="card h-100">
									<a href="#">
										<img
											className="card-img-top"
											src="http://placehold.it/700x400"
											alt=""
										/>
									</a>
									<div className="card-body">
										<h4 className="card-title">
											<a href="#">Item Three</a>
										</h4>
										<h5>$24.99</h5>
										<p className="card-text">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Amet numquam aspernatur!
										</p>
									</div>
									<div className="card-footer">
										<small className="text-muted">
											&#9733; &#9733; &#9733; &#9733; &#9734;
										</small>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 mb-4">
								<div className="card h-100">
									<a href="#">
										<img
											className="card-img-top"
											src="http://placehold.it/700x400"
											alt=""
										/>
									</a>
									<div className="card-body">
										<h4 className="card-title">
											<a href="#">Item Four</a>
										</h4>
										<h5>$24.99</h5>
										<p className="card-text">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Amet numquam aspernatur!
										</p>
									</div>
									<div className="card-footer">
										<small className="text-muted">
											&#9733; &#9733; &#9733; &#9733; &#9734;
										</small>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 mb-4">
								<div className="card h-100">
									<a href="#">
										<img
											className="card-img-top"
											src="http://placehold.it/700x400"
											alt=""
										/>
									</a>
									<div className="card-body">
										<h4 className="card-title">
											<a href="#">Item Five</a>
										</h4>
										<h5>$24.99</h5>
										<p className="card-text">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Amet numquam aspernatur! Lorem ipsum dolor sit amet.
										</p>
									</div>
									<div className="card-footer">
										<small className="text-muted">
											&#9733; &#9733; &#9733; &#9733; &#9734;
										</small>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 mb-4">
								<div className="card h-100">
									<a href="#">
										<img
											className="card-img-top"
											src="http://placehold.it/700x400"
											alt=""
										/>
									</a>
									<div className="card-body">
										<h4 className="card-title">
											<a href="#">Item Six</a>
										</h4>
										<h5>$24.99</h5>
										<p className="card-text">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Amet numquam aspernatur!
										</p>
									</div>
									<div className="card-footer">
										<small className="text-muted">
											&#9733; &#9733; &#9733; &#9733; &#9734;
										</small>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<footer className="py-5 bg-dark">
				<div className="container">
					<p className="m-0 text-center text-white">
						Copyright &copy; Your Website 2019
					</p>
				</div>
			</footer>
		</div>
	);
}
