class Calculator extends Component {
	constructor(options) {
		super(options);
		this.value = 0;
		this.value2 = 0;

		this.input = document.getElementById('inputCalc');
		this.numbers = Object.values(document.getElementsByClassName('number'));
		this.operands = Object.values(document.getElementsByClassName('operand'));

		this.numbers.forEach(element => element.addEventListener('click', () => this.setNum(element)));
		this.operands.forEach(element => element.addEventListener('click', () => this.setOper(element)));
	}

	setNum(elem) {
		this.input.value = this.setValue(elem.innerHTML);
	}

	setOper(elem) {
		this.input.value = this[elem.dataset.operand]();
	}

	setValue(symbol) {
		if (this.value) {
			this.value = (this.value.toString() + symbol) - 0;
		} else {
			this.value = symbol - 0;
		}
		return this.value;
	};

	clear() {
		this.value = 0;
		this.value2 = 0;
		return this.value;
	};

	add() {
		this.operation = 'add';
		if (this.value && this.value2) {
			this.value = this.value + this.value2;
			return this.value;
		}
		this.value2 = this.value;
		this.value = 0;
		return this.value;
	};

	minus() {
		this.operation = 'minus';
		if (this.value && this.value2) {
			this.value = this.value2 - this.value;
			return this.value;
		} else {
			this.value2 = this.value;
			this.value = 0;
		}
		return this.value;
	};

	mult() {
		this.operation = 'mult';
		if (this.value && this.value2) {
			this.value = this.value * this.value2;
			return this.value;
		}
		this.value2 = this.value;
		this.value = 0;
		return this.value;
	};

	split() {
		this.operation = 'split';
		if (this.value && this.value2) {
			this.value = this.value2 / this.value;
			return this.value;
		} else {
			this.value2 = this.value;
			this.value = 0;
		}
		return this.value;
	};

	complRoot() {
		this.operation = 'complRoot';
		if (this.value && this.value2) {
			this.value = Math.pow(this.value, (1 / this.value2));
			return this.value;
		}
		this.value2 = this.value;
		this.value = 0;
		return this.value;
	};

	power() {
		this.operation = 'power';
		if (this.value && this.value2) {
			this.value = Math.pow(this.value2, this.value);
			return this.value;
		}
		this.value2 = this.value;
		this.value = 0;
		return this.value;
	};

	sinus() {
		this.operation = 'sinus';
		if (this.value) {
			this.value = Math.sin(this.value);
			return this.value;
		}
		this.value = 0;
		return this.value;
	};
	cosinus() {
		this.operation = 'cosinus';
		if (this.value) {
			this.value = Math.cos(this.value);
			return this.value;
		}
		this.value = 0;
		return this.value;
	};

	root() {
		this.operation = 'root';
		if (this.value) {
			this.value = Math.sqrt(this.value);
			return this.value;
		}
		this.value = 0;
		return this.value;
	};

	square() {
		this.operation = 'square';
		if (this.value) {
			this.value = Math.pow((this.value), 2);
			return this.value;
		}
		this.value = 0;
		return this.value;
	};

	plusminus() {
		this.operation = 'plusminus';
		if (this.value) {
			if (this.value < 0) {
				this.value = Math.abs(this.value);
			} else
				this.value = - (Math.abs(this.value));
			return this.value;
		}
		this.value = 0;
		return this.value;
	};

	absolute() {
		this.operation = 'absolute';
		if (this.value) {
			this.value = Math.abs(this.value);
			return this.value;
		}
		this.value = 0;
		return this.value;
	};

	equal() {
		if (this.operation && this[this.operation]) {
			var result = this[this.operation]();
			this.operation = null;
			return result;
		}
		return 0;
	};

	fillCalculator() {
		document.getElementById('elemA').innerHTML = this.genCalculatorHTML(this.a,'a');
		document.getElementById('elemB').innerHTML = this.genCalculatorHTML(this.b,'b');
	}

	genCalculatorHTML(elem, className) {
		if( elem instanceof Matrix) {
			return this.genMatrixHTML(elem.values.length, this.genCalculatorHTML(elem.values[0][0], className));
		} else if (elem instanceof Vector) {
			return this.genMatrixHTML(elem.values.length, this.genCalculatorHTML(elem.values[0], className));
		} else if (elem instanceof Complex) {
			return `<input class ="${className}" value = "${elem.re}"> + i*<input class ="${className}" value = "${elem.im}">`;
		}
		return `<input class ="${className}" value = "${elem}"></input>`;
	}

	genMatrixHTML(size, elem) {
		let str = '';
			for (let i=0 ; i < size; i++) {
				for (let j=0 ; j <size; j++) {
					str+= `${elem}, `;
				}
				str+= '<br>';
			}
		return `<span>(</span>${str}<span>)</span>`;
	}

	genVectorHTML(size, elem) {
		let str = '';
			for (let i=0 ; i < size; i++) {
					str+= `${elem}, `;
			}
		return `<span>(</span>${str}<span>)</span>`;
	}

	addElements() {
		this.fillElements();
		const c = this.calc.add(this.a, this.b);
	}

	subElements() {
		this.fillElements();
		const c = this.calc.sub(this.a, this.b);
	}

	multElements() {
		this.fillElements();
		const c = this.calc.mult(this.a, this.b);
	}

	divElements() {
		this.fillElements();
		const c = this.calc.div(this.a, this.b);
	}


	fillElements() {
		this.goToElementValues(this.a, document.querySelectorAll('.a'), this.b, document.querySelectorAll('.b'))
	}


	goToElementValues (elem, value, num = 0, length = 0) {
			if(elem instanceof Matrix) {
				elem.values.forEach((column,j) => column.forEach((el, i) => {
					const index = j*elem.values.length + i + num*length;
						if (typeof el === 'number') {
							elem.values[j][i] = values[index].value - 0;
						} else {
							this.goToElementValues(elem.values[j][i], values, index, elem.values.length + 1);
						}
				}));
			} else if (elem instanceof Vector) {
				elem.values.forEach((el,i) => {
					const index = i + num*length;
					if (typeof el === 'number') {
						elem.values[i] = values[index].value - 0;
				} else {
					this.goToElementValues(elem.values[i], values, index, elem, values.length + 1);
				}
			});
		} else if (elem instanceof Complex) {
			elem.re = values[num*2].value - 0;
			elem.im = values[num*2+1].value - 0;
		} else {
			elem = values[num].value - 0;
		}

	}
	
	













}