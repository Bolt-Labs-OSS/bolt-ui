import React from 'react';

/**
 * Hook for listening to keypresses.
 * @param key Key you would like to listen for.
 * @param callback Callback for when they key is pressed.
 */
const useKey = (key: string, callback: (e: KeyboardEvent) => void) => {
	React.useEffect(() => {
		// Event handler.
		const eventHandler = (event: KeyboardEvent) => {
			if (event.key === key) {
				callback(event);
			}
		};

		// Add listener when the component mounts.
		window.addEventListener('keydown', eventHandler);

		// Clean up listener on component unmount.
		() => {
			window.removeEventListener('keydown', eventHandler);
		};
	}, [key, callback]);
};

export { useKey };
export default useKey;
