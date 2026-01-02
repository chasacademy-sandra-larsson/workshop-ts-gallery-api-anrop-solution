export default function input({
    type,
    name,
    label,
    classes = "",
  }: {
    type: string;
    name: string;
    label: string;
    classes?: string;
  }) {
    const inputContainer = document.createElement("fieldset");
    inputContainer.className = classes;
    inputContainer.innerHTML = `
      <legend>${label}</legend>
      <input type="${type}" name="${name}" id="${name}">
    `;
    return inputContainer;
  }