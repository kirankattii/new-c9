import React, { useState } from "react"
import "./contact.css"
import { motion } from "framer-motion"
import { SplitText } from "../SplitText"
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"
import { Helmet } from "react-helmet"
const Contact = () => {
	const [firstName, setFirstname] = useState("")
	const [lastName, setLastname] = useState("")
	const [contactNo, setNumber] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")
	const [company, setCompany] = useState("")

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
			companyName: company,
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
				setCompany("")
			})
		toast
			.success("Form Submitted Successfully")

			.catch((error) => {
				console.error("Error sending email:", error)
				toast.error("Error fetching data")
			})
	}

	return (
		<>
			<Helmet>
				<title>
					Product Packaging Designing Company Australia | Packaging Designing
					Company Australia
				</title>
				<meta
					name="description"
					content="Offers the best and latest product packaging design which is creative and innovative. Contact for the professional digital marketing services."
				/>
			</Helmet>
			<div className="contact">
				<div className="contact-header">
					<div className="contact-text">
						<motion.h1
							initial={{ x: -100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.2,
								x: { type: "spring", stiffness: 60 },
								opacity: { duration: 1 },
								ease: "easeIn",
								duration: 1,
							}}
							className="text-get"
						>
							GET
						</motion.h1>
						<motion.div
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.2,
								x: { type: "spring", stiffness: 60 },
								opacity: { duration: 1 },
								ease: "easeIn",
								duration: 1,
							}}
						>
							<h1 className="text-contact-in">IN</h1>
							<h1 className="text-touch">TOUCH</h1>
						</motion.div>
						<div className="contact-help-card">
							<h2>We're Here to Help!</h2>
							<motion.p
								initial={{ opacity: 1 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<SplitText
									initial={{ y: "100%" }}
									animate="visible"
									variants={{
										visible: (i) => ({
											y: 0,
											transition: {
												delay: i * 0.06,
											},
										}),
									}}
								>
									Reach out to us for expert support and personalized solutions.
									We're ready to listen and guide you towards achieving your
									digital marketing goals. Connect with our team today!
								</SplitText>
							</motion.p>
						</div>
					</div>
					<div className="contact-address-form">
						{/* <div className="contact-address"> */}
						<div className="contact-our-address">
							<motion.div
								initial={{ x: 100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{
									// delay: 0.2,
									x: { type: "spring", stiffness: 60 },
									opacity: { duration: 1 },
									ease: "easeIn",
									duration: 1,
								}}
								className="address-border"
							></motion.div>
							<motion.div
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{
									// delay: 0.2,
									x: { type: "spring", stiffness: 60 },
									opacity: { duration: 1 },
									ease: "easeIn",
									duration: 1,
								}}
								className="contact-two-address"
							>
								<div className="contact-address-one">
									<div className="contact-address-name">
										<h2>Akshtam Maini</h2>
										<span>Business Head, Australia</span>
									</div>
									<div>
										<h3>Visit Us</h3>
										<p>29, Armstrong Road, Wilson, Perth, WA 6107</p>
									</div>
									<div>
										<h3>Chat To Us</h3>
										<p>akshtam@C9ads.au</p>
									</div>
									<div>
										<h3>Contact To Us</h3>
										<p className="contact-address-pno">+61 456469643</p>
									</div>
								</div>
								<div className="contact-address-two">
									<div className="contact-address-name">
										<h2>Manik Kalra</h2>
										<span>Business Head, United Kingdom</span>
									</div>
									<div>
										<h3>Visit Us</h3>
										<p>Bakers Place, Woodley, Reading, RG5 4AX</p>
									</div>
									<div>
										<h3>Chat To Us</h3>
										<p>akshtam@c9ads.au</p>
									</div>
									<div>
										<h3>Contact To Us</h3>
										<p className="contact-address-pno">+44 (0)7425819099</p>
									</div>
								</div>
							</motion.div>
						</div>
						{/* </div> */}
						<div className="contact-form">
							<form
								onSubmit={handleSubmit}
								className="contact-form"
							>
								<div className="contact-first-last">
									<div>
										<label htmlFor="">First Name</label>
										<input
											type="text"
											value={firstName}
											onChange={(e) => setFirstname(e.target.value)}
											required
										/>
									</div>
									<div>
										<label htmlFor="">Last Name</label>
										<input
											type="text"
											value={lastName}
											onChange={(e) => setLastname(e.target.value)}
										/>
									</div>
								</div>
								<div className="contact-company-name">
									<label htmlFor="">Company Name</label>
									<input
										type="text"
										value={company}
										onChange={(e) => setCompany(e.target.value)}
										required
									/>
								</div>
								<div className="contact-company-email">
									<label htmlFor="">Phone No</label>
									<input
										type="tel"
										value={contactNo}
										onChange={(e) => setNumber(e.target.value)}
										required
									/>
								</div>
								<div className="contact-company-email">
									<label htmlFor="">Email Address</label>
									<input
										type="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
								</div>
								<div className="contact-company-message">
									<label htmlFor="">Message</label>
									<textarea
										cols="30"
										rows="4"
										value={message}
										onChange={(e) => setMessage(e.target.value)}
										required
									/>
								</div>
								<button
									className="contact-form-btn"
									type="submit"
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className="share-your-contact"></div>
			</div>
		</>
	)
}

export default Contact
