declare namespace RootState {
	type application = string;
	type Actions = SetApp;

	/* Context State interface */
	interface State {
		application: application;
	}

	/* Reducer Actions */
	interface SetApp {
		type: 'SET_APP';
		payload: {
			name: application;
		};
	}
}
