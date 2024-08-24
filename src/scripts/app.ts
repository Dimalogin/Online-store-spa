// Style

// Scripts
import State from "../state/state";

import WrapperView from "./view/wrapper/wrapperView";
import HeaderView from "./view/wrapper/header/headerView";

import { Pages, ID_SELECTOR } from "../pages/pages";

// Types

import { Routes } from "../types/types";

// Parameters

export default class App {
  #wrapperView: HTMLElement | null = null;
  #headerView: HeaderView | null = null;

  #state: State | null = null;
  #routes: Routes | null = null;

  constructor() {
    this.#setState();
    this.#setRoutes();
    // this.main = null;

    // const routes = this.createRoutes(state);
    // this.router = new Router(routes);
    /**
     * Раскомментировать для использования # в строке браузера
     */
    // this.router.setHashHandler();
    this.createView();
  }

  #setState() {
    this.#state = new State();
  }

  #setRoutes() {
    this.#routes = this.createRoutes(this.#state!);
  }

  #createHeaderView() {
    this.#headerView = new HeaderView();
  }

  createView() {
    //this.header = new HeaderView(this.router);
    //this.main = new MainView();
    // const footer = new FooterView();

    const wrapper = new WrapperView();
    document.body.append(wrapper.getHtmlElement());
  }

  createRoutes(state: State) {
    return [
      {
        path: ``,
        callback: async () => {
          const IndexView  = 
          this.setContent(Pages.INDEX, new IndexView(state));
        },
      },
    ];
  }

  setContent(page, view) {
    this.header.setSelectedItem(page);
    this.main.setContent(view);
  }
}
