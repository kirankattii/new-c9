import { motion } from "framer-motion"
import { assets } from "../../../../assets/asset"

const SubPage4 = () => {
	return (
		<div className="subpage1">
			{/* <div className="subpage-content1">
				<h2>Scroll Down</h2>
			</div> */}
			<div className="subpage-allContent">
				<div className="subcontent-transforming">
					<motion.div
						initial={{ x: 150, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							delay: 3,
							x: { type: "spring", stiffness: 60 },
							opacity: { duration: 1 },
							ease: "easeIn",
							duration: 1,
						}}
					>
						<h1>Design</h1>
						<p>that speaks volumes</p>
					</motion.div>
					<img
						src={assets.white_rectangle}
						alt=""
					/>
				</div>
				<div className="subcontent-design">
					<motion.div
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 150 }}
						transition={{ duration: 0.4, delay: 0.5 }}
					>
						<h1>Packaging</h1>
						<p> that captivates, design that resonates</p>
					</motion.div>
					<img
						src={assets.white_rectangle}
						alt=""
					/>
				</div>
				<div className="subcontent-code">
					<motion.div
						initial={{ x: -150, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							delay: 3,
							x: { type: "spring", stiffness: 60 },
							opacity: { duration: 1 },
							ease: "easeIn",
							duration: 1,
						}}
					>
						<h1>Artistry</h1>
						<p> in every detail, impact in every package.</p>
					</motion.div>
					<img
						src={assets.white_rectangle}
						alt=""
					/>
					<motion.div
						initial={{ x: 150, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							delay: 3,
							x: { type: "spring", stiffness: 60 },
							opacity: { duration: 1 },
							ease: "easeIn",
							duration: 1,
						}}
					>
						<h1>Visuals</h1>
						<p>that tell your brand story</p>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default SubPage4
