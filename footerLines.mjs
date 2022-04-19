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

	#$(elementId) {
		return this.shadowRoot.getElementById(elementId)
	}

	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
		this.shadowRoot.appendChild(template.content.cloneNode(true))
	}

	static get observedAttributes() {
		return ['footnote', 'footer'];
	}

	attributeChangedCallback(name, oldVal, newVal) {
		if (oldVal === newVal) { return }
		if (name === 'footnote') { this.footnote = newVal }
		if (name === 'footer') { this.footer = newVal }
	}

	connectedCallback() {
		this.footnote = this.getAttribute('footnote');
		this.footer = this.getAttribute('footer');
	}

	set footnote(v) { this.#$("footnote").innerText = v; }
	set footer(v) { this.#$("footer").innerText = v; }
}

window.customElements.define('footer-lines', MyElement)
