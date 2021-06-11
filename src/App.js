import {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Extension} from '@terra-money/terra.js';

function App() {

	useEffect(() => {
		const extension = Extension();
		extension.connect();
		extension.on('connect', w => {
			console.log({w});
			debugger;
		});
	}, []);
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
