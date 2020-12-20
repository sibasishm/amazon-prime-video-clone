import styled from '@emotion/styled/macro';

const buttonVariants = (theme, variant) => ({
	background: variant === 'primary' ? theme.primary : theme.secondary,
	color: theme.text,
});

const Button = styled.button(
	{
		padding: '1rem 1.75rem',
		borderRadius: '2px',
		fontWeight: 600,
	},
	({ theme, variant = 'primary' }) => buttonVariants(theme, variant)
);

export { Button };
