import { getPaintings } from "./../../lib/api";

async function loadPaintings(paintingsElement: HTMLElement) {
    try {
        const paintings = await getPaintings();
        paintings.forEach(painting => {
            const paintingElement = document.createElement("div");
            paintingElement.classList.add("painting");
            paintingElement.innerHTML = `
                <img src="${painting.imageUrl}" alt="${painting.name}" />
                <h2>${painting.name}</h2>
                <p>${painting.description}</p>
            `;
            paintingsElement.appendChild(paintingElement);
        });
    } catch (error) {
        console.error("Failed to load paintings:", error);
    }
}
export default function paintings() {
    const paintingsElement  = document.createElement("div");
    paintingsElement.classList.add("paintings");
    loadPaintings(paintingsElement);
    return paintingsElement;
}