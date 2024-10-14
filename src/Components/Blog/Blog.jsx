import React, { useEffect, useState } from "react"
import "./blog.css"
import { assets } from "../../assets/asset"
import axios from "axios"
import { Helmet } from "react-helmet"
import { useNavigate } from "react-router-dom"

const Blog = ({ url }) => {
	const [list, setList] = useState([])
	const [loading, setLoading] = useState(true)
	const navigate = useNavigate()

	const fetchList = async () => {
		setLoading(true) // Set loading to true before fetching data
		try {
			const response = await axios.get(`${url}/api/blog/list`)
			if (response.data.success) {
				setList(response.data.data)
			}
		} catch (error) {
			console.error("Error fetching data:", error)
		} finally {
			setLoading(false) // Set loading to false after data fetch completes
		}
	}
	console.log(list)
	useEffect(() => {
		fetchList()
	}, [])

	const getImageUrl = (item) => {
		return item && item.image ? `${url}/api/blog/image/${item._id}` : null
	}

	return (
		<>
			<Helmet>
				<title>Best Search Engine Optimization Company Australia | Blogs</title>
				<meta
					name="description"
					content="We are the best search engine optimization company in Australia. Visit our website to read blogs. We cover various topics related to digital marketing, packaging design, and logo design. Visit our website to read blogs. We cover various topics related to digital marketing, packaging design, and logo design."
				/>
			</Helmet>
			<div className="blog">
				<div className="blog-container">
					<div className="blog-header">
						<div className="blog-text">
							<h1>Navigating</h1>
							<h2>the Digital Landscape</h2>
							<h3>Expert Insights into Marketing Trends</h3>
						</div>
					</div>

					{/* <div className="blog-content">
						<div className="left-blog-content">
							<div
								className="leftTop-blog-content"
								onClick={() => navigate("/blogs/influencermarketing")}
								style={{ cursor: "pointer" }}
							>
								<img
									src={assets.blog_bg}
									alt="Blogging"
								/>
								<div
									className="blog-left-innerContent"
									style={{ cursor: "pointer" }}
								>
									<span>
										The Importance of First Impressions: How Effective Packaging
										Design Can Boost Sales
									</span>
								</div>
							</div>
						</div>
						<div
							className="right-blog-content"
							onClick={() => navigate("/blogs/videomarketing")}
							style={{ cursor: "pointer" }}
						>
							<div id="cssportal-grid">
								<div id="div1">
									<img
										src={assets.arrow45}
										alt="arrow Img"
										className="arrow45"
									/>
									<img
										src={assets.blog_bg3}
										alt="Blog"
									/>
									<div style={{ cursor: "pointer" }}>
										<span>
											The Power of Social Media Marketing: Why Your Business
											Needs It
										</span>
									</div>
								</div>
							</div>
						</div>
					</div> */}
					<div className="blog-content2">
						<div
							className="blog21"
							onClick={() => navigate("/blogs/influencermarketing")}
						>
							<img
								src={assets.blog_bg}
								alt=""
							/>
							<h2>
								The Importance of First Impressions: How Effective Packaging
								Design Can Boost Sales
							</h2>
							<span>READ MORE</span>
						</div>
						<div className="blog222">
							<div
								className="blog22"
								onClick={() => navigate("/blogs/videomarketing")}
							>
								<img
									src={assets.blog_bg3}
									alt=""
								/>
								<h2>
									The Power of Social Media Marketing: Why Your Business Needs
									It
								</h2>
								<span>READ MORE</span>
							</div>
							<div
								className="blog22"
								onClick={() => navigate("/blogs/blog-website")}
							>
								<img
									src={assets.websiteBlog}
									alt=""
								/>
								<h2 className="website-title">
									How a Dynamic Website Can Transform Your Brand Image

								</h2>
								<span>READ MORE</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Blog
