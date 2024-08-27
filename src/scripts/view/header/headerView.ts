const headerNavTemplate = document.createElement("template");

headerNavTemplate.innerHTML = `
<nav>
  <ul>
    <li>
      <a class = 'nav-link-home' href = '#home'>Home</a>
    </li>
    <li>
      <a href = '#catalog'>Catalog</a>
    </li>
    <li>
      <a href='#about'>About</a>  
    </li>
  </ul>
</nav>
`;

// Styles

import "./headerView.scss";

// Scripts

import View from "../view";
import ContainerView from "../container/containerView";
//import HeaderBodyView from "./headerBody/headerBodyView";

// Types

import { ElementParams } from "../../../types/types";

// Parameters

const tag = {
  TAG: "header",
};

const cssClasses = {
  HEADER: "header",
};

export default class HeaderView extends View {
  #containerView: HTMLElement | null = null;
  #headerNavFullView: DocumentFragment | null = null;

  #navLinkHome: HTMLElement | null = null;

  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [cssClasses.HEADER],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
      dataAttributes: [],
    };

    super(params);

    this.#initHeaderNavTemplate();

    this.#createContainerView();
    this.#createHeaderNavView();
    //this.#createHeaderBodyView();

    this.#bindListeners();
    this.#configureView();
  }

  #initHeaderNavTemplate() {
    this.#headerNavFullView = headerNavTemplate.content.cloneNode(
      true
    ) as DocumentFragment;

    this.#navLinkHome = this.#headerNavFullView.querySelector(".nav-link-home");
  }

  #createContainerView(): void {
    const headerContainerParams = {
      CONTAINER: "header",
    };

    const containerView = new ContainerView(headerContainerParams);
    this.#containerView = containerView.getHtmlElement();
  }

  #createHeaderNavView() {
    this.#containerView?.appendChild(this.#headerNavFullView!);
  }

  /*
  #createHeaderBodyView(): void {
    const headerBodyView = new HeaderBodyView();

    this.#containerView?.appendChild(headerBodyView.getHtmlElement());
  }
*/

  #bindListeners() {}

  #configureView() {
    this.viewElementCreator?.addInnerElement(this.#containerView!);
  }
}
