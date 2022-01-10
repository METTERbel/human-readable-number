module.exports = function toReadable (number) {
    number = number.toString();

	function getHundreds(){
		let hundreds = number[number.length - 3];
		if (hundreds == 1) {
		return 'one hundred'
		} else if (hundreds == 2) {
		return 'two hundred'
		} else if (hundreds == 3) {
		return 'three hundred'
		} else if (hundreds == 4) {
		return 'four hundred'
		} else if (hundreds == 5) {
		return 'five hundred'
		} else if (hundreds == 6) {
		return 'six hundred'
		} else if (hundreds == 7) {
		return 'seven hundred'
		} else if (hundreds == 8) {
		return 'eight hundred'
		} else if (hundreds == 9) {
		return 'nine hundred'
		} else {
		return ''
		}
	}

	function getTens(){
		if (number.slice(-2) == 10) {
		return 'ten'
		} else if ((number[number.length - 2]) == 2)  {
		return 'twenty'
		} else if ((number[number.length - 2]) == 3) {
		return 'thirty'
		} else if ((number[number.length - 2]) == 4) {
		return 'forty'
		} else if ((number[number.length - 2]) == 5) {
		return 'fifty'
		} else if ((number[number.length - 2]) == 6) {
		return 'sixty'
		} else if ((number[number.length - 2]) == 7) {
		return 'seventy'
		} else if ((number[number.length - 2]) == 8) {
		return 'eighty'
		} else if ((number[number.length - 2]) == 9) {
		return 'ninety'
		} else {
		return '';
		}
	}

	function getTeens(){
		if (number.slice(-2) == 11) {
		return 'eleven'
		} else if (number.slice(-2) == 12) {
		return 'twelve'
		} else if (number.slice(-2) == 13) {
		return 'thirteen'
		} else if (number.slice(-2) == 14) {
		return 'fourteen'
		} else if (number.slice(-2) == 15) {
		return 'fifteen'
		} else if (number.slice(-2) == 16) {
		return 'sixteen'
		} else if (number.slice(-2) == 17) {
		return 'seventeen'
		} else if (number.slice(-2) == 18) {
		return 'eighteen'
		} else if (number.slice(-2) == 19) {
		return 'nineteen'
		} else {
		return '';
		}
	}

	function getOnes(){
		if (number.slice(-1) == 1) {
		return 'one'
		} else if (number.slice(-1) == 2) {
		return 'two'
		} else if (number.slice(-1) == 3) {
		return 'three'
		} else if (number.slice(-1) == 4) {
		return 'four'
		} else if (number.slice(-1) == 5) {
		return 'five'
		} else if (number.slice(-1) == 6) {
		return 'six'
		} else if (number.slice(-1) == 7) {
		return 'seven'
		} else if (number.slice(-1) == 8) {
		return 'eight'
		} else if (number.slice(-1) == 9) {
		return 'nine'
		} else {
		return ''
		}
	}

	let spaceAfterHundreds = '';
	if ((getHundreds() != '') && (number.slice(-2) != 00)) {
		spaceAfterHundreds = ' ';
    }

	let spaceAfterTens = '';
    if ((getTens() != '') && (getTens() != 'ten') && (getOnes() != '')) {
		spaceAfterTens = ' ';
    }

	if (number == 0) {
		return 'zero';
	} else if (getTeens() != '') {
		return getHundreds() + spaceAfterHundreds + getTeens();
	} else {
		return getHundreds() + spaceAfterHundreds + getTens() + spaceAfterTens + getOnes();
	}

}
