import * as React from 'react';

// types
const noop = () => {};
type CallbackHandlerSignature<T> = (data: T) => void;
interface MessageEventData<T> {
	action: string;
	data: T;
}

/**
 * Listen for window messages from lua.
 * @param actionId Id of the action you want to listener for.
 * @param callback Callback handler if you wish.
 * @returns The cached data it has from the event.
 */
const useMessage = <T = any>(
	actionId: string,
	callback: CallbackHandlerSignature<T> = noop
): T | unknown => {
	const [cachedData, setCachedData] = React.useState<T | unknown>({});

	// Create a callback reference for react stuff.
	const _callback = React.useRef<CallbackHandlerSignature<T>>(callback);

	// Lisen for the callback changes we update the reference.
	React.useEffect(() => {
		_callback.current = callback;
	}, [callback]);

	// Mount the window listeners.
	React.useEffect(() => {
		// Message handler.
		const messageHandler = (event: MessageEvent<MessageEventData<T>>) => {
			const { action, data } = event.data;

			// Update the saved cache.
			setCachedData(data);

			// If there is a callback, execute it with data.
			if (_callback.current) {
				_callback.current(data);
			}
		};

		// Attach listener to the window.
		window.addEventListener('message', messageHandler);

		// Clean up when the component unmounts.
		() => {
			window.removeEventListener('message', messageHandler);
		};
	}, [actionId]);

	return cachedData;
};

export { useMessage };
export default useMessage;
