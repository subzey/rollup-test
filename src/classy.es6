import {text as htmlText} from './classyconsts.es6';

export class ClassyClass {
	constructor(parentElement) {
		const element = document.createElement('span')
		element.textContent = htmlText;
		parentElement.appendChild(element);
		this._element = element;
	}

	destroy() {
		if (this._element && this._element.parentNode) {
			this._element.parentNode.removeChild(this._element);
		}
		this._element = null;
	}

	setColor(color) {
		if (this._element) {
			this._element.style.color = color;
		}
	}
}