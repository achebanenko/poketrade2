import React from 'react';
import ReactDOM from 'react-dom';
// import { connect } from 'react-redux';
// import { showModal } from '../actions';
import Modal from './styles/Modal';

const CardModal = React.memo((props, context) => {

	// console.log(context);

	const { showModal, openedModal } = props;

	// https://hackernoon.com/15-html-element-methods-youve-potentially-never-heard-of-fc6863e41b2a
	const outsideClick = (e) => {
		const content = document.querySelector('.modal-content');
		if(!content.contains(e.target)) {
			showModal(false);
		}
	};

	const ModalElement = (
		<Modal onClick={outsideClick}>
			<div className="modal-content">
				<button className="close-button" onClick={() => showModal(false)}>
					&times;
				</button>

				<h1>{openedModal.item.name}</h1>

				{
					openedModal.item.text && (
						openedModal.item.text.map((paragraph,i) => (
							<p key={i}>{paragraph}</p>
						))
					)
				}

			</div>
		</Modal>
	);

	// const element = document.createElement('div');
	// const tab = window.open('', '', 'width=600,height=400,left=200,top=200');

	return (
		ReactDOM.createPortal(
			ModalElement,
			document.body
			// tab.document.body.appendChild(element)
		)
	);
});

export default CardModal;
/*
export default connect(
	state => ({
		openedModal: state.openedModal
	}),
	{
		showModal
	}
)(CardModal);
*/