import React from 'react';
import { Consumer } from '../../context';
import TaskDone from './TaskDone';

const TasksDoneList = () => {
	return (
		<Consumer>
			{value => {
				const { deletedTasks } = value;

				// Zapisujemy w LocalStorage nową tablicę z zadaniami
				localStorage.setItem('deletedTasks', JSON.stringify(deletedTasks));

				return (
					<ul className="tasks-done-list">
						{deletedTasks.map(deletedTask => (
							<TaskDone key={deletedTask.id} deletedTask={deletedTask} />
						))}
					</ul>
				);
			}}
		</Consumer>
	);
};

export default TasksDoneList;
