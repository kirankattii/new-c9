import React from "react"
import styles from "./webProcess.module.css"
import { assets } from "../../../assets/asset"

const WebProcess = () => {
	const steps = [
		{
			title: "Discovery and Planning",
			description:
				"We begin by thoroughly understanding your business, goals, and target audience. This allows us to create a detailed project plan and timeline that align with your objectives.",
		},
		{
			title: "Design and Prototyping",
			description:
				"Our designers develop wireframes and prototypes to visualize the layout and functionality of your website. We refine these designs based on your feedback to ensure they meet your vision.",
		},
		{
			title: "Development",
			description:
				"Our developers bring the designs to life using the latest coding standards and technologies, ensuring your website is fast, responsive, and SEO-friendly.",
		},
		{
			title: "Testing",
			description:
				"We conduct rigorous testing across various browsers and devices to ensure flawless performance. We address any bugs or usability issues to ensure a seamless user experience.",
		},
		{
			title: "Launch and Optimization",
			description:
				"Upon completion, we deploy your website to the live server and monitor its performance. We continue to make optimizations to ensure the best possible user experience.",
		},
		{
			title: "Ongoing Support",
			description:
				"Our commitment to your success extends beyond the launch. We provide ongoing support and maintenance to keep your website secure, up-to-date, and performing optimally.",
		},
	]

	return (
		<div className={styles.container}>
			<div className={styles.webProcess}>
				<div className={styles.topWebprocess}>
					<h1>
						WEB DEVELOPMENT <br /> PROCESS
					</h1>
					<div>
						<img
							src={assets.c9logo}
							alt=""
						/>
						<p>
							Design <br />
							Agency
						</p>
					</div>
				</div>
				<div className={styles.bottomWebprocess}>
					<div className={styles.allList}>
						<div className={styles.process}>
							<div className={styles.list}>
								<h2>Discovery and Planning</h2>
								<div>
									<hr />
									<span>.</span>
								</div>
								<p>
									We begin by thoroughly understanding your business, goals, and
									target audience. This allows us to create a detailed project
									plan and timeline that align with your objectives.
								</p>
							</div>
							<hr className={styles.outerhr} />
							<div className={styles.list}>
								<h2>Design and Prototyping</h2>
								<div>
									<hr />
									<span>.</span>
								</div>
								<p>
									Our designers develop wireframes and prototypes to visualize
									the layout and functionality of your website. We refine these
									designs based on your feedback to ensure they meet your
									vision.{" "}
								</p>
							</div>
							<hr className={styles.outerhr} />

							<div className={styles.list}>
								<h2>Development</h2>
								<div>
									<hr />
									<span>.</span>
								</div>
								<p>
									Our developers bring the designs to life using the latest
									coding standards and technologies, ensuring your website is
									fast, responsive, and SEO-friendly.
								</p>
							</div>
						</div>
						<div className={styles.process}>
							<div className={styles.list}>
								<h2>Testing</h2>
								<div>
									<hr />
									<span>.</span>
								</div>
								<p>
									"We conduct rigorous testing across various browsers and
									devices to ensure flawless performance. We address any bugs or
									usability issues to ensure a seamless user experience.",
								</p>
							</div>
							<hr className={styles.outerhr} />
							<div className={styles.list}>
								<h2>Launch and Optimization</h2>
								<div>
									<hr />
									<span>.</span>
								</div>
								<p>
									Upon completion, we deploy your website to the live server and
									monitor its performance. We continue to make optimizations to
									ensure the best possible user experience.
								</p>
							</div>
							<hr className={styles.outerhr} />

							<div className={styles.list}>
								<h2>Ongoing Support</h2>
								<div>
									<hr />
									<span>.</span>
								</div>
								<p>
									Our commitment to your success extends beyond the launch. We
									provide ongoing support and maintenance to keep your website
									secure, up-to-date, and performing optimally.
								</p>
							</div>
						</div>
					</div>
					<img
						src={assets.webAiImg}
						alt=""
					/>
				</div>
			</div>
			<div className={styles.service}>
				<h1>Our Comprehensive Web Development Services</h1>
				<div className={styles.serviceContent}>
					<p>
						<span>Web Application Development</span> <br />
						Optimize your business operations and boost user engagement with our
						custom web applications. We develop powerful, bespoke web
						applications tailored to meet your specific business needs.
					</p>
					<p>
						<span>Search Engine Optimization (SEO)</span> <br />A visually
						appealing website is only as good as its visibility. Our web
						development integrates SEO best practices, ensuring your site ranks
						highly on search engines and attracts valuable organic traffic.
					</p>
					<p>
						<span>Website Maintenance and Support</span> <br />
						Ensure your website remains functional and secure with our
						maintenance and support services. We offer regular updates, security
						checks, and performance optimizations to keep your site running
						smoothly.
					</p>
				</div>
			</div>
		</div>
	)
}

export default WebProcess
