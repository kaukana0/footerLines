/*
*/

const template = document.createElement('template');

template.innerHTML = `
<div id="footnote"></div>
<div id="footer"></div>
`

template.innerHTML += `<style>
#footnote{
	margin-top: 10px;
	font-size: 0.7em;
	width: 100%;
	float: left;
	text-align: center;
}

#footnote span{
	display:block;
	margin-top: 2px;
}

#footer {
	text-align: center;
	width: 100%;
	margin-top:12px;
}
</style>`


class MyElement extends HTMLElement {

	#_shadow

	#$(elementId) {
		return this.#_shadow.getElementById(elementId)
	}

	constructor() {
		super()
		this.#_shadow = this.attachShadow({ mode: 'open' })
		this.#_shadow.appendChild(template.content.cloneNode(true))
	}

	connectedCallback() {
        this.#$("footnote").innerText = this.getAttribute('footnote');
        this.#$("footer").innerText = this.getAttribute('footer');
	}

	static get observedAttributes() {
		return ['footnote', 'footer'];
	}
}

window.customElements.define('footer-lines', MyElement)
