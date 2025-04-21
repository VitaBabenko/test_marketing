import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../index.scss';

import ImgLogo from '../Logo.png';
import ProgressBar from '../components/ProgressBar';

const Name = () => {
	const [name, setName] = useState('');
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	const handleNext = () => {
		if (!name.trim()) {
			setError(true);
			return;
		}

		setError(false);

		localStorage.setItem('name', name);
		navigate('/age');
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
					<h1 className='main__title' style={{ width: '100%' }}>
						What name should users call you?
					</h1>
					<div className='main__error'>
						<input
							className='main__name'
							type='text'
							value={name}
							onChange={(e) => {
								const value = e.target.value;
								setName(value);
								if (value.trim().length > 0) {
									setError(false);
								}
							}}
							placeholder='Type your username'
						/>
						{error && <p className='error-message'>Please enter name</p>}
					</div>
					<p className='main__text'>
						You don’t have to use your real name – feel free to use a nickname.
						You can change it anytime.
					</p>
					<button onClick={handleNext} type='button'>
						Continue →
					</button>
				</div>
			</main>
		</div>
	);
};

export default Name;
