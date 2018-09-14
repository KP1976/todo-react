import React, { Component } from 'react';
import { Consumer } from '../../context';

class AddTasks extends Component {
	state = {
		text: '',
		date: '',
	};

	// W zależności jaki ma się atrybut name, pod taki podstawiona będzie wartość z inputa.
	// Pod zmienną text w state podstawiona będzie wartość wpisana w inpucie.
	// e.target.name musi być taki sam jak nazwa zmiennej (text).
	onChange = e => this.setState({ [e.target.name]: e.target.value });

	onSubmit = (dispatch, e) => {
		e.preventDefault();

		let { text, date } = this.state;

		// Jeżeli zadanie jest puste (nie ma nazwy) to wyjdź z funkcji
		if (text === '') {
			return;
		}

		// Dodanie daty stworzenia zadania
		const today = new Date();
		let day = today.getDate();
		let month = today.getMonth() + 1;
		let year = today.getFullYear();
		let hours = today.getHours();
		let minutes = today.getMinutes();

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

		date = `${day}.${month}.${year} godz. ${hours}:${minutes}`;

		// Stworzenie nowego zadania, gdzie id pobierane jest z aktualnej daty
		const newTask = {
			id: Date.now(),
			text,
			date,
		};

		dispatch({ type: 'ADD_TASK', payload: newTask });

		// Czyszczenie inputa
		this.setState({ text: '' });
	};

	render() {
		const { text } = this.state;

		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					return (
						<React.Fragment>
							<form
								className="add-task"
								onSubmit={this.onSubmit.bind(this, dispatch)}
							>
								<label htmlFor="text" className="add-task__label">
									Zadanie do wykonania
								</label>
								<input
									type="text"
									className="add-task__input"
									name="text"
									placeholder="Wpisz nazwę zadania"
									value={text}
									onChange={this.onChange}
								/>
								<input
									type="submit"
									value="dodaj"
									className="add-task__button"
								/>
							</form>
							<h2 className="tasks-list-container__title">
								lista zadań{' '}
								<strong className="tasks-list-container__title--yellow">
									do zrobienia
								</strong>
							</h2>
						</React.Fragment>
					);
				}}
			</Consumer>
		);
	}
}
export default AddTasks;
