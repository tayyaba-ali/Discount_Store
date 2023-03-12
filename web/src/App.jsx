import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile/Profile';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Welcome from './pages/Welcome/Welcome';
import HomeScreen from './screens/HomeScreen';
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
						<Route path='/profile' element={<Profile />} />
						<Route path='/order/' component={HomeScreen} />
					</Routes>
				</Router>
			</>
		</div>
	);
}

export default App;
