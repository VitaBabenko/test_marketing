import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';

import '../index.scss';

import ImgLogo from '../Logo.png';
import ArrowDown from '../images/arrow-down.png';

const Age = () => {
	const [ageFrom, setAgeFrom] = useState('');
	const [ageTo, setAgeTo] = useState('');
	const [birthMonth, setBirthMonth] = useState('');
	const [birthDay, setBirthDay] = useState('');
	const [birthYear, setBirthYear] = useState('');
	const [error, setError] = useState({
		ageFrom: false,
		ageTo: false,
		birthMonth: false,
		birthDay: false,
		birthYear: false,
	});
	const [wasSubmitted, setWasSubmitted] = useState(false);

	const navigate = useNavigate();

	const handleNext = () => {
		setWasSubmitted(true);

		const newError = {
			ageFrom: !ageFrom,
			ageTo: !ageTo,
			birthMonth: !birthMonth,
			birthDay: !birthDay,
			birthYear: !birthYear,
		};

		setError(newError);

		const hasError = Object.values(newError).some((v) => v);
		if (hasError) return;

		localStorage.setItem('ageFrom', ageFrom);
		localStorage.setItem('ageTo', ageTo);
		localStorage.setItem('birthMonth', birthMonth);
		localStorage.setItem('birthDay', birthDay);
		localStorage.setItem('birthYear', birthYear);

		navigate('/content');
	};

	return (
		<div className='layout'>
			<header className='header'>
				<div className='container header__wrapper'>
					<img src={ImgLogo} alt='logo' />
				</div>
			</header>
			<main className='main'>
				<div className='container'>
					<ProgressBar />
					<h1 className='main__title'>
						Select your age preference
						<br /> for women
					</h1>
					<div className='main__age-select'>
						<div className='main__range'>
							<div className='main__select-wrapper'>
								<select
									value={ageFrom}
									onChange={(e) => {
										setAgeFrom(e.target.value);
										if (wasSubmitted && e.target.value) {
											setError(false);
										}
									}}
								>
									<option value=''>From</option>
									{Array.from({ length: 100 }, (_, i) => (
										<option key={i + 1} value={i + 1}>
											{i + 1}
										</option>
									))}
								</select>
								<img
									src={ArrowDown}
									alt='arrow'
									className='main__select-arrow'
								/>
							</div>
							<div className='main__select-wrapper'>
								<select
									value={ageTo}
									onChange={(e) => {
										setAgeTo(e.target.value);
										if (wasSubmitted && e.target.value) {
											setError(false);
										}
									}}
								>
									<option value=''>To</option>
									{Array.from({ length: 100 }, (_, i) => (
										<option key={i + 1} value={i + 1}>
											{i + 1}
										</option>
									))}
								</select>
								<img
									src={ArrowDown}
									alt='arrow'
									className='main__select-arrow'
								/>
							</div>
							{wasSubmitted && error && (
								<p className='error-message'>Please enter data</p>
							)}
						</div>

						<p className='main__question'>What is your age?</p>

						<div className='main__birthday'>
							<div className='main__birthday__select-wrapper'>
								<select
									value={birthMonth}
									onChange={(e) => {
										setBirthMonth(e.target.value);
										if (wasSubmitted && e.target.value) {
											setError(false);
										}
									}}
								>
									<option value=''>Month</option>
									{[
										'January',
										'February',
										'March',
										'April',
										'May',
										'June',
										'July',
										'August',
										'September',
										'October',
										'November',
										'December',
									].map((month, idx) => (
										<option key={idx} value={month}>
											{month}
										</option>
									))}
								</select>
								<img
									src={ArrowDown}
									alt='arrow'
									className='main__select-arrow'
								/>
							</div>
							<div className='main__birthday__select-wrapper'>
								<select
									value={birthDay}
									onChange={(e) => {
										setBirthDay(e.target.value);
										if (wasSubmitted && e.target.value) {
											setError(false);
										}
									}}
								>
									<option value=''>Day</option>
									{Array.from({ length: 31 }, (_, i) => (
										<option key={i + 1} value={i + 1}>
											{i + 1}
										</option>
									))}
								</select>
								<img
									src={ArrowDown}
									alt='arrow'
									className='main__select-arrow'
								/>
							</div>
							<div className='main__birthday__select-wrapper'>
								<select
									value={birthYear}
									onChange={(e) => {
										setBirthYear(e.target.value);
										if (wasSubmitted && e.target.value) {
											setError(false);
										}
									}}
								>
									<option value=''>Year</option>
									{Array.from({ length: 100 }, (_, i) => {
										const year = new Date().getFullYear() - i;
										return (
											<option key={year} value={year}>
												{year}
											</option>
										);
									})}
								</select>
								<img
									src={ArrowDown}
									alt='arrow'
									className='main__select-arrow'
								/>
							</div>
						</div>
					</div>
					<p className='main__text'>
						By proceeding, you confirm that you are fully legally capable of
						using this website and are at least 18 years old.
					</p>
					<button onClick={handleNext} type='button'>
						Continue →
					</button>
				</div>
			</main>
		</div>
	);
};

export default Age;
