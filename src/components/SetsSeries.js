import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { doFilterSeries } from '../actions';

const SeriesStyled = styled.ul`
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 2rem;
	li {
		margin: 0 15px 15px 0;
		color: dimgrey;
		background-color: #eee;
		border-radius: 20px;
		padding: 10px 15px;
		cursor: pointer;
		&:hover {
			background-color: #ddd;
		}
		&.selected {
			color: #fff;
			background-color: #ccc;
		}
	}
`;

class SetsSeries extends PureComponent {
	render() {
		const { series, active } = this.props;

		return (
			<SeriesStyled>
				{
					series.map(item => (
						<li 
							key={item} 
							className={`${ item === active ? 'selected' : '' }`}
							onClick={() => this.props.doFilterSeries(item)}
						>
							{item}
						</li>
					))
				}
			</SeriesStyled>
		);
	}
}

export default connect(
	null,
	{
		doFilterSeries,
	}
)(SetsSeries);