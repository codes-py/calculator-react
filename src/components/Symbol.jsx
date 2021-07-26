import React from 'react'

const Symbol = ({ value, inputExpr, setInputExpr, memory, setMemory, className, errStatus, setErrStatus }) => {

	const changeInputHandler = () => {
		if (!setInputExpr)
			return;

		switch (value) {
			case 'M':
				if (!inputExpr) break;
				setMemory(new Set([inputExpr, ...memory]));
				setInputExpr('');
				break;
			case 'RST':
				setMemory([]);
			case 'C': setInputExpr(''); break;

			case '=':
				try {
					if (isNaN(Number(inputExpr[inputExpr.length - 1]))) {
						setInputExpr(inputExpr.slice(0, inputExpr.length - 1))
					} else
						setInputExpr(eval(inputExpr).toString());
				}
				catch (e) {
					setErrStatus(!errStatus);
					console.log('Error in expression')
				} break;

			case 'DEL': setInputExpr(inputExpr.slice(0, inputExpr.length - 1)); break;

			// case '0':
			// 	if (inputExpr.length == 0)
			// 		break;
			// 	if (inputExpr.length == 1 && inputExpr in { '+': 0, '-': 0 })
			// 		break;
			// 	setInputExpr(inputExpr + value);
			// 	break;

			case '*':
			case '/':
				if (inputExpr.length === 0 || inputExpr[inputExpr.length - 1] in { '*': 0, '/': 0 })
					break;

			case '+':
			case '-':
				if (inputExpr[inputExpr.length - 1] in { '+': 0, '-': 0, '.': 0 })
					break;

			default:
				if (value.indexOf('.') === -1)
					setInputExpr(inputExpr + value);

			case '.':
				if (inputExpr.lastIndexOf('.') <= Math.max(...['+', '-', '*', '/'].map(el => inputExpr.lastIndexOf(el))))
					setInputExpr(inputExpr + value);
				break;
		}
	}

	return (
		<button className={className} onClick={changeInputHandler}>
			{value}
		</button>
	)
}

export default Symbol