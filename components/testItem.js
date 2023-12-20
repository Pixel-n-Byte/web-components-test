export class TestItem extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    this.innerHTML = `<h1 class="${this.classList}">${this.innerHTML}</h1>`;
  }
}