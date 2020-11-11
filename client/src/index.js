import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import { XThemeProvider } from "./context/ThemeContext";
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<XThemeProvider>
			<Router>
				<App />
			</Router>
		</XThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
