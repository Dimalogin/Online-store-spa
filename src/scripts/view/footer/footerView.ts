// Styles

import "./footerView.scss";

// Scripts

import View from "../view";
import ContainerView from "../container/containerView";
//import HeaderBodyView from "./headerBody/headerBodyView";

// Types

import { ElementParams } from "../../../types/types";

// Parameters

const tag = {
  TAG: "footer",
};

const cssClasses = {
  HEADER: "footer",
};

export default class FooterView extends View {
  #containerView: HTMLElement | null = null;

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

    this.#createContainerView();
    //this.#createHeaderBodyView();
    this.#configureView();
  }

  #createContainerView(): void {
    const footerContainerParams = {
      CONTAINER: "footer",
    };

    const containerView = new ContainerView(footerContainerParams);
    this.#containerView = containerView.getHtmlElement();
  }

  /*
  #createHeaderBodyView(): void {
    const headerBodyView = new HeaderBodyView();

    this.#containerView?.appendChild(headerBodyView.getHtmlElement());
  }
*/
  #configureView() {
    this.viewElementCreator?.addInnerElement(this.#containerView!);
  }
}
