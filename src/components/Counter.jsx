import React, { useState } from 'react';


const Counter = () => {
	const [count, setCount] = useState(0);

	const changeHandler = () => {
		setCount(count + 1);
		setCount(count + 1);
	}

	return (
		<div style={{ "fontSize": "3rem" }}>
			{count} <br />
			<button className="input-expr" onClick={changeHandler}>Increment</button>
		</div>
	)
}

export default Counter;