export class FormField extends HTMLElement {
  constructor() {
    super();
  }
  // Placeholder
  get placeholder() {
    return this.getAttribute("placeholder");
  }
  set placeholder(value) {
    this.setAttribute("placeholder", value);
  }
  // ID
  get id() {
    return this.getAttribute("input-id");
  }
  set id(value) {
    this.setAttribute("input-id", value);
  }
  // Label
  get label() {
    return this.getAttribute("label");
  }
  set label(value) {
    this.setAttribute("label", value);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="custom-form-field">
                <input
                class="custom-form-field-input"
                type="text"
                placeholder="${this.placeholder}"
                id="${this.id}"
                name="${this.id}"
                />
                <label class="custom-form-field-label" for="${this.id}">${this.label}</label>
            </div>
        `;
  }
}
