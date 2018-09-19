import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import getDate from '../../getDate';

class Task extends Component {
	deleteTask = (id, dispatch, text) => {
		// Dodanie daty ukończenia zadania
		let deleteDate = getDate();

		dispatch({ type: 'DELETE_TASK', payload: id });
		dispatch({ type: 'DELETED_TASK', payload: { id, text, deleteDate } });
	};

	render() {
		const { id, text, date } = this.props.task;

		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					return (
						<li className="task">
							<div className="task-texts">
								<p className="task-texts__name-task">{text}</p>
								<p className="task-texts__date-task">
									Data wstawienia:{' '}
									<span className="task-texts__date-task-value">{date}</span>
								</p>
							</div>
							<div className="task-icons">
								<div className="task-icons__modify-icon">
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
