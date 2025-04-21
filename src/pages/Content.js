import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ImgLogo from '../Logo.png';
import ProgressBar from '../components/ProgressBar';
import Content1 from '../images/content-1.png';
import Content2 from '../images/content-2.png';

const Content = () => {
	const [email, setEmail] = useState('');
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

	const handleNext = () => {
		if (!email.trim() || !isValidEmail(email)) {
			setError(true);
			return;
		}

		setError(false);

		localStorage.setItem('email', email);
		navigate('/password');
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
					<h1 className='main__title'>What kind of content do you enjoy? 👀</h1>
					<ul className='main__list-content'>
						<li>
							<img src={Content1} alt='content hot' />
							<p>Hot</p>
						</li>
						<li>
							<img src={Content2} alt='content trendy' />
							<p>Trendy</p>
						</li>
					</ul>
					<p className='main__question'>What is your email address?</p>
					<div className='main__error'>
						<input
							className='main__name'
							type='email'
							value={email}
							onChange={(e) => {
								const value = e.target.value;
								setEmail(value);
								if (value.trim().length > 0) {
									setError(false);
								}
							}}
							placeholder='Type your email'
						/>
						{error && <p className='error-message'>Please enter email</p>}
					</div>
					<p className='main__text-content'>
						Email is required for registration.
					</p>
					<button onClick={handleNext} type='button'>
						Continue →
					</button>
				</div>
			</main>
		</div>
	);
};

export default Content;
