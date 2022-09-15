import * as React from 'react';
import { useApp, useMessage } from '../../lib/hooks';

interface ExampleAppProps {}

/**
 * Example app on how to integrate new features into the resource.
 * Understand that this is only one example and there are many different ways to do it.
 */
const ExampleApp: React.FunctionComponent<ExampleAppProps> = ({}) => {
	// Refference lib/hooks/use-app if you want to know how this works.
	const { isActive } = useApp('example');

	// Refference lib/hooks/use-message if you want to know how this works.
	const messageData = useMessage<{ test: boolean }>('example:message');

	/**
	 * Return null if the app is not active.
	 * This has to be at the bottom of the func, can't dynamically render hooks.
	 */
	if (!isActive) return null;

	// This should only show when the app is active.
	return (
		<div>
			<h1>Example App</h1>
			<p>Is App Active?: {JSON.stringify(isActive)}</p>
		</div>
	);
};

export default ExampleApp;
