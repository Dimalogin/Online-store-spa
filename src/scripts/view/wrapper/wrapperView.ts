// Styles

import "./wrapperView.scss";

// Scripts

import View from "../view";

// Types

import { ElementParams } from "../../../types/types";

// Parameters

const tag = {
  DIV: "div",
};

const cssClasses = {
  WRAPPER: "wrapper",
};

export default class WrapperView extends View {
  constructor() {
    const params: ElementParams = {
      tag: tag.DIV,
      classNames: [cssClasses.WRAPPER],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
      dataAttributes: [],
    };

    super(params);
  }
}
