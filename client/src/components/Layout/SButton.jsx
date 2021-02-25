import React from 'react'
import styled, { css } from 'styled-components';
import theme from "styled-theming";
import Loader from './Loader';
import PropTypes from "prop-types";

const buttonColors = theme.variants("mode", "variant", {
	default: {
		dark: css`
			background-color: var(--tPrimary);
			color: var(--white);
		`,
		light: css`
			background-color: var(--tPrimary);
			color: var(--white);
			&:hover {
				cursor: pointer;
				background-color: var(--tDarkAlt);
			}
			&:active {
				background-color: var(--tDark);
			}
		`,
	}
});

const hoverStyles = theme("mode", {
	light: css`
	cursor: pointer;
	background-color: var(--tDarkAlt);
	&:active {
		background-color: var(--tDark);
	}
	`,
	dark: css`
		cursor: pointer;
		background-color: var(--tDarkAlt);
		&:active {
			background-color: var(--tDark);
		}
	`,
});

const StyButton = styled.button`
		${buttonColors};
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 6px 12px;
		font-size: ${props => {
		if (props.big) {
			return '20px';
		}
		return '16px';
	}};
		outline: none;
		border: none;
		cursor: pointer;
		margin: 15px;
		&:hover {
			${props => {
		return (!props.loading && css`${hoverStyles}`);
	}}};
		${props => {
		return (
			props.inverse &&
			css`
					background-color: #fff;
					color: #a1cdf1;
				`
		)
	}};
`;

StyButton.propTypes = {
	variant: PropTypes.oneOf(['default'])
};

StyButton.defaultProps = {
	variant: 'default',
};

const SButton = ({ variant, secondary, big, inverse, loading, children, ...props }) => {
	return (
		<StyButton variant={variant} secondary={secondary} big={big} inverse={inverse} {...props}>
			{loading ? <Loader small white /> : children}
		</StyButton>
	)
}

export default SButton