import React from 'react'

const Symbol = ({ value, inputExpr, setInputExpr, memory, setMemory, className }) => {

	const changeInputHandler = () => {
		if (!setInputExpr)
			return;

		if (inputExpr[inputExpr.length - 1] === '0' && !isNaN(Number(value)) && (inputExpr.length === 1 || inputExpr[inputExpr.length - 2] in { '+': 0, '-': 0, '*': 0, '/': 0 })) {
			setInputExpr((prevInput) => prevInput.slice(0, prevInput.length - 1));
			setInputExpr((prevInput) => prevInput + value);
			return;
		}

		switch (value) {
			case 'M':
				if (inputExpr.length > 2)
					setMemory(new Set([inputExpr, ...memory]));
				setInputExpr('0');
				break;
			case 'RST':
				setMemory([]);
			case 'C': setInputExpr('0'); break;

			case '=':
				try {
					if (isNaN(Number(inputExpr[inputExpr.length - 1]))) {
						setInputExpr(inputExpr.slice(0, inputExpr.length - 1))
					}
					else {
						const res = eval(inputExpr);
						if (isNaN(res) || !isFinite(res))
							throw res;
						else
							setInputExpr(res.toString());
					}
				}
				catch (e) {
					alert('Error in expression, Expression results in ' + e)
				} break;

			case 'DEL':
				if (inputExpr.length === 1)
					setInputExpr('0');
				else
					setInputExpr(inputExpr.slice(0, inputExpr.length - 1));
				break;

			case '.':
				if (inputExpr.lastIndexOf('.') <= Math.max(...['+', '-', '*', '/'].map(el => inputExpr.lastIndexOf(el))))
					setInputExpr(inputExpr + value);
				break;

			case '*':
			case '/':
				if (inputExpr.length === 0 || inputExpr[inputExpr.length - 1] in { '*': 0, '/': 0 })
					break;

			case '+':
			case '-':
				if (inputExpr[inputExpr.length - 1] in { '+': 0, '-': 0, '.': 0 })
					break;

			default:
				setInputExpr(inputExpr + value);
		}
	}

	return (
		<button className={className} onClick={changeInputHandler}>
			{value}
		</button>
	)
}

export default Symbol