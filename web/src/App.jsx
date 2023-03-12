import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Home from './pages/Home/Home';
import Welcome from './pages/Welcome/Welcome';
// import HomeScreen from './screens/HomeScreen';
// Pages

function App() {
	return (
		<div className='App'>
			<>
				<Router>
					<Routes>
						<Route path='/' element={<Welcome />} />
						<Route path='/signup' element={<SignUp />} />
						<Route path='/sign-in' element={<SignIn />} />
						<Route path='/products' element={<Home />} />
						{/* <Route path='/profile' element={<Profile />} /> */}
					</Routes>
				</Router>
			</>
		</div>
	);
}

export default App;
