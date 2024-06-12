// src/utils/analytics.js
import ReactGA from "react-ga4"

const GA_TRACKING_ID = "G-2D3YZRHBF8" // Replace with your actual Tracking ID

export const initGA = () => {
	ReactGA.initialize(GA_TRACKING_ID)
}

export const logPageView = () => {
	ReactGA.send({
		hitType: "pageview",
		page: window.location.pathname + window.location.search,
	})
}
