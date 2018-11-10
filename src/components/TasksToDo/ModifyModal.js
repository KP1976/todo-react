import React from 'react';
import ModifyTask from './ModifyTask';

const ModifyModal = ({ handleClose, show, children }) => {
	return (
		<div className={show ? 'modal display-block' : 'modal display-none'}>
			<section className="modal-main">
				{/* {children} */}
				<ModifyTask />
				<div className="close-modal" onClick={handleClose}>
					<div className="close-modal__cross" />
				</div>
			</section>
		</div>
	);
};

export default ModifyModal;
