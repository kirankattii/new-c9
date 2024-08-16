import { assets } from "../../assets/asset"
import styles from "./socialMedia.module.css"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const SocialMedia2 = () => {
	const sectionRef = useRef(null)
	const triggerRef = useRef(null)
	const videoRef = useRef(null)

	gsap.registerPlugin(ScrollTrigger)

	const createAnimation = () => {
		const screenWidth = window.innerWidth
		const translateXValue = screenWidth > 768 ? "-300vw" : "-400vw"

		const pin = gsap.fromTo(
			sectionRef.current,
			{
				translateX: 0,
			},
			{
				translateX: translateXValue,
				ease: "none",
				duration: 1,
				scrollTrigger: {
					trigger: triggerRef.current,
					start: "top top",
					end: "2000 top",
					scrub: 0.6,
					pin: true,
				},
			}
		)
		return pin
	}

	useEffect(() => {
		let pin = createAnimation()

		const handleResize = () => {
			if (pin) pin.kill() // Kill the previous animation
			pin = createAnimation() // Recreate the animation based on new screen size
		}

		window.addEventListener("resize", handleResize)

		return () => {
			if (pin) pin.kill()
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	useEffect(() => {
		const handleScroll = () => {
			const videoElement = videoRef.current
			const { top } = videoElement.getBoundingClientRect()
			const windowHeight = window.innerHeight

			// Calculate the new width based on the scroll position
			let newWidth = 20 + (90 * (windowHeight - top)) / windowHeight
			newWidth = Math.min(100, Math.max(30, newWidth)) // Constrain between 30% and 100%

			videoElement.style.width = `${newWidth}%`
		}

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	const container = useRef(null)

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	})
	return (
		<div className={styles.Allcontainer}>
			<div className={styles.header}>
				<img
					src={assets.socialMedia_img}
					alt=""
				/>
				<p>
					In today's digital age, where consumer choices are shaped by online
					interactions, effective digital marketing is essential. At C9 Ads, we
					understand that success requires more than just an online presence—it
					demands a proactive strategy to capitalize on digital opportunities. A
					strong online presence is now a business necessity, as every digital
					touchpoint, from your website to social media, is crucial for growth.
					As a leading digital marketing agency in Perth, we offer comprehensive
					services starting with a thorough analysis of your online presence,
					followed by customized strategies to enhance visibility and amplify
					your brand. Our focus on genuine engagement and strategic promotions
					ensures your brand stands out, highlighting your unique selling points
					to resonate in a crowded marketplace.
				</p>
			</div>
			<div className={styles.horizontalmotion}>
				<section className={styles.scrollsectionouter}>
					<div ref={triggerRef}>
						<div
							ref={sectionRef}
							className={styles.scrollsectioninner}
						>
							<div className={styles.scrollsection}>
								<img
									className={styles.marketingGif}
									ref={videoRef}
									src={assets.socialMediaGif}
									alt=""
								/>
							</div>
							<div className={styles.scrollsection}>
								<video
									width="330"
									height="360"
									controls
								>
									<source
										src={assets.socialMedia_v6}
										type="video/mp4"
									/>
								</video>
								<h3>Social Advertising</h3>
								<p>
									Using platforms like Facebook, Instagram, and LinkedIn, we
									strategically position your brand to maximize reach and
									engagement.
								</p>
							</div>
							<div className={styles.scrollsection}>
								<video
									width="330"
									height="360"
									controls
								>
									<source
										src={assets.socialMedia_v5}
										type="video/mp4"
									/>
								</video>
								<h3>Content Marketing</h3>
								<p>
									We create and distribute valuable content—from blogs to
									videos—to attract and retain your target audience, driving
									profitable actions.
								</p>
							</div>
							<div className={styles.scrollsection2}>
								<div className={styles.videoContent}>
									<video
										width="330"
										height="360"
										controls
									>
										<source
											src={assets.socialMedia_v3}
											type="video/mp4"
										/>
									</video>
									<h3>Your Dedicated Digital Partner</h3>
									<p>
										Whether you're a startup or an established business, C9 Ads
										is your dedicated digital marketing partner, allowing you to
										focus on running your business.
									</p>
								</div>
								{/* <hr /> */}

								<div className={styles.digitalMarketing}>
									<h1>Our Digital Marketing Process</h1>
									<div className={styles.degitalMarketingProcesses}>
										<div>
											<h3>Strategic Branding and Positioning:</h3>
											<p>
												We define a compelling brand identity and strategy based
												on deep industry and competitor analysis for maximum
												impact.
											</p>
										</div>
										<div>
											<h3>Website Optimization and Content Marketing:</h3>
											<p>
												We enhance your website’s design, functionality, and
												SEO, and create engaging content to establish your
												thought leadership.
											</p>
										</div>
										<div>
											<h3>
												Targeted Social Media Campaigns and Digital Advertising:
											</h3>
											<p>
												We execute targeted social media and digital advertising
												campaigns to broaden your reach and engage potential
												customers.
											</p>
										</div>
									</div>
								</div>
							</div>
							{/* <div className={styles.digitalMarketing2}>
								<h1>Our Digital Marketing Process</h1>
								<div className={styles.degitalMarketingProcesses2}>
									<div>
										<h3>Strategic Branding and Positioning:</h3>
										<p>
											We define a compelling brand identity and strategy based
											on deep industry and competitor analysis for maximum
											impact.
										</p>
									</div>
									<div>
										<h3>Website Optimization and Content Marketing:</h3>
										<p>
											We enhance your website’s design, functionality, and SEO,
											and create engaging content to establish your thought
											leadership.
										</p>
									</div>
									<div>
										<h3>
											Targeted Social Media Campaigns and Digital Advertising:
										</h3>
										<p>
											We execute targeted social media and digital advertising
											campaigns to broaden your reach and engage potential
											customers.
										</p>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</section>
			</div>
			<div>
				{" "}
				<div className="socialMedia-connect">
					<div>
						<h1>Connect With C9 Ads Today</h1>
						<p>
							Ready to transform your digital marketing strategy and see
							tangible results? Connect with C9 Ads today.  Let’s discuss how we
							can elevate your online presence and turn digital channels into
							pathways of growth for your business.
						</p>
					</div>
					<form>
						<label htmlFor="">Company Name</label>
						<input type="text" />
						<label htmlFor="">Email</label>
						<input type="text" />
						<label htmlFor="">Phone</label>
						<input type="text" />
						<label htmlFor="">Message</label>
						<textarea
							name=""
							id=""
							rows={4}
						/>
						<button>Send Message</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default SocialMedia2
