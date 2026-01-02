import input from "../../components/input";
import { type Painting } from "../../lib/api";
import { setPainting } from "../../lib/store";

export default function form() {
  const form = document.createElement("form");
  form.appendChild(
    input({ type: "text", name: "name", label: "Painting name" })
  );
  form.appendChild(
    input({ type: "text", name: "painterName", label: "Painter name" })
  );
  form.appendChild(
    input({
      type: "textarea",
      name: "description",
      label: "Painting description",
    })
  );
  form.appendChild(
    input({ type: "text", name: "imageUrl", label: "Image URL" })
  );
  
  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Add painting";
  form.appendChild(button);
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const { name, description, imageUrl, painterName } =
      Object.fromEntries(formData);
    setPainting({
      name,
      description,
      imageUrl,
      painter: { name: painterName },
    } as Painting);
  });
  
  return form;
}