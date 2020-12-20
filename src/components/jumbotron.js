/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';

function Jumbotron({ children }) {
	return <section>{children}</section>;
}

Jumbotron.Image = function JumbotronImage({ src }) {
	const theme = useTheme();

	return (
		<div
			css={{
				height: '50vh',
				background: `linear-gradient(to top, ${theme.bg} 0%, transparent 20%), url('/images/misc/${src}') center top`,
				backgroundSize: 'cover',
			}}
		></div>
	);
};

Jumbotron.Title = function JumbotronTitle({ children }) {
	return <h1>{children}</h1>;
};

Jumbotron.Description = function JumbotronDescription({ children }) {
	return <p css={{ marginTop: '1rem' }}>{children}</p>;
};

Jumbotron.Pane = function JumbotronPane({ children }) {
	return (
		<div
			css={{
				textAlign: 'center',
				padding: '2rem 0.75rem',
			}}
		>
			{children}
		</div>
	);
};

export { Jumbotron };
