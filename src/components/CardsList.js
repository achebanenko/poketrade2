import React, { PureComponent } from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';
import ShowMore from './ShowMore';
import CardModal from './CardModal';
import Loader from './styles/Loader';
import ListBar from './styles/ListBar';

const CardsListStyled = styled.ul`
	list-style: none;
	margin-bottom: 2rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

class CardsList extends PureComponent {
	render() {
		const { data, isLoading, filter, showModal,openedModal } = this.props;

		if(openedModal.status) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = null;
		}

		return (
			<CardsListStyled>
				{ 
					data.length > 0 && (
            <ListBar>
              Cards <strong>{data.length}</strong>
            </ListBar>
          )
        }

				{ 
					data && data.length > 0
						? data.slice(0, filter.dataPointer || filter.dataOffcut)
							.map(card => (
								<CardItem 
									key={card.id} 
									details={card} 
									showModal={showModal}
								/>
							))
						: isLoading 
							? <Loader /> 
							: 'Sorry, no cards'
				}

				{
					openedModal.status && <CardModal openedModal={openedModal} showModal={showModal} />
				}

				{
					(data.length - filter.dataPointer > 0 && data.length - filter.dataOffcut > 0) && (
						<ShowMore/>
					)
				}
			</CardsListStyled>
		);
	}
}

export default CardsList;