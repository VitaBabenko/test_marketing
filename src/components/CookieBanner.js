import React, { useEffect, useState } from 'react';
import '../index.scss';

const CookieBanner = () => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const accepted = localStorage.getItem('cookiesAccepted');
		if (!accepted) {
			const timer = setTimeout(() => setShow(true), 3000);
			return () => clearTimeout(timer);
		}
	}, []);

	const handleAccept = () => {
		localStorage.setItem('cookiesAccepted', 'true');
		setShow(false);
	};

	if (!show) return null;

	return (
		<div className='cookie__banner'>
			<p>
				We use cookies to make your experience better! If you continue to use
				this site we will assume you are happy with it.
			</p>

			<button onClick={handleAccept}>Sign in</button>
		</div>
	);
};

export default CookieBanner;
