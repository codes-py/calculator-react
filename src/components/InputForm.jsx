import React from 'react'

const InputForm = ({ inputExpr, setInputExpr }) => {

	const inputChangeHandler = (event) => {
		setInputExpr(event.target.value)
	}

	return (
		<div>
			<form>
				<input type="text" value={inputExpr} onChange={inputChangeHandler} />
			</form>
		</div>
	)
}

export default InputForm