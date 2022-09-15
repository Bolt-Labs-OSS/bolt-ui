import { useRootState } from '../state/root.state';

/* Return type of the hook. */
interface useAppReturn {
	isActive: boolean;
	close: () => void;
}

/**
 * Hook designed to make managing a single app easy.
 * @param name Name of the app you are using.
 * @returns An object of useful functions and values, options found in `useAppReturn` type.
 */
const useApp = (name: RootState.application): useAppReturn => {
	const { dispatch, state } = useRootState();

	// Determine weather the app is the active app.
	const isAppActive = state.application === name;

	/**
	 * Wrapper for the dispatch action of setting an app.
	 * @param name Name of the app.
	 */
	const setApp = (name: RootState.application) => {
		dispatch({
			type: 'SET_APP',
			payload: {
				name,
			},
		});
	};

	return {
		close: () => setApp(''),
		isActive: isAppActive,
	};
};

export { useApp };
export default useApp;
