import React from 'react';
import ModifyTask from './ModifyTask';

const ModifyModal = ({ handleClose, show, callbackFromParent }) => {
	return (
		<div className={show ? 'modal display-block' : 'modal display-none'}>
			<section className="modal-main">
				<ModifyTask id={callbackFromParent} />
				<div className="close-modal" onClick={handleClose}>
					<div className="close-modal__cross" />
				</div>
			</section>
		</div>
	);
};

export default ModifyModal;
