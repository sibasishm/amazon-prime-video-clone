/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import { Button } from './components';

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
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					background: theme.bgOffset,
					padding: '0.75rem 0.5rem',
				}}
			>
				<img src="/logo.png" alt="amazon prime logo" />
				<div>
					<a href="/">EN</a>
					<a href="/">Sign In</a>
				</div>
			</header>
			<main>
				<h1>Welcome to Prime Video</h1>
				<p>
					Join Prime to watch the latest movies, TV shows and award-winning
					Amazon Originals
				</p>
				<Button>Start your 30-day free trial</Button>
			</main>
		</div>
	);
}

export { App };
