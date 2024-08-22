import React, { useState } from "react"
import styles from "./InquiryForm.module.css"
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"

const InquiryForm = ({ isVisible, onClose }) => {
	if (!isVisible) return null // Do not render the form if it's not visible

	const [firstName, setFirstname] = useState("")
	const [lastName, setLastname] = useState("")
	const [contactNo, setNumber] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")
	const [company, setCompany] = useState("")

	const isValidPhoneNumber = (phoneNumber) => {
		const phoneRegex = /^[0-9]{10}$/ // Adjust the regex based on your phone number format requirements
		return phoneRegex.test(phoneNumber)
	}

	// const handleSubmit = (e) => {
	// 	e.preventDefault()

	// 	if (!isValidPhoneNumber(contactNo)) {
	// 		toast.error("Please enter a valid phone number.")
	// 		return
	// 	}
	// 	const serviceId = "service_0nyqhev"

	// 	const templateId = "template_2m4xtov"

	// 	const publicKey = "7d2Gee0mZ6yj99snv"

	// 	const templateParams = {
	// 		firstName: firstName,
	// 		lastName: lastName,
	// 		email: email,
	// 		contactNo: contactNo,
	// 		to_name: "C9",
	// 		message: message,
	// 		companyName: company,
	// 	}

	// 	emailjs
	// 		.send(serviceId, templateId, templateParams, publicKey)
	// 		.then((response) => {
	// 			console.log("Email sent successfully!", response)
	// 			setFirstname("")
	// 			setLastname("")
	// 			setEmail("")
	// 			setNumber("")
	// 			setMessage("")
	// 			setCompany("")
	// 		})
	// 	toast
	// 		.success("Form Submitted Successfully")

	// 		.catch((error) => {
	// 			console.error("Error sending email:", error)
	// 			toast.error("Error fetching data")
	// 		})
	// }

	const handleSubmit = (e) => {
		e.preventDefault()

		if (!isValidPhoneNumber(contactNo)) {
			toast.error("Please enter a valid phone number.", { autoClose: 2000 })
			return
		}

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
				toast.success("Form Submitted Successfully", { autoClose: 2000 })
				onClose() // Close the form popup after successful submission
			})
			.catch((error) => {
				console.error("Error sending email:", error)
				toast.error("Error sending email", { autoClose: 2000 })
			})
	}

	return (
		<div className={styles.overlay}>
			<div className={styles.formContainer}>
				<button
					className={styles.closeButton}
					onClick={onClose}
				>
					&times;
				</button>
				<h2>Do you have any inquiries?</h2>
				<p>Please feel free to forward them to us.</p>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
				>
					<div className={styles.inputGroup}>
						<input
							type="text"
							placeholder="First Name"
							className={styles.input}
							onChange={(e) => setFirstname(e.target.value)}
							required
						/>
						<input
							type="text"
							placeholder="Last Name"
							className={styles.input}
							onChange={(e) => setLastname(e.target.value)}
						/>
					</div>
					<div className={styles.inputGroup}>
						<input
							type="email"
							placeholder="Email Address"
							className={styles.input}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<input
							type="text"
							placeholder="Contact no."
							className={styles.input}
							onChange={(e) => setNumber(e.target.value)}
							required
						/>
					</div>
					<textarea
						placeholder="Your Message"
						className={styles.textarea}
						onChange={(e) => setMessage(e.target.value)}
						required
					></textarea>
					<button
						type="submit"
						className={styles.submitButton}
					>
						SEND
					</button>
				</form>
			</div>
		</div>
	)
}

export default InquiryForm
