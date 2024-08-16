import React, { useRef } from "react"
import { motion, useTransform, useScroll } from "framer-motion"
import styles from "./logoParallax.module.css"
import { assets } from "../../../assets/asset"

const logo1 = [
	assets.logos1,
	assets.logos2,
	assets.logos3,
	// assets.logos4,
	assets.logos5,
	// assets.logos6,
	assets.logos7,
	// assets.logos8,
	assets.logos9,
	assets.logos10,
	assets.logos12,
	assets.logos13,
	assets.logos17,
	assets.logos19,
	assets.logos20,
	assets.logos15,
	assets.logos34,
	assets.logos35,
]

const logo2 = [
	assets.logos21,
	assets.logos39,
	assets.logos22,
	assets.logos23,
	assets.logos24,
	assets.logos25,
	assets.logos26,
	assets.logos28,
	assets.logos30,
	assets.logos31,
	assets.logos32,
	assets.logos33,
]

const LogoParallax2 = () => {
	const targetRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: targetRef,
	})

	const x = useTransform(scrollYProgress, [0.5, 1], ["0%", "-80%"])
	const xx = useTransform(scrollYProgress, [0, 1], ["0%", "80%"])
	const xxx = useTransform(scrollYProgress, [0.8, 1], ["5%", "-75%"])
	const transition = {
		type: "spring",
		stiffness: 50, // Adjust the stiffness to make the animation smoother
		damping: 20, // Adjust the damping to control the overshooting
		duration: 2, // You can set a duration if needed
	}
	return (
		<div className={styles.scrollSectionOuter}>
			<motion.div
				className={styles.imgContainer}
				style={{ x: x }}
			>
				{logo1.map((items, index) => (
					<div className={styles.logosImg}>
						<img
							key={index}
							src={items}
							alt=""
						/>
					</div>
				))}
			</motion.div>
			<motion.div
				className={styles.imgContainer2}
				style={{ x: xx }}
			>
				{logo2.map((items, index) => (
					<div className={styles.logosImg}>
						<img
							key={index}
							src={items}
							alt=""
						/>
					</div>
				))}
			</motion.div>
		</div>
	)
}

export default LogoParallax2
