import { useEffect, useState } from "react"
import { assets, ourPride } from "../../assets/asset"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
import "./home.css"
import { motion } from "framer-motion"
import HomeSlides from "../HomeSlides/HomeSlides"
import ProvideCoa from "./ProvideCoa/ProvideCoa"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"
import { Helmet } from "react-helmet"
import InquiryForm from "../PopupHome/InquiryForm"
import Marquee from "react-fast-marquee"

const container = (delay) => ({
	hidden: { x: -100, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.5, delay: delay },
	},
})
// whileInView={{ opacity: 1, x: 0 }}
// 				initial={{ opacity: 0, x: -100 }}
// 				transition={{ duration: 0.5 }}

const container1 = (delay) => ({
	hidden: { x: -100, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.5, delay: delay },
	},
})
const handleClick = () => {
	window.scrollTo(0, 0)
}
const Home = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const [conterTrigger, setCounterTrigger] = useState(false)
	const [showOurPride, setShowOurPride] = useState(false)
	const handleClick = () => {
		setShowOurPride(true)
	}

	const handleMouseOver = (index) => {
		// if (activeIndex !== index) {
		setActiveIndex(index)
		// }
	}
	const [waveAnimation, setWaveAnimation] = useState(false)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setWaveAnimation(true)
		}, 1000) // Delay for the animation to start after 1 second

		return () => clearTimeout(timeout)
	}, [])

	const [isMuted, setIsMuted] = useState(true)

	const handleMouseEnter = () => {
		setIsMuted(false) // Unmute the video on mouse enter
	}

	const handleMouseLeave = () => {
		setIsMuted(true) // Mute the video again when mouse leaves
	}
	const navigate = useNavigate()

	const [firstName, setFirstname] = useState("")
	const [lastName, setLastname] = useState("")
	const [contactNo, setNumber] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		const serviceId = "service_0nyqhev"

		const templateId = "template_2m4xtov"

		const publicKey = "7d2Gee0mZ6yj99snv"

		const templateParams = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			contactNo: contactNo,
			to_name: "C9",
			message: message,
		}

		emailjs
			.send(serviceId, templateId, templateParams, publicKey)
			.then((response) => {
				console.log("Email sent successfully!", response)
				setFirstname("")
				setLastname("")
				setEmail("")
				setNumber("")
				setMessage("")
			})
		toast
			.success("Form Submitted Successfully")

			.catch((error) => {
				console.error("Error sending email:", error)
				toast.error("Error fetching data")
			})
	}

	const [isFormVisible, setIsFormVisible] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsFormVisible(true)
		}, 2500) // Show the form after 3 seconds

		return () => clearTimeout(timer) // Cleanup the timer on component unmount
	}, [])

	const handleClose = () => {
		setIsFormVisible(false)
	}

	return (
		<>
			<Helmet>
				<title>
					Full Service Digital Marketing Agency | Boost Your Online Presence
					Today!
				</title>
				<meta
					name="description"
					content="The most trusted digital marketing agency in WA. Take your business to the next level with our comprehensive digital marketing services. Contact us today to see how we can elevate your online presence!"
				/>
			</Helmet>
			<div className="homePageContainer">
				<div className="homeMarquee">
					<Marquee>marketing & design</Marquee>
				</div>{" "}
				<div className="homeMarquee2">
					<Marquee direction="right">marketing & design</Marquee>
				</div>
				<div className="home">
					<div className="home-content">
						{/* <div className={`home-text ${waveAnimation ? "wave-animation" : ""}`}> */}

						<div className="home-text">
							{/* <motion.h1
								variants={container(0)}
								initial="hidden"
								animate="visible"
								className="text-discover"
							>
								Discover
							</motion.h1>
							<motion.div
								variants={container(0.5)}
								initial="hidden"
								animate="visible"
								className="text-out-artistry"
							>
								<span>OUR</span>
								<h1>artistry</h1>
							</motion.div> */}

							<h1 className="homeText1">A CREATIVE</h1>
							<h1 className="homeText2">MARKETING & DESIGN</h1>
							<h1 className="homeText3">COMPANY</h1>
						</div>
						<motion.img
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 1.2 }}
							className="homepage-img"
							src={assets.homeImg1}
							alt=""
						/>
					</div>
					<motion.div
						variants={container(1)}
						initial="hidden"
						animate="visible"
						className="home-bottom"
					>
						<p>KNOW MORE</p>
						<div className="service-tags">
							<span>
								<Link to={"/social-media-marketing"}>
									Social Media Marketing
								</Link>
							</span>
							<hr />
							<span>
								<Link to={"/web-development"}>Web Development</Link>
							</span>
							<hr />
							<span>
								<Link to={"/seo"}>SEO</Link>
							</span>
							<hr />
							<span>
								<Link to={"/logo"}>Logo Design</Link>
							</span>
							<hr />
							<span>
								<Link to={"/packaging2"}>Packaging Design</Link>
							</span>
						</div>
					</motion.div>
				</div>
				<div className="home-ourdesign">
					<h2 className="ourdesign-bg-text1">VALUES</h2>
					<h2 className="ourdesign-bg-text2">Vision</h2>
					<h2 className="ourdesign-bg-text3">Mission</h2>
					<h2 className="ourdesign-bg-text4">GOALS</h2>
					<h2 className="ourdesign-bg-text5">TEAM</h2>
					<h2 className="ourdesign-bg-text6">Achivements</h2>
					<div className="home-orange-bg">
						<div className="home-our-design">
							<h1 className="text-our">OUR</h1>
							<h1 className="text-design">DESIGN</h1>
						</div>
						<motion.p
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: 100 }}
							transition={{ duration: 0.5 }}
						>
							Welcome to our Australian design studio, where we specialize in
							creating stunning branding solutions for businesses of all sizes.
							From logo design to product packaging, we elevate brands with
							creativity and strategic insight. Our collaborative approach
							ensures designs that
						</motion.p>
					</div>
					<div className="home-white-bg">
						<h1 className="text-odyssey">ODYSSEY</h1>
						<motion.p
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: 100 }}
							transition={{ duration: 0.5 }}
						>
							resonate with your audience and stand out in the market. Let us
							help you craft a memorable brand identity that makes a lasting
							impression. Contact us today to discuss your project and discover
							the power of great design.
						</motion.p>
					</div>
					<div className="home-ourdesign-content">
						<motion.div
							onClick={() => naviga}
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.5 }}
							className="left-ourdesign"
						>
							<div className="media-home-our-design">
								<h1 className="media-text-our">OUR</h1>
								<h1 className="media-text-design">design</h1>
							</div>
							<h1 className="media-home-our-odyssey">ODYSSEY</h1>
						</motion.div>
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: 100 }}
							transition={{ duration: 0.5 }}
							className="right-ourdesign"
						>
							<p>
								Welcome to our Australian design studio, where we specialize in
								creating stunning branding solutions for businesses of all
								sizes. From logo design to product packaging, we elevate brands
								with creativity and strategic insight. Our collaborative
								approach ensures designs that
							</p>
							<p>
								resonate with your audience and stand out in the market. Let us
								help you craft a memorable brand identity that makes a lasting
								impression. Contact us today to discuss your project and
								discover the power of great design.
							</p>
						</motion.div>
						<motion.img
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: 200 }}
							transition={{ duration: 0.8 }}
							src={assets.ourdesign}
							alt="ourdesign"
						/>
					</div>
				</div>
				<div className="video-content">
					<div className="custom-cursor">
						<video
							autoPlay
							loop
							controls
							muted={isMuted} // Set muted state based on isMuted
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<source
								src={assets.video}
								type="video/mp4"
							/>
						</video>
					</div>

					<div className="home-ourpride">
						<div className="home-ourpride-content">
							<div className="our-pride-text">
								<div className="text-ourpride">
									<motion.div
										whileInView={{ opacity: 1, x: 0 }}
										initial={{ opacity: 0, x: -100 }}
										transition={{ duration: 0.8 }}
										className="text-ourideas"
									>
										<h2>OUR</h2>
										<p>Bringing Ideas</p>
									</motion.div>
									<motion.h2
										whileInView={{ opacity: 1, x: 0 }}
										initial={{ opacity: 0, x: -100 }}
										transition={{ duration: 0.6 }}
										className="text-pride"
									>
										Pride
									</motion.h2>
								</div>
								<motion.p
									whileInView={{ opacity: 1, x: 0 }}
									initial={{ opacity: 0, x: -100 }}
									transition={{ duration: 0.8 }}
									className="text-throughdesign"
								>
									to Life Through Design
								</motion.p>
							</div>
							<div className="ourpride-lists">
								{ourPride.map((num, index) => (
									<motion.div
										onClick={() => navigate(num.link)}
										whileInView={{ opacity: 1, x: 0 }}
										initial={{ opacity: 0, x: -100 }}
										transition={{ duration: 0.8 }}
										className={`design-list ${
											activeIndex === index ? "active" : ""
										}`}
										key={index}
										whileHover={{ opacity: 0.8 }}
										onMouseOver={() => handleMouseOver(index)}
									>
										<span className="ourpride-list-no">.{num.id}</span>
										<motion.p
											// whileHover={{ duration: 0.8 }}
											whileHover={{ scale: 1.1 }}
											className="ourpride-list-name"
										>
											{num.title}
										</motion.p>
										<img
											src={assets.right_arrow}
											alt="Arrow Image"
										/>
									</motion.div>
								))}
							</div>
							<div className="our-price-para">
								<p>
									At C9, we blend creativity and technical expertise to craft
									exceptional websites that engage audiences and reflect your
									brand's identity. Our user-centric approach ensures seamless
									functionality across devices, driving conversions and
									enhancing user experiences. Whether you need a sleek showcase
									or a robust e-commerce platform, partner with us to create
									captivating online experiences that inspire.
								</p>
							</div>
							<div className="explore-new-forntier-btn">
								<div className="explore-new-forntier-btn-border">
									<button onClick={() => handleClick()}>
										<Link to={"/services"}>Explore New Frontiers</Link>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="home-whatsets">
					<ScrollTrigger
						onEnter={() => setCounterTrigger(true)}
						onExit={() => setCounterTrigger(false)}
					>
						{/* <div className="whatsets-bg-text"> */}
						<h2 className="whatsets-bg-text1">Data-driven</h2>
						<h2 className="whatsets-bg-text2">Results-oriented</h2>
						<h2 className="whatsets-bg-text3">Innovation</h2>
						<h2 className="whatsets-bg-text4">Creativity</h2>
						<h2 className="whatsets-bg-text5">Customization</h2>
						{/* </div> */}
						<div className="home-whatsets-container">
							<div className="left-whatsets">
								{/* <div></div> */}
								<motion.div
									whileInView={{ opacity: 1, x: 0 }}
									initial={{ opacity: 0, x: -100 }}
									transition={{ duration: 1 }}
									className="text-whatsets"
								>
									<h2 className="text-whatsets-whatsets">WHAT SETS</h2>
									<div>
										<h2 className="text-whatsets-us">US</h2>
										<h2 className="text-apart">APART</h2>
									</div>
								</motion.div>
								<motion.p
									whileInView={{ opacity: 1, y: 0 }}
									initial={{ opacity: 0, y: -100 }}
									transition={{ duration: 1 }}
									className="question-mark-small"
								>
									?
								</motion.p>
							</div>
							<div className="right-whatsets">
								<p className="question-mark">?</p>

								<motion.div
									whileInView={{ opacity: 1, x: 0 }}
									initial={{ opacity: 0, x: 100 }}
									transition={{ duration: 1 }}
									className="whatsets-orangebg"
								>
									<div className="whatsets-milestone">
										<div>
											<span>
												{conterTrigger && (
													<CountUp
														start={0}
														end={295}
														duration={2.75}
													></CountUp>
												)}
												+
											</span>
											<p>Project Completed</p>
										</div>
										<div>
											<span>
												{conterTrigger && (
													<CountUp
														start={0}
														end={55}
														duration={2.75}
													></CountUp>
												)}
												+
											</span>
											<p>Award Winning Campaigns</p>
										</div>
										<div>
											<span>
												{conterTrigger && (
													<CountUp
														start={0}
														end={80}
														duration={2.75}
													></CountUp>
												)}
												+
											</span>
											<p>Long Term Partnerships</p>
										</div>
									</div>
									<p className="awards-description">
										Our comprehensive services enable the seamless creation of
										digital products while offering objective problem-solving
										through strategic planning, advanced technology integration,
										and rigorous analysis. Moreover, our offerings are visually
										captivating, characterized by elegant color schemes and
										minimalist design principles, enhancing their overall appeal
										and user experience.
									</p>
								</motion.div>
							</div>
						</div>
					</ScrollTrigger>
				</div>
				<div className="home-procideCoa">
					<ProvideCoa />
				</div>
				<div className="home-digitalbrand">
					<div className="home-digitalbrand-content">
						<motion.div
							whileInView={{ opacity: 1, y: 0 }}
							initial={{ opacity: 0, y: -100 }}
							transition={{ duration: 0.8 }}
							className="home-digitalbrand-heading"
						>
							<h1>Catapult your brand to digital stardom</h1>
							<p>with our game-changing marketing wizardry</p>
						</motion.div>
						<div className="home-features">
							<div className="top-home-features">
								<motion.div
									whileInView={{ opacity: 1, x: 0 }}
									initial={{ opacity: 0, x: 100 }}
									transition={{ duration: 1 }}
									className="home-feature1"
								>
									<img
										src={assets.homefeatures1}
										alt="Features"
									/>
									<div>
										<h3>Maximizing Social Media ROI for Small Businesses</h3>
										<p>
											In this blog post, discuss how small businesses can
											leverage social media platforms effectively to maximize
											their return on investment (ROI). Include tips on
											identifying the right social media
											channels....................
										</p>
									</div>
								</motion.div>
								<motion.div
									whileInView={{ opacity: 1, x: 0 }}
									initial={{ opacity: 0, x: -100 }}
									transition={{ duration: 1 }}
									className="home-feature1 home-feature3"
								>
									<img
										src={assets.homefeatures2}
										alt="Features"
									/>
									<div>
										<h3>
											SEO Strategies That Work in a Voice Search Dominated Era
										</h3>
										<p>
											With the rise of voice search technology, SEO strategies
											need to adapt. This blog can delve into the importance of
											optimizing for voice search, understanding user intent,
											using long-tail……
										</p>
									</div>
								</motion.div>
							</div>
							<div className="bottom-home-features">
								<motion.div
									whileInView={{ opacity: 1, x: 0 }}
									initial={{ opacity: 0, x: 100 }}
									transition={{ duration: 1 }}
									className="home-feature2"
								>
									<div>
										<h3>The Power of Influencer Marketing in 2024</h3>
										<p>
											Explore the evolving landscape of influencer marketing in
											2024. Discuss the impact of micro-influencers, emerging
											platforms, and changing consumer behavior on influencer……
										</p>
									</div>{" "}
									<img
										src={assets.homefeatures3}
										alt="Features"
									/>
								</motion.div>
								<motion.div
									whileInView={{ opacity: 1, x: 0 }}
									initial={{ opacity: 0, x: -100 }}
									transition={{ duration: 1 }}
									className="home-feature2 home-feature4"
								>
									<div>
										<h3>
											Email Marketing Best Practices for Conversion Optimization
										</h3>
										<p>
											Email marketing remains a powerful tool for nurturing
											leads and driving conversions. Share best practices for
											crafting compelling subject lines, designing
											mobile-responsive email templates……
										</p>
									</div>
									<img
										src={assets.homefeatures4}
										alt="Features"
									/>
								</motion.div>
							</div>
						</div>
						<button className="home-featured-btn">FEATURED</button>
					</div>
				</div>
				<HomeSlides />
				<div className="home-testimonials">
					<div className="home-testimonials-container">
						<motion.div
							whileInView={{ opacity: 1, y: 0 }}
							initial={{ opacity: 0, y: -100 }}
							transition={{ duration: 0.8 }}
							className="home-testimonials-text"
						>
							<h1 className="text-custjourny">
								Delving into customer journeys
							</h1>
							<div>
								<h2 className="text-insights">insights through invaluable</h2>
								<h2 className="text-freedback">feedback</h2>
							</div>
						</motion.div>
						<div className="home-testimonials-text2">
							<h3>Delving into customer journeys </h3>
							<h3>insights through invaluable feedback</h3>
						</div>
						<Swiper
							spaceBetween={30}
							centeredSlides={true}
							autoplay={{
								delay: 2500,
								disableOnInteraction: false,
							}}
							pagination={{
								clickable: true,
								el: ".swiper-pagination", // Ensure pagination element is specified
								bulletClass: "swiper-pagination-bullet", // Default class for pagination bullet
								bulletActiveClass: "swiper-pagination-bullet-active",
							}}
							loop={true}
							modules={[Autoplay, Pagination]}
							className="mySwiper2"
						>
							<SwiperSlide className="testimonial-slider">
								<div className="home-testimonial-exp1">
									<div className="home-testimonial-exp1-img">
										<motion.img
											whileInView={{ opacity: 1, x: 0 }}
											initial={{ opacity: 0, x: -100 }}
											transition={{ duration: 0.8 }}
											src={assets.blogProfile1}
											alt="Users Image"
											className="simon-image"
										/>
									</div>
									<motion.div
										whileInView={{ opacity: 1, x: 0 }}
										initial={{ opacity: 0, x: 100 }}
										transition={{ duration: 0.8 }}
										className="home-testimonial-exp1-content"
									>
										<p>
											"C9 Ads transformed our website with exceptional skill and
											creativity. Their team demonstrated profound expertise and
											a client-focused approach, delivering a site that boosted
											our user engagement and sales. I highly recommend them for
											anyone looking to enhance their online presence. Their
											professionalism and commitment to excellence set them
											apart in the web development industry."
										</p>
										<span>Liam Taylor</span>
									</motion.div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="home-testimonial-exp1">
									<div className="home-testimonial-exp1-img">
										<motion.img
											whileInView={{ opacity: 1, x: 0 }}
											initial={{ opacity: 0, x: -100 }}
											transition={{ duration: 0.8 }}
											src={assets.blogProfile2}
											alt="Users Image"
										/>
									</div>
									<motion.div
										whileInView={{ opacity: 1, x: 0 }}
										initial={{ opacity: 0, x: 100 }}
										transition={{ duration: 0.8 }}
										className="home-testimonial-exp1-content"
									>
										<p>
											"C9 Ads has elevated our digital marketing strategy with
											their innovative and targeted approaches. Their team's
											deep understanding of the digital landscape and commitment
											to results has significantly increased our online
											visibility and engagement. Highly recommended for any
											business looking to boost its digital footprint with
											expert guidance and impactful campaigns."
										</p>
										<span>Noah White</span>
									</motion.div>
								</div>
							</SwiperSlide>{" "}
							<SwiperSlide>
								<div className="home-testimonial-exp1">
									<div className="home-testimonial-exp1-img">
										<motion.img
											whileInView={{ opacity: 1, x: 0 }}
											initial={{ opacity: 0, x: -100 }}
											transition={{ duration: 0.8 }}
											src={assets.blogProfile3}
											alt="Users Image"
										/>
									</div>
									<motion.div
										whileInView={{ opacity: 1, x: 0 }}
										initial={{ opacity: 0, x: 100 }}
										transition={{ duration: 0.8 }}
										className="home-testimonial-exp1-content"
									>
										<p>
											"C9 Ads impressed us with their creativity and precision
											in logo design. They crafted a logo that perfectly
											encapsulates our brand identity and resonates with our
											audience. Their process is collaborative and
											detail-oriented, ensuring a final product that truly
											stands out. Highly recommended for any business seeking a
											distinctive and professional logo."
										</p>
										<span>Ethan Harris</span>
									</motion.div>
								</div>
							</SwiperSlide>{" "}
							<SwiperSlide>
								<div className="home-testimonial-exp1">
									<div className="home-testimonial-exp1-img">
										<motion.img
											whileInView={{ opacity: 1, x: 0 }}
											initial={{ opacity: 0, x: -100 }}
											transition={{ duration: 0.8 }}
											src={assets.blogProfile4}
											alt="Users Image"
										/>
									</div>
									<motion.div
										whileInView={{ opacity: 1, x: 0 }}
										initial={{ opacity: 0, x: 100 }}
										transition={{ duration: 0.8 }}
										className="home-testimonial-exp1-content"
									>
										<p>
											"C9 Ads has significantly boosted our search engine
											rankings with their expert SEO services. Their strategic
											approach and deep understanding of SEO dynamics have
											driven more traffic to our site and increased our online
											visibility. The team is knowledgeable and proactive,
											making them a top recommendation for anyone needing to
											enhance their SEO performance."
										</p>
										<span>Jacob Brown</span>
									</motion.div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
					{/* <h2 className="home-testimonal-btn">TESTIMONALS</h2> */}
				</div>
				<div className="home-contact">
					<div className="home-contact-content">
						<div>
							<h3>Do you have any inquiries ?</h3>
							<p>Please feel free to forward them to us.</p>
						</div>
						<div className="home-contact-inputs">
							<form
								onSubmit={handleSubmit}
								className="home-form"
							>
								<div>
									<input
										type="text"
										placeholder="First Name"
										value={firstName}
										onChange={(e) => setFirstname(e.target.value)}
										required
									/>
									<input
										type="text"
										placeholder="Last Name"
										value={lastName}
										onChange={(e) => setLastname(e.target.value)}
									/>
								</div>
								<div>
									<input
										type="email"
										placeholder="Email Address"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
									<input
										type="tel"
										placeholder="Contact no"
										value={contactNo}
										onChange={(e) => setNumber(e.target.value)}
										required
									/>
								</div>
								<textarea
									id=""
									rows="04"
									placeholder="Your Message"
									value={message}
									// defaultValue="Some initial value"
									onChange={(e) => setMessage(e.target.value)}
									required
								/>

								<button
									className="home-submit-btn"
									type="submit"
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
				<InquiryForm
					isVisible={isFormVisible}
					onClose={handleClose}
				/>
			</div>
		</>
	)
}

export default Home
