import Button from '@mui/material/Button';
import React from 'react';
export default function ButtonUse({ value }) {
	return (
		<div>
			<Button variant='contained' color='success'>
				{value}
			</Button>
		</div>
	);
}
