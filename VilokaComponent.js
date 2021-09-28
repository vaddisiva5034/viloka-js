export class VilokaComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.state = {};
    this.setState = this.setState.bind(this);
    this.addElementToDom = this.addElementToDom.bind(this);
  }

  connectedCallback() {
    this.addElementToDom();
    this.addEventListeners();
  }

  setState(state) {
    this.state = state;
    this.addElementToDom();
    this.addEventListeners();
  }

  addEventListeners() {}

  addElementToDom() {
    this.shadow.innerHTML = this.render();
  }

  render() {
    this.shadow.innerHTML = ``;
  }
}
