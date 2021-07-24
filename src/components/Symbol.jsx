import React from 'react'

const Symbol = ({ value, inputExpr, setInputExpr, memory, setMemory }) => {

	const changeInputHandler = () => {
		if (!setInputExpr)
			return;
		switch (value) {
			case 'M':
				if (!inputExpr) break;
				setMemory(new Set([inputExpr, ...memory]));
				break;
			case 'RST':
				setMemory([]);
			case 'C': setInputExpr(''); break;

			case '=':
				try {
					if (isNaN(Number(inputExpr[inputExpr.length - 1]))) {
						setInputExpr(inputExpr.slice(0, inputExpr.length - 1))
					} else
						setInputExpr(eval(inputExpr));
				}
				catch (e) {
					console.log('Error in expression')
				} break;

			case '<': setInputExpr(inputExpr.slice(0, inputExpr.length - 1)); break;

			case '*':
			case '/':
				if (inputExpr.length === 0 || inputExpr[inputExpr.length - 1] in { '*': 0, '/': 0 })
					break;

			case '+':
			case '-':
				if (inputExpr[inputExpr.length - 1] in { '+': 0, '-': 0 })
					break;

			default:
				setInputExpr(inputExpr + value)
		}
	}

	return (
		<button className={inputExpr !== undefined ? 'symbol-field' : 'input-expr'} onClick={changeInputHandler}>
			{value}
		</button>
	)
}

export default Symbol