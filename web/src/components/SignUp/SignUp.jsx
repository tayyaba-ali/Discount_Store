import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import SayalaniWelfare from '../SaylaniWelfare/SayalaniWelfare';

// function Copyright(props) {
// 	return (
// 		<Typography variant='body2' color='text.secondary' align='center' {...props}>
// 			{'Copyright © '}
// 			<Link color='inherit' href='https://mui.com/'>
// 				Saylani
// 			</Link>{' '}
// 			{new Date().getFullYear()}
// 			{'.'}
// 		</Typography>
// 	);
// }

const theme = createTheme();

export default function SignUp() {
	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			firstName: data.get('firstName'),
			lastName: data.get('lastName'),
			email: data.get('email'),
			password: data.get('password'),
			agree: data.get('agree'),
		});

		// let baseUrl = 'http://localhost:5001';
		// try {
		// 	let response = await axios.post(`${baseUrl}/signup`, {
		// 		firstName: data.get('firstName'),
		// 		lastName: data.get('lastName'),
		// 		email: data.get('email'),
		// 		password: data.get('password'),
		// 	});
		// 	console.log('response: ', response.data.message);
		// } catch (e) {
		// 	console.log('Error in api call: ', e);
		// }
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
					<Box noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									autoComplete='given-name'
									name='Full Name'
									fullWidth
									required
									id='Full Name'
									label='Full Name'
									autoFocus
									variant='standard'
								/>
							</Grid>
							{/* <Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id='lastName'
									label='Last Name'
									name='lastName'
									autoComplete='family-name'
								/>
							</Grid> */}
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id='contact'
									label='Contact'
									name='contact'
									autoComplete='contact'
									variant='standard'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField required fullWidth name='email' label='Email' type='email' id='email' variant='standard' />
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name='password'
									label='Password'
									type='password'
									id='password'
									autoComplete='new-password'
									variant='standard'
								/>
							</Grid>
						</Grid>
						{/* <Link to='/login'> */}
						<Button type='submit' color='success' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
							Sign Up
						</Button>
						{/* </Link> */}
						<Grid container justifyContent='flex-end'>
							<Grid item>
								<Link to='/signin' variant='body2'>
									Already have an account? Log In in
								</Link>
							</Grid>
						</Grid>
						{/* <SignIn /> */}
					</Box>
					{/* <Copyright /> */}
				</Box>
			</Container>
		</ThemeProvider>
	);
}
