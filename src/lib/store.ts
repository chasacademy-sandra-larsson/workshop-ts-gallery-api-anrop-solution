import {
  addPainting,
  getPaintings as getPaintingsRequest,
  type Painting,
} from "./api";

class Store {
  renderCallback: () => void;

  constructor() {
    this.renderCallback = () => {};
  }

  async getPaintings() {
    try {
      const paintings = await getPaintingsRequest();
      return paintings;
    } catch (error) {
      return [];
    }
  }

  async setPainting(painting: Painting) {
    try {
      await addPainting(painting);
      this.triggerRender();
    } catch (error) {
      console.error("Failed to add painting:", error);
      throw error;
    }
  }

  setRenderCallback(renderApp: () => void) {
    this.renderCallback = renderApp;
  }

  triggerRender() {
    if (this.renderCallback) {
      this.renderCallback();
    }
  }
}
const store = new Store();

export const getPaintings = store.getPaintings.bind(store);
export const setPainting = store.setPainting.bind(store);
export const setRenderCallback = store.setRenderCallback.bind(store);