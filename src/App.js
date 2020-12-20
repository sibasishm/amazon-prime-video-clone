/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';

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
				<h1>Hello World</h1>
				<button
					css={{
						padding: '1rem 1.75rem',
						backgroundColor: theme.primary,
						color: theme.text,
						borderRadius: '2px',
						fontWeight: 600,
					}}
				>
					Start your 30-day free trial
				</button>
			</main>
			<footer>I am a footer</footer>
		</div>
	);
}

export { App };
