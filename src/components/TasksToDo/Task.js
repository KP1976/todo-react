import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import getDate from '../../getDate';

class Task extends Component {
	state = {
		id: null,
		text: '',
		date: '',
	};

	deleteTask = (id, dispatch, text) => {
		// Dodanie daty ukończenia zadania
		let deleteDate = getDate();

		console.log(id);

		dispatch({ type: 'DELETE_TASK', payload: { id } });
		dispatch({ type: 'DELETED_TASK', payload: { id, text, deleteDate } });
	};

	modifyTask = (showModal, id) => {
		this.props.callbackFromParent(id);

		showModal();
	};

	render() {
		const { id, text, date } = this.props.task;

		return (
			<Consumer>
				{value => {
					const { dispatch, showModal } = value;
					return (
						<li className="task">
							<div className="task-texts">
								<p className="task-texts__name-task">{text}</p>
								<p className="task-texts__date-task">
									Data wstawienia: <br />
									<span className="task-texts__date-task-value">{date}</span>
								</p>
							</div>
							<div className="task-icons">
								<div
									className="task-icons__modify-icon"
									onClick={this.modifyTask.bind(
										this,
										showModal,
										id,
										text,
										date,
									)}
								>
									<div className="task-icons__modify-icon--yellow-circle" />
								</div>
								<div
									className="task-icons__delete-icon"
									onClick={this.deleteTask.bind(this, id, dispatch, text)}
								>
									<div className="task-icons__delete-icon--red-cross" />
								</div>
							</div>
						</li>
					);
				}}
			</Consumer>
		);
	}
}

Task.propTypes = {
	task: PropTypes.object.isRequired,
};

export default Task;
