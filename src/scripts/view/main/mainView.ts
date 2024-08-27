// Styles

import "./mainView.scss";

// Scripts

import View from "../view";
import ContainerView from "../container/containerView";

// Types

import { ElementParams } from "../../../types/types";
import { Components } from "../../../types/types";

// Parameters

const tag = {
  TAG: "main",
};

const cssClasses = {
  MAIN: "main",
};

export default class MainView extends View {
  #containerView: HTMLElement | null = null;

  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [cssClasses.MAIN],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
      dataAttributes: [],
    };

    super(params);
    this.#createContainerView();
  }

  #createContainerView(): void {
    const mainContainerParams = {
      CONTAINER: "main",
    };

    const containerView = new ContainerView(mainContainerParams);
    this.#containerView = containerView.getHtmlElement();
  }

  setContent(content: Components) {
    const htmlElement = this.viewElementCreator!.getElement();

    while (htmlElement.firstElementChild) {
      htmlElement.firstElementChild.remove();
    }
    this.viewElementCreator!.addInnerElement(content.getHtmlElement());
  }
}
