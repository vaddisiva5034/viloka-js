export const RegisterComponents = (components) => {
  components.forEach((component) => {
    customElements.define(component.selector, component);
  });
};
