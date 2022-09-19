import Optimizely from "../../../../../libs/optimizely";

/**
 * @description Validates cart and returns information related to cart totals, validation messages
 * @source https://docs.developers.optimizely.com/content-cloud/v1.5.0-content-delivery-api/reference/cartapi_preparecheckout
 * @return {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { cart_id } = req.query;

		let endpoint = `/v2.0/carts/${cart_id}/preparecheckout`;

		const body = {};

		const result = await Optimizely({
			endpoint,
			method: "post",
			body
		});

		res.json(result.data);
	} catch (err) {
		console.error(err);

		res.json({ message: "There was an error", error: err });
	}
}
