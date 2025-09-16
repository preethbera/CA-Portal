import axios from "axios";

// Prefer value from env (Create React App reads REACT_APP_* at build time)
// Fallback to local dev server if not provided
const baseURL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/";

const Api = axios.create({
	baseURL,
});

export default Api;
