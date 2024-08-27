// Styles

import "./notFoundView.scss";

// Scripts

import View from "../../view";
import ContainerView from "../../container/containerView";

// Types

import { ElementParams } from "../../../../types/types";
import State from "../../../../state/state";

// Parameters

const tag = {
  TAG: "div",
};

const cssClasses = {};

export default class NotFoundView extends View {
  #containerView: HTMLElement | null = null;

  constructor(state: State) {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [],
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
}
