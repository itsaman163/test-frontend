import axios from "axios";

const apiRequest = async (api_name, data) => {
	try {
		const url = __API_URL__;
		const api_url = `${url}${api_name}`;
		const response = await axios.post(api_url, data, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		return response.data;
	} catch (error) {
		console.error("Error during API call:", error.message);
		throw error;
	}
};

export default apiRequest;
