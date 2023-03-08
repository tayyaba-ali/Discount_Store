// import { Button, Container, Grid, Typography } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import ButtonUse from '../../components/Button/ButtonUse';
import SayalaniWelfare from '../../components/SaylaniWelfare/SayalaniWelfare';
import logo from '../../img/Logo.png';

import './Welcome.css';
export default function Welcome() {
	return (
		<div className='container justify-content-center'>
			<div className='row justify-content-center'>
				<div className='col-md-6 d-flex justify-content-center flex-column'>
					<img src={logo} className='logo' alt='saylani' />
					<SayalaniWelfare />
				</div>
			</div>
			<div className='row justify-content-center'></div>
			<div className='row justify-content-center mt-4'>
				<div className='col-md-6 d-flex justify-content-center'>
					{/* <button className='Get-Started-btn'>
						<Link to='/SignUp'>GET STARTED</Link>
					</button> */}
					<Link to='/SignUp'>
						<ButtonUse value='GET STARTED'></ButtonUse>
					</Link>
				</div>
			</div>
		</div>
	);
}
