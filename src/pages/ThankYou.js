import React from 'react';

import '../index.scss';

import ImgLogo from '../Logo.png';
import ImgThanks from '../images/thank-you.png';

const ThankYou = () => {
	return (
		<div className='layout'>
			<header className='header'>
				<div className='container header__wrapper'>
					<img src={ImgLogo} alt='logo' />
				</div>
			</header>
			<main className='main'>
				<div className='container'>
					<img src={ImgThanks} alt='thank you' className='main__img' />
					<h1 className='main__title'>Thanks for your answers!</h1>
					<h2>
						Please check the box below to accept our rules. You’re all set!
					</h2>

					<div className='main__checkbox'>
						<label>
							<input type='checkbox' />
							<span className='main__checkbox-custom' />
							<span className='main__checkbox-text'>
								I have read, understand and agree to Terms of Use, Privacy
								Policy, Cookie Policy, Billing & Refund Policy, Disclosures &
								Disclaimers
							</span>
						</label>
					</div>

					<button type='button'>Join now →</button>
				</div>
			</main>
		</div>
	);
};

export default ThankYou;
