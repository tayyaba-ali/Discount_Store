import EmailIcon from '@mui/icons-material/Email';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import * as React from 'react';
import SayalaniWelfare from '../SaylaniWelfare/SayalaniWelfare';

// import { GlobalContext } from '../../context';

// function Copyright(props) {
// 	return (
// 		<Typography variant='body2' color='text.secondary' align='center' {...props}>
// 			{'Copyright © '}
// 			<Link color='inherit' href='https://mui.com/'>
// 				sysBorg
// 			</Link>{' '}
// 			{new Date().getFullYear()}
// 			{'.'}
// 		</Typography>
// 	);
// }

const theme = createTheme();

export default function SignIn() {
	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	// let { state, dispatch } = useContext(GlobalContext);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);

		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});

		let baseUrl = 'http://localhost:4000';
		try {
			let response = await axios.post(
				`${baseUrl}/users/signin`,
				{
					email: data.get('email'),
					password: data.get('password'),
				},
				// {
				// 	withCredentials: true,
				// },
			);
			console.log('response: ', response.data);

			// dispatch({
			// 	type: 'USER_LOGIN',
			// 	payload: response.data.profile,
			// });
		} catch (error) {
			console.log(error.response.data);
			// console.log(e.mesage);
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}>
					<SayalaniWelfare />
					<Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
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
						{/* <TextField
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
							variant='standard'
						/> */}
						<FormControl sx={{ m: 1, width: '40ch' }} variant='standard' required>
							<InputLabel htmlFor='standard-adornment-password'>Password</InputLabel>
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
						<Grid container>
							<Button type='submit' color='success' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
								Sign In
							</Button>

							<Grid item>
								<Link href='/signup' variant='body2'>
									{"Don't have an account? Register"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				{/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
			</Container>
		</ThemeProvider>
	);
}
