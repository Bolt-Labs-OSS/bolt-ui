import * as React from 'react';
import './styles/index.css';

const App: React.FC = ({}) => {
	return (
		<div className='container'>
			<h1>Bolt Labs</h1>
			<p>
				At Bolt labs we wanted to build a simple and easy to use react
				boilerplate for every fivem developer. This is our take on a
				simple, quick, and use to use workflow for fivem react
				components.
			</p>
			<p className='darker'>
				You are going to find everything you need to get started. If
				you want to take a look at our hooks they are located in the
				<code>./lib/hooks</code> directory. That same directory
				contains our context system and helpers.
			</p>
		</div>
	);
};

export default App;
