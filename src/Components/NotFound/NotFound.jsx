import React from "react"
import "./notFound.css"
import { useNavigate } from "react-router-dom"
import img404 from "../../assets/404img.svg"
const NotFound = () => {
	const navigate = useNavigate()
	return (
		// <div className="not-found-container">
		// 	<h1 className="not-found-code">404</h1>
		// 	<p className="not-found-message">
		// 		We are sorry, but the page you requested was not found
		// 	</p>
		// 	<div className="not-found-buttons">
		// 		<button
		// 			className="home-button"
		// 			onClick={() => navigate("/")}
		// 		>
		// 			Go Home
		// 		</button>
		// 		<button
		// 			className="contact-button"
		// 			onClick={() => navigate("/contact")}
		// 		>
		// 			Contact Us
		// 		</button>
		// 	</div>
		// 	<div className="social-icons">
		// 		<a href="#">
		// 			<i className="fab fa-facebook-f"></i>
		// 		</a>
		// 		<a href="#">
		// 			<i className="fab fa-twitter"></i>
		// 		</a>
		// 		<a href="#">
		// 			<i className="fab fa-pinterest-p"></i>
		// 		</a>
		// 		<a href="#">
		// 			<i className="fab fa-google-plus-g"></i>
		// 		</a>
		// 	</div>
		// </div>
		<div className="error-page">
			<div className="error-content">
				<img
					src={img404}
					alt="404 Illustration"
					className="error-image"
				/>
				<h1>Error 404: Page Not Found</h1>
				<p>
					Well, this is awkward. It looks like the page you were trying to find
					has gone on vacation. How about heading back to the Home Page and
					starting your journey from there?
				</p>
				<button
					className="home-button"
					onClick={() => (window.location.href = "/")}
				>
					Take Me To Home Page
				</button>
			</div>
		</div>
	)
}

export default NotFound
