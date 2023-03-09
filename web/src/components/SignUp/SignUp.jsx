import AccountCircle from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SayalaniWelfare from '../SaylaniWelfare/SayalaniWelfare';

const theme = createTheme();

export default function Signup() {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			fullname: data.get('fullname'),
			contact: data.get('contact'),
			email: data.get('email'),
			password: data.get('password'),
		});

		let baseUrl = 'http://localhost:4000';
		try {
			let response = await axios.post(`${baseUrl}/users/signup`, {
				fullname: data.get('fullname'),
				contact: data.get('contact'),
				email: data.get('email'),
				password: data.get('password'),
			});
			console.log('response: ', response.data.message);
			// navigate('/signin');

			// const navigate = useNavigate();

			navigate('/signin');
		} catch (e) {
			console.log('Error in api call: ', e);
		}
	};
	// let [isLogin, setisLogin] = React.useState(false);
	// console.log(isLogin);
	return (
		<ThemeProvider theme={theme}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<SayalaniWelfare />

				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}>
					<Box component='form' validate='true' onSubmit={handleSubmit} sx={{ mt: 3 }}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<FormControl sx={{ m: 1, width: '40ch' }} variant='standard' required id='fullname'>
									<InputLabel htmlFor='fullname'>Full Name</InputLabel>
									<Input
										name='fullname'
										endAdornment={
											<InputAdornment position='end'>
												<AccountCircle />
											</InputAdornment>
										}
									/>
								</FormControl>
							</Grid>

							<Grid item xs={12}>
								<FormControl sx={{ m: 1, width: '40ch' }} variant='standard' required id='contact'>
									<InputLabel htmlFor='contact'>Contact</InputLabel>
									<Input
										name='contact'
										endAdornment={
											<InputAdornment position='end'>
												<CallIcon />
											</InputAdornment>
										}
									/>
								</FormControl>
							</Grid>

							<Grid item xs={12}>
								<FormControl sx={{ m: 1, width: '40ch' }} variant='standard' required>
									<InputLabel htmlFor='fullname'>Email</InputLabel>
									<Input
										name='email'
										endAdornment={
											<InputAdornment position='end'>
												<EmailIcon />
											</InputAdornment>
										}
									/>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<FormControl sx={{ m: 1, width: '40ch' }} variant='standard' required>
									<InputLabel htmlFor='password'>Password</InputLabel>
									<Input
										name='password'
										type={showPassword ? 'text' : 'password'}
										endAdornment={
											<InputAdornment position='end'>
												<IconButton
													aria-label='toggle password visibility'
													onClick={handleClickShowPassword}
													onMouseDown={handleMouseDownPassword}>
													{showPassword ? <VisibilityOff /> : <Visibility />}
												</IconButton>
											</InputAdornment>
										}
									/>
								</FormControl>
							</Grid>
						</Grid>

						<Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }} color='success'>
							Sign Up
						</Button>

						<Grid container justifyContent='flex-end'>
							<Grid item>
								<Link to='/signin'>Already have an account? Sign in</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				{/* <Copyright sx={{ mt: 5 }} /> */}
			</Container>
		</ThemeProvider>
	);
}
