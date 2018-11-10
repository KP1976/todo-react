import React, { Component } from 'react';
import { Consumer } from '../../context';
import getDate from '../../getDate';

class ModifyTask extends Component {
	state = {
		text: '',
		date: '',
	};

	// W zależności jaki ma się atrybut name, pod taki podstawiona będzie wartość z inputa.
	// Pod zmienną text w state podstawiona będzie wartość wpisana w inpucie.
	// e.target.name musi być taki sam jak nazwa zmiennej (text).
	onChange = e => this.setState({ [e.target.name]: e.target.value });

	onSubmit = (dispatch, e) => {
		const errorDiv = document.querySelector('.error');
		e.preventDefault();

		let { text, date } = this.state;

		// Jeżeli zadanie jest puste (nie ma nazwy) to wyjdź z funkcji
		if (text === '') {
			errorDiv.classList.add('err-visible');
			setTimeout(() => errorDiv.classList.remove('err-visible'), 2000);
			return;
		}

		// Dodanie daty stworzenia zadania
		date = getDate();

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
						<form
							className="add-task"
							onSubmit={this.onSubmit.bind(this, dispatch)}
						>
							<label htmlFor="text" className="add-task__label">
								Zadanie do modyfikacji
							</label>
							<input
								type="text"
								className="add-task__input"
								name="text"
								placeholder="Wpisz nową nazwę zadania"
								value={text}
								onChange={this.onChange}
							/>
							<input
								type="submit"
								value="Zamień"
								className="add-task__button"
							/>
							<div className="error">
								Nie możesz zmodyfikować na puste zadanie!
							</div>
						</form>
					);
				}}
			</Consumer>
		);
	}
}
export default ModifyTask;
