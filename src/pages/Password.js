import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../index.scss';

import ImgLogo from '../Logo.png';
import ProgressBar from '../components/ProgressBar';

const Password = () => {
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState({
		password: false,
		confirm: false,
	});
	const navigate = useNavigate();

	const handleNext = () => {
		const passwordError = password.length < 8;
		const confirmError = password !== confirmPassword;

		setError({
			password: passwordError,
			confirm: confirmError,
		});

		if (passwordError || confirmError) return;

		localStorage.setItem('password', password);
		navigate('/thank-you');
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
					<h1 className='main__title'>Create your password</h1>
					<div className='main__inputs-password'>
						<div className='main__error'>
							<input
								className='main__name'
								type='password'
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
									if (error.password && e.target.value.length >= 8) {
										setError((prev) => ({ ...prev, password: false }));
									}
								}}
								placeholder='Your password'
							/>
							{error.password && (
								<p className='error-message'>Must be 8 characters</p>
							)}
						</div>
						<div className='main__error'>
							<input
								className='main__name'
								type='password'
								value={confirmPassword}
								onChange={(e) => {
									setConfirmPassword(e.target.value);
									if (error.confirm && e.target.value === password) {
										setError((prev) => ({ ...prev, confirm: false }));
									}
								}}
								placeholder='Confirm password'
							/>
							{error.confirm && <p className='error-message'>Don`t match</p>}
						</div>
					</div>

					<p className='main__text main__text-password'>
						Passwords must be at least 8 characters long. You can recover
						passwords at any time using the email address you provided.
					</p>

					<button onClick={handleNext} type='button'>
						Continue →
					</button>
				</div>
			</main>
		</div>
	);
};

export default Password;
