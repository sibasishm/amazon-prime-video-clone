/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import * as mq from '../styles/media-queries';

function Jumbotron({ children, direction }) {
	return (
		<section
			css={{
				display: 'flex',
				flexDirection: 'column',
				height: '100vh',
				[mq.sm]: {
					height: '70vh',
					flexDirection: direction,
					alignItems: 'center',
				},
			}}
		>
			{children}
		</section>
	);
}

Jumbotron.Image = function JumbotronImage({ src, direction }) {
	const theme = useTheme();

	return (
		<div
			css={{
				flex: '1 100%',
				background: `linear-gradient(to top, ${theme.bg} 0%, transparent 20%), url('/images/misc/${src}') center top`,
				backgroundSize: 'cover',
				[mq.sm]: {
					width: '100%',
					height: '100%',
					flex: 'initial',
					background: `linear-gradient(to ${direction}, ${theme.bg} 40%, transparent 60%), url('/images/misc/${src}') ${direction} top`,
				},
			}}
		></div>
	);
};

Jumbotron.Title = function JumbotronTitle({ children }) {
	return <h1 css={{ fontSize: '2rem' }}>{children}</h1>;
};

Jumbotron.Description = function JumbotronDescription({ children }) {
	return <p css={{ marginTop: '1.25rem' }}>{children}</p>;
};

Jumbotron.Pane = function JumbotronPane({ children }) {
	return (
		<div
			css={{
				textAlign: 'center',
				padding: '1.5rem 0.75rem',
				maxWidth: '450px',
				margin: '0 auto',
				[mq.sm]: {
					textAlign: 'left',
					paddingLeft: '0 2rem',
				},
				[mq.lg]: {
					padding: '0 4rem',
				},
			}}
		>
			{children}
		</div>
	);
};

export { Jumbotron };
