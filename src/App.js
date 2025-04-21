import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Age from './pages/Age';
import Content from './pages/Content';
import Name from './pages/Name';
import Password from './pages/Password';
import Registration from './pages/Registration';
import ThankYou from './pages/ThankYou';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Registration />} />
				<Route path='/name' element={<Name />} />
				<Route path='/age' element={<Age />} />
				<Route path='/content' element={<Content />} />
				<Route path='/password' element={<Password />} />
				<Route path='/thank-you' element={<ThankYou />} />
			</Routes>
		</Router>
	);
}

export default App;
