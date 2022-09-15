/**
 * Wrapper around the built in fetch.
 * @param uri Endpoint you wish to collect on the client.
 * @param data Data you want to pass into the request.
 * @returns Parsed data from the request.
 */
const fetchClientData = async <T = any>(
	uri: string,
	data?: unknown
): Promise<T> => {
	// Set fetch options.
	const fetchOptions = {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			['Content-Type']: 'application/json charset=UTF-8',
		},
	};

	// Extract host url from window and perform request.
	const host = (window as any).GetParentResourceName();
	const response = await fetch(`https://${host}/${uri}`, fetchOptions);

	// Parse the response and return it.
	return (await response.json()) as T;
};

export { fetchClientData };
export default fetchClientData;
