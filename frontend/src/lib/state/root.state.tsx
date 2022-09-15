import * as React from 'react';

// Inital state for the context
export const initalState: RootState.State = {
	application: '',
};

/**
 * Initalize the root context.
 * @todo add correct types in here.
 */
export const rootContext = React.createContext<{
	state: RootState.State;
	dispatch: React.Dispatch<RootState.Actions>;
}>({
	dispatch: () => {},
	state: initalState,
});

/**
 * Reducer for context actions.
 * @param state Current state of the context.
 * @param action Actions that is being executed, comes with data.
 * @returns A new state for the context.
 */
const rootReducer = (
	state: RootState.State,
	action: RootState.Actions
): RootState.State => {
	const { type, payload } = action;

	// Case for the action type here.
	// Each case must return a new state.
	switch (type) {
		case 'SET_APP':
			return {
				...state,
				application: payload.name,
			};
		default:
			return state;
	}
};

/**
 * Component provider to pass the context down to all it's children.
 * @returns provider wrapper for app.
 */
export const RootProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const [state, dispatch] = React.useReducer(rootReducer, initalState);

	return (
		<rootContext.Provider value={{ state, dispatch }}>
			{children}
		</rootContext.Provider>
	);
};

/**
 * Simple hook used for quick access to the root context.
 * @returns root context all ready to go.
 */
export const useRootState = () => {
	return React.useContext(rootContext);
};
