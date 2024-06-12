// src/utils/users.js
export const getUserData = () => {
	const usersElement = document.querySelector("users")
	const userElements = usersElement?.querySelectorAll("user")
	const users = []
	userElements?.forEach((userElement) => {
		users.push(userElement.textContent)
	})
	return users
}
