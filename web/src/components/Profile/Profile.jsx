import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/context';

export default function Profile() {
	let { state, dispatch } = useContext(GlobalContext);
	return (
		<div>
			I am About - {state.myNum}
			<button
				onClick={() =>
					dispatch({
						type: 'ADD',
					})
				}>
				Add
			</button>
		</div>
	);
}
