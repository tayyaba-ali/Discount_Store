import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Welcome from './pages/Welcome/Welcome';

// Pages

function App() {
	return (
		<div className='App'>
			{/* <Welcome /> */}
			<>
				<Router>
					<Routes>
						<Route path='/' element={<Welcome />} />
						<Route path='/signup' element={<SignUp />} />
						<Route path='/signin' element={<SignIn />} />
						{/* <Route path='/contact' element={<Contact />} /> */}
					</Routes>
				</Router>
			</>
		</div>
	);
}

export default App;
