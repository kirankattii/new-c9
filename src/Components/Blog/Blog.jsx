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

					<div className="blog-content">
						<div className="left-blog-content">
							<div className="leftTop-blog-content">
								<img
									src={assets.grid}
									alt="Blogging"
								/>
								<div
									className="blog-left-innerContent"
									style={{ cursor: "pointer" }}
									onClick={() => navigate("/blogs/influencermarketing")}
								>
									<span>
										Influencer Marketing: Authentic Connections, Real Results
									</span>
									<p>
										Discover the power of influencer partnerships in building
										genuine brand connections. Learn to choose the right
										influencers, collaborate authentically, measure ROI, and
										maintain ethical practices for long-term success
									</p>
								</div>
							</div>
						</div>
						<div className="right-blog-content">
							<div id="cssportal-grid">
								<div id="div1">
									<img
										src={assets.arrow45}
										alt="arrow Img"
										className="arrow45"
									/>
									<img
										src={assets.grid1}
										alt="Blog"
									/>
									<div
										onClick={() => navigate("/blogs/videomarketing")}
										style={{ cursor: "pointer" }}
									>
										<span>Video Marketing Mastery</span>
										<p>
											Discover how video marketing drives engagement and
											conversions. Learn about different video types,
											storytelling techniques, and platform optimizations to
											maximize your marketing impact
										</p>
									</div>
								</div>
								{/* <div id="div4">
										<h3>READ BLOG</h3>
										<img
											src={list[2].image}
											alt="AI in Marketing"
										/>
										<div>
											<span>{list[2]?.title || "No Title Available"}</span>
											<p>
												{list[2]?.description || "No Description Available"}
											</p>
										</div>
									</div>
									<div id="div5">
										<img
											src={list[3].image}
											alt="Journey Mapping"
										/>
										<div>
											<span>{list[4]?.title || "No Title Available"}</span>
											<p>
												{list[4]?.description || "No Description Available"}
											</p>
										</div>
									</div>
									<div id="div6">
										<img
											src={list[4].image}
											alt="Brand Building Image"
										/>
										<div>
											<span>{list[3]?.title || "No Title Available"}</span>
											<p>
												{list[3]?.description || "No Description Available"}
											</p>
										</div>
									</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Blog
