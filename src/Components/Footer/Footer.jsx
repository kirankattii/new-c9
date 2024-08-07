import React from "react"
import "./footer.css"
import { assets, questionnarie, quickLinks, work } from "../../assets/asset"
import { Link } from "react-router-dom"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="left-footer">
					<h2>How can we be of assistance to you?</h2>
					<ul>
						<li>
							<img
								src={assets.tele_logo}
								alt=""
							/>
							<p>+61 456469643</p>
						</li>{" "}
						<li>
							<img
								src={assets.tele_logo}
								alt=""
							/>
							<p>+44 (0)7425819099</p>
						</li>
						<li>
							<img
								src={assets.email_logo}
								alt=""
							/>
							<p>business@c9ads.au</p>
						</li>
					</ul>
				</div>
				<div className="right-footer">
					<div>
						<h2>Quick Links</h2>
						<ul>
							{quickLinks.map((item) => (
								<div key={item.name}>
									<MdOutlineKeyboardArrowLeft className="footer-rightIcon" />

									<li key={item.id}>
										<Link to={item.link}>{item.name}</Link>
									</li>
								</div>
							))}
						</ul>
					</div>
					<div>
						<h2>Work</h2>
						<ul>
							{work.map((item) => (
								<div key={item.name}>
									<MdOutlineKeyboardArrowLeft className="footer-rightIcon" />
									<li key={item.id}>
										<Link to={item.link}>{item.name}</Link>
									</li>
								</div>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className="copyright">
				<p>COPYRIGHT © 2024 C9ADS, All Rights Reserved.</p>
				{/* <p>
					Designed & Developed by{" "}
					<Link to="https://www.pitamaas.com/">PITAMAAS</Link>
				</p> */}
			</div>
		</div>
	)
}

export default Footer
