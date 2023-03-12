import React, { useEffect, useState } from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
// import SearchFilter from 'react-filer-search';
import axios from 'axios';
import SearchFilter from 'react-filter-search';
import { BiSearch } from 'react-icons/bi';
import one from '../../img/two.png';
import Header from '../Header/Header';
import ProductCard from '../Products/Products';

export default function Home() {
	const [searchInput, setSearchInput] = useState('');
	const [productData, setProductData] = useState([]);

	useEffect(() => {
		getData();
	}, []);
	const getData = async () => {
		await axios.get('https://fakestoreapi.com/products').then((res) => {
			setProductData(res.data);
		});
	};

	return (
		<div>
			<Header />
			<Container className='py-4'>
				<Row className='justify-content-center'>
					<Col xs={10} md={7} lg={6} xl={4} className='mb-3 mx-auto text-center'>
						<h1>Search Products</h1>
						<InputGroup className='mb-3'>
							<InputGroup.Text>
								<BiSearch size='2rem' />
							</InputGroup.Text>
							<FormControl placeholder='Search' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
						</InputGroup>
					</Col>

					<SearchFilter
						value={searchInput}
						data={productData}
						renderResults={(results) => (
							<Row className='justify-content-center'>
								{results.map((item, i) => (
									<ProductCard data={item} img={one} key={i} />
								))}
							</Row>
						)}
					/>
				</Row>
			</Container>
		</div>
	);
}
