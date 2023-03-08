import { CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
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
	// let { state, dispatch } = useContext(GlobalContext);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);

		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});

		let baseUrl = 'http://localhost:5001';
		try {
			let response = await axios.post(
				`${baseUrl}/login`,
				{
					email: data.get('email'),
					password: data.get('password'),
				},
				{
					withCredentials: true,
				},
			);
			console.log('response: ', response.data);

			// dispatch({
			// 	type: 'USER_LOGIN',
			// 	payload: response.data.profile,
			// });
		} catch (e) {
			console.log('Error in api call: ', e);
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
						<TextField
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							autoComplete='email'
							autoFocus
							variant='standard'
							InputProps={
								{
									// endAdornment: (
									// 	<InputAdornment position='end'>
									// 		<IconButton>
									// 			<Search />
									// 		</IconButton>
									// 	</InputAdornment>
									// ),
								}
							}
							// iconStart={<AccountCircleIcon />}
						/>

						<TextField
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
							variant='standard'
						/>
						<Grid container>
							<Grid item xs>
								<Link href='#' variant='body2'>
									Forgot password?
								</Link>
							</Grid>

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
