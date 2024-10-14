import React, { useState } from "react"
import "./contact.css"

import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"
const Contact = () => {
  const [firstName, setFirstname] = useState("")
  const [lastName, setLastname] = useState("")
  const [contactNo, setNumber] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [company, setCompany] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const serviceId = "service_ssdshev"

    const templateId = "template_sdgtxtov"

    const publicKey = "7d2Gsdsdrjj99snv"

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

      <div className="contact">
        <div className="contact-header">

          <div className="contact-address-form">

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
