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

}