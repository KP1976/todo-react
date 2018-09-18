import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TaskDone extends Component {
	render() {
		const { text, deleteDate } = this.props.deletedTask;

		return (
			<li className="task-done">
				<p className="task-done__name-task">{text}</p>
				<p className="task-done__date-task">
					Data ukończenia:
					<br />
					<span className="task-done__date-task-value">{deleteDate}</span>
				</p>
			</li>
		);
	}
}

TaskDone.propTypes = {
	deletedTask: PropTypes.object.isRequired,
};

export default TaskDone;
