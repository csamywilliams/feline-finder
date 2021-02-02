import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from 'components/Dashboard';
import theme from './theme.js';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global.js';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Dashboard />
			</>
		</ThemeProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
