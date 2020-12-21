import styled from '@emotion/styled/macro';
import * as mq from '../styles/media-queries';

const buttonVariants = (theme, variant) => ({
	background: variant === 'primary' ? theme.primary : theme.secondary,
	color: theme.text,
});

const Button = styled.button(
	{
		width: '100%',
		marginTop: '2rem',
		padding: '1rem 1.75rem',
		borderRadius: '2px',
		fontWeight: 600,
		[mq.sm]: {
			width: 'initial',
		},
	},
	({ theme, variant = 'primary' }) => buttonVariants(theme, variant)
);

export { Button };
