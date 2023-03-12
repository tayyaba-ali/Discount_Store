import { Link } from '@reach/router';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { BsCartPlus } from 'react-icons/bs';
import { useCart } from 'react-use-cart';

export default function ProductCard(props) {
	let { price, title, id } = props.data;

	const { addItem } = useCart();

	const addToCart = () => {
		addItem(props.data);
	};

	return (
		<div>
			<Card
				style={{
					width: '38rem',
					height: 'auto',
					marginLeft: '2rem',
				}}>
				<Link to={`/product-details/${id}`}>
					<div
						style={{
							background: 'white',
							height: '15rem',
							overflow: 'hidden',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginBottom: 'inherit',
						}}>
						<div style={{ width: '22rem' }}>
							<Card.Img variant='top' src={props.img} className='img-fluid' />
						</div>
					</div>
				</Link>
				<Card.Body>
					<Card.Title style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
						{title}
					</Card.Title>
					<Card.Title>
						Rs. <span className='h3'>{price}</span>
					</Card.Title>
					<Button onClick={() => addToCart()}>
						<BsCartPlus size='1.8rem' />
						Add to cart
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
}
