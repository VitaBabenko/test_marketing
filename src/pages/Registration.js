import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../index.scss';

import ImgLogo from '../Logo.png';
import CookieBanner from '../components/CookieBanner';
import ProgressBar from '../components/ProgressBar';
import ImgList1 from '../images/img-1.png';
import ImgList2 from '../images/img-2.png';
import ImgList3 from '../images/img-3.png';
import ImgList4 from '../images/img-4.png';
import ImgList5 from '../images/img-5.png';
import ImgMan from '../images/man.png';
import ImgWoman from '../images/woman.png';

const Registration = () => {
	const navigate = useNavigate();

	return (
		<div className='layout'>
			<header className='header'>
				<div className='container header__container'>
					<img src={ImgLogo} alt='logo' />
					<div className='header__account'>
						<p>Already have an account?</p>
						<button type='button'>Sign in</button>
					</div>
				</div>
			</header>
			<main className='main main__registration'>
				<div className='container'>
					<ProgressBar />
					<h1 className='main__title'>Glad you're here!</h1>
					<ul className='main__list'>
						<li>
							<img src={ImgList1} alt='girl 1' />
						</li>
						<li>
							<img src={ImgList2} alt='girl 2' />
						</li>
						<li>
							<img src={ImgList3} alt='girl 3' />
						</li>
						<li>
							<img src={ImgList4} alt='girl 4' />
						</li>
						<li>
							<img src={ImgList5} alt='girl 5' />
						</li>
					</ul>
					<h2 className='main__subtitle'>Select your sex</h2>
					<ul className='main__select'>
						<li>
							<img src={ImgMan} alt='man' />
							<p>Male</p>
						</li>
						<li>
							<img src={ImgWoman} alt='woman' />
							<p>Female</p>
						</li>
					</ul>
					<button onClick={() => navigate('/name')} type='button'>
						Continue →
					</button>
				</div>
			</main>
			<footer className='footer'>
				<div className='container'>
					<ul>
						<li>
							<a
								href='https://amourlee.com/terms-of-use/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Terms of Use
							</a>
						</li>
						<li>
							<a
								href='https://amourlee.com/billing-policy/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Billing policy
							</a>
						</li>
						<li>
							<a
								href='https://amourlee.com/cookie-policy/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Cookie Policy
							</a>
						</li>
						<li>
							<a
								href='https://amourlee.com/refund-policy/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Refund Policy
							</a>
						</li>
						<li>
							<a
								href='https://amourlee.com/privacy-policy/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Privacy Policy
							</a>
						</li>
						<li>
							<a
								href='https://amourlee.com/risks-notice/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Risks Notice
							</a>
						</li>
						<li>
							<a
								href='https://amourlee.com/disclosures-disclaimers/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Disclosures and Disclaimers
							</a>
						</li>
						<li>
							<a href='mailto:support@amourlee.com'>Contact Us</a>
						</li>
					</ul>
				</div>
			</footer>
			<CookieBanner />
		</div>
	);
};

export default Registration;
