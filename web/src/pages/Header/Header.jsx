import { Link } from '@reach/router';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BiCart } from 'react-icons/bi';
import { VscAccount } from 'react-icons/vsc';
import { useCart } from 'react-use-cart';
import logo from '../../img/Logo.png';
const Header = () => {
	const { isEmpty, totalItems } = useCart();

	return (
		<Navbar
			bg='dark'
			color='white'
			className='d-flex justify-content-between bg-green='
			collapseOnSelect
			expand='md'
			style={{ width: '100%', position: 'fixed', zIndex: 100 }}>
			<Container>
				<Link to='/'>
					<Navbar.Brand>
						<b>
							<img src={logo} className='logo w-25' alt='saylani' />
						</b>
					</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ms-auto'>
						<Link to='sign-in'> Logout</Link>

						<Link to='/cart'>
							<BiCart size='2rem' />
							{!isEmpty && <span style={{ position: 'relative', left: '-21px', top: '-18px' }}>{totalItems}</span>}
							<span style={{ marginLeft: !isEmpty ? '-13px' : 0 }}>&nbsp;Cart</span>
						</Link>
						<Link to='my-account'>
							<VscAccount size='1.8rem' />
							&nbsp;My Account
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
