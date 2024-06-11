import React from "react"
import "./logo.css"
import { assets } from "../../assets/asset"
import { motion } from "framer-motion"
import LogoParallax from "./LogoParallax/LogoParallax"

const Logo = () => {
	return (
		<div className="logo2">
			<div className="logo-container">
				<div className="logo-header">
					<motion.h1
						whileInView={{ scale: 1, opacity: 1 }}
						initial={{ scale: 0, opacity: 0 }}
						transition={{ duration: 0.5 }}
					>
						LOGO DESIGN
					</motion.h1>
				</div>
				<div className="logo-subContainer1">
					<div className="video-wrapper">
						<video
							autoPlay
							muted
							loop
							// controls
						>
							<source
								src={assets.logo_v1}
								type="video/mp4"
							/>
						</video>
					</div>
					<motion.div
						whileInView={{ scale: 1, opacity: 1, x: 0 }}
						initial={{ scale: 0.94, opacity: 0, x: -50 }}
						transition={{ duration: 0.6 }}
						className="logo-content1"
					>
						<p>
							In a world where first impressions are pivotal, your business’s
							logo acts as the frontline, setting the tone for your brand's
							identity. At C9 Ads, the best logo designing company Australia, we
							understand that a logo is not just an artistic symbol but the
							foundational element that embodies your brand’s ethos and
							communicates its core values to the audience. That's why our best
							logo designing company in Perth is tailored to create distinctive,
							memorable, and meaningful logos that resonate with your target
							market.
						</p>
						<h2>Logo Design</h2>
						<p>Designing the Face of Your Brand</p>
					</motion.div>
				</div>
				<div className="logo-subContainer2">
					<motion.h1
						whileInView={{ scale: 1, opacity: 1, x: 0 }}
						initial={{ scale: 0.94, opacity: 0, x: -50 }}
						transition={{ duration: 0.4 }}
					>
						Why Effective Logo Design is Crucial?
					</motion.h1>

					<motion.ul
						whileInView={{ scale: 1, opacity: 1, x: 0 }}
						initial={{ scale: 0.94, opacity: 0, x: -50 }}
						transition={{ duration: 0.6 }}
					>
						<li>
							<b>Make Your Mark:</b> The right logo leaves a lasting impression,
							often being the first point of engagement with your customers.
							It's an opportunity to instantly convey the professional
							excellence and unique character of your brand.
						</li>
						<li>
							<b> Build Trust and Credibility:</b> A professionally designed
							logo reflects a commitment to your brand’s standards and ethics,
							fostering trust among your customers.
						</li>
						<li>
							<b>Differentiation:</b> In a competitive market, a well-designed
							logo can set you apart, making your brand easily recognizable and
							superior to your competitors.
						</li>
						<li>
							<b>Silent Ambassador:</b> Your logo communicates your brand’s
							story, values, and professionalism silently but effectively. Our
							Unique Approach to Logo Design
						</li>
						<li>
							<b>At C9 Ads, we don’t just create logos:</b> we create icons of
							brand identity. Our immersive logo design process involves
							understanding your business's heart and soul:
						</li>
					</motion.ul>
				</div>
				<div className="logo-vault">
					<h1>Logo Vault</h1>
				</div>
				<LogoParallax />
				<div className="logo-subContaine3">
					<div>
						<motion.h2
							whileInView={{ scale: 1, opacity: 1, x: 0 }}
							initial={{ scale: 0.94, opacity: 0, x: -50 }}
							transition={{ duration: 0.4 }}
						>
							Ready to make your brand unforgettable ?
						</motion.h2>
						<motion.p
							whileInView={{ scale: 1, opacity: 1, x: 0 }}
							initial={{ scale: 0.94, opacity: 0, x: -50 }}
							transition={{ duration: 0.6 }}
						>
							Connect with C9 Ads today, and let’s start the journey to a
							remarkable brand identity together. Fill out the contact form
							below or give us a call to discuss how we can transform your logo
							into a powerful emblem of your business.
						</motion.p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Logo
