import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';

class Task extends Component {
	test = (date, e) => {
		console.log(date);
	};

	deleteTask = (id, dispatch, text) => {
		const today = new Date();
		let day = today.getDate();
		let month = today.getMonth() + 1;
		let year = today.getFullYear();
		let hours = today.getHours();
		let minutes = today.getMinutes();
		let seconds = today.getSeconds();

		if (month < 10) {
			month = '0' + month.toString();
		}

		if (day < 10) {
			day = '0' + day.toString();
		}

		if (hours < 10) {
			hours = '0' + hours.toString();
		}

		if (minutes < 10) {
			minutes = '0' + minutes.toString();
		}

		let deleteDate = `${day}.${month}.${year} godz. ${hours}:${minutes}:${seconds}`;

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
