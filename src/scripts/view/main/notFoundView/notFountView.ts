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
      textContent: "Page Not Found",
      callback: null,
      attributes: [],
      identificators: [],
      dataAttributes: [],
    };

    super(params);
  }
}
