/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import { JumbotronContainer } from './containers/jumbotron';

function App() {
	const theme = useTheme();
	return (
		<div
			css={{
				minHeight: '100vh',
				background: theme.bg,
				color: theme.text,
			}}
		>
			<header
				css={{
					position: 'sticky',
					top: 0,
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					background: theme.bgOffset,
					padding: '0.75rem 0.5rem',
					boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
				}}
			>
				<img src="/logo.png" alt="amazon prime logo" />
				<div>
					<a href="/">EN</a>
					<a href="/">Sign In</a>
				</div>
			</header>
			<main>
				<JumbotronContainer />
			</main>
		</div>
	);
}

export { App };
