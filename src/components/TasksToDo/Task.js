import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';

class Task extends Component {
	test = (date, e) => {
		console.log(date);
	};

	deleteTask = (id, dispatch, text, date) => {
		dispatch({ type: 'DELETE_TASK', payload: id });
		dispatch({ type: 'DELETED_TASK', payload: { id, text, date } });
	};

	render() {
		const { id, text, date } = this.props.task;

		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					return (
						<li className="task" onClick={this.test.bind(this, date)}>
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
									onClick={this.deleteTask.bind(this, id, dispatch, text, date)}
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
