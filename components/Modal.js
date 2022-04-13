import React, { useState } from 'react';
import MovieCreateForm from './MovieCreateForm';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createMovie } from '../actions';
const Modal1 = props => {
	const { buttonLabel, className } = props;

	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);
	const handleCreateMovie = movie => {
		createMovie(movie).then(movies => {
			console.log(JSON.stringify(movies));
		});
	};
	return (
		<div>
			<Button color='danger' onClick={toggle}>
				{buttonLabel}
			</Button>
			<Modal isOpen={modal} toggle={toggle} className={className}>
				<ModalHeader toggle={toggle}>Create movie</ModalHeader>
				<ModalBody>
					<MovieCreateForm handleFormSubmit={handleCreateMovie} />
				</ModalBody>
				<ModalFooter>
					{props.hasSubmit && (
						<Button
							color='primary'
							onClick={toggle}
							ref={ele => (closeBtn = ele)}>
							Save
						</Button>
					)}{' '}
					<Button color='secondary' onClick={toggle}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default Modal1;
