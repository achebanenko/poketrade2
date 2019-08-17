import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import empty from '../img/card-back-small.png';

const CardItemStyled = styled.li`
	margin: 10px 20px 10px 0;
	width: 240px;
	a {
		display: block;
		&:hover {
			transform: scale(1.1);
			transition: transform .3s;
		}
	}
	img {
		background: url(${empty}) no-repeat 50%;
		background-size: 95%;
	}
`;

const CardItem = ({details, showModal}) => {
	return (
		<CardItemStyled onClick={() => showModal(true, details)}>
			<Link to={`/cards/${details.id}`} onClick={e => e.preventDefault()}>
				<img src={details.imageUrl} title={details.name} alt={details.name}/>
			</Link>
		</CardItemStyled>
	);
};

export default CardItem;