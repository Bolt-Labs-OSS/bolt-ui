import * as React from 'react';
import { fetchClientData } from '../helpers';

/* Interface for hook returnl */
interface useFetchReturn<T> {
	data: T | undefined;
	refetch: (x: any) => Promise<T>;
}

/**
 * Wrapper around the performFetchRequest.
 * @param uri Client endpoint you would like to request.
 * @param data Data you want to pass along with the request.
 * @returns Object of data and a refetch method.
 */
const useFetch = <T = any>(uri: string, data?: any): useFetchReturn<T> => {
	const [cacheData, setCacheData] = React.useState<T>();

	/**
	 * Perform the question in a async wrapper.
	 * @todo Look into maybe doing a callback or memo.
	 */
	const performFetchRequest = async (_data?: unknown) => {
		const response = await fetchClientData<T>(uri, _data);
		setCacheData(response);
		return response;
	};

	// Perform fetch on component mount.
	React.useEffect(() => {
		performFetchRequest(data);
	}, []);

	return {
		data: cacheData,
		refetch: performFetchRequest,
	};
};

export { useFetch };
export default useFetch;
