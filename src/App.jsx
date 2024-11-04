import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import Footer from "./Components/Footer/Footer"
// import Story from "./Components/Story/Story"

import "locomotive-scroll/dist/locomotive-scroll.css"
import Contact from "./Components/Contact/Contact"
import Services from "./Components/Services/Services"
import { initGA, logPageView } from "./utils/analytics"
import { getUserData } from "./utils/users"

// import LogoWork from "./Components/LogoWork/LogoWork"
// import Packaging from "./Components/Packaging/Packaging"
import Values from "./Components/Values/Values"
import About from "./Components/About/About"
import SubPage1 from "./Components/Home/subpages/SubPage1/SubPage1"
import SubPage2 from "./Components/Home/subpages/subPage2/SubPage2"
import SubPage3 from "./Components/Home/subpages/subPage3/SubPage3"
import SubPage4 from "./Components/Home/subpages/subpage4/subpage4"
import Blog from "./Components/Blog/Blog"
import Packaging2 from "./Components/Packaging/Packaging2"
import Seo from "./Components/Seo/Seo"
import SocialMedia from "./Components/SocialMedia/SocialMedia"
import Web from "./Components/Web/Web"
import Logo from "./Components/Logo/Logo"
import NotFound from "./Components/NotFound/NotFound"
import SubPage5 from "./Components/Home/subpages/subpage5/SubPage5"
import Whatsapp from "./Components/Whatsapp/Whatsapp"
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useEffect } from "react"
import SocialMedia2 from "./Components/SocialMedia/SocialMedia2"
import InfluencerMarketing from "./Components/Blog/InfluencerMarketing/InfluencerMarketing"
import VideoMarketing from "./Components/Blog/VideoMarketing/VideoMarketing"
import WebsiteBlog from "./Components/Blog/WebsiteBlog/WebsiteBlog"
import MarketingAgency from "./Components/Blog/MarketingAgency/MarketingAgency"

// import LogoWork from "./Components/Work/LogoWork/LogoWork"

const App = () => {
	const url = "https://c9-backend.onrender.com"

	const location = useLocation()

	// Check if the current location is the Story page
	// const isStoryPage = location.pathname === "/story"
	// const isLogoWorkPage = location.pathname === "/work"
	// const isPackagingPage = location.pathname === "/packaging"
	const isAboutPage = location.pathname === "/about-us"
	// const isNotFound = location.pathname === "*"

	useEffect(() => {
		initGA() // Initialize Google Analytics
		const users = getUserData() // Fetch user data
	}, [])

	useEffect(() => {
		logPageView()
	}, [location])

	const validPaths = [
		"/",
		"/about-us",
		"/services",
		"/our-service1",
		"/our-service2",
		"/our-service3",
		"/our-service4",
		"/contact",
		"/logo",
		"/packaging2",
		"/seo",
		"/social-media-marketing",
		"/web-development",
		"/values",
		"/blogs",
		"/animate",
		"/blogs/influencermarketing",
		"/blogs/videomarketing",
		"/blogs/blog-website",
	]

	const isNotFound = !validPaths.includes(location.pathname)
	return (
		<div>
			<ToastContainer />
			<ScrollToTop />
			<Navbar />
			<Routes>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path="/about-us"
					element={<About />}
				/>
				{/* <Route
					path="/story"
					element={<About />}
				/> */}
				<Route
					path="/services"
					element={<Services />}
				/>
				<Route
					path="/our-service1"
					element={<SubPage1 />}
				/>
				<Route
					path="/our-service2"
					element={<SubPage2 />}
				/>
				<Route
					path="/our-service3"
					element={<SubPage3 />}
				/>
				<Route
					path="/our-service4"
					element={<SubPage4 />}
				/>
				<Route
					path="/our-service5"
					element={<SubPage5 />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
				<Route
					path="/logo"
					element={<Logo />}
				/>
				{/* <Route
					path="/packaging"
					element={<Packaging />}
				/> */}
				<Route
					path="/packaging2"
					element={<Packaging2 />}
				/>
				<Route
					path="/seo"
					element={<Seo />}
				/>
				<Route
					path="/social-media-marketing"
					element={<SocialMedia2 />}
				/>
				<Route
					path="/web-development"
					element={<Web />}
				/>
				<Route
					path="/values"
					element={<Values />}
				/>
				<Route
					path="/blogs"
					element={<Blog url={url} />}
				/>
				<Route
					path="/blogs/influencermarketing"
					element={<InfluencerMarketing />}
				/>
				<Route
					path="/blogs/videomarketing"
					element={<VideoMarketing />}
				/>
				<Route
					path="/blogs/blog-website"
					element={<WebsiteBlog />}
				/>
				<Route path="/blogs/digital-marketing-agency" element={<MarketingAgency />}
				/>
				<Route
					path="*"
					element={<NotFound />}
				/>
			</Routes>
			<Whatsapp />

			{/* {!isStoryPage && <Footer />} */}
			{!isNotFound && !isAboutPage && <Footer />}
		</div>
	)
}

export default App
