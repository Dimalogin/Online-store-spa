// Styles

import "./headerSideBtnsView.scss";

// Scripts

import View from "../../../view";

// Types

import { ElementParams } from "../../../../../types/types";

// Pages

// Parameters

const tag = {
  TAG: "div",
};

const cssClasses = {
  headerSideBtns: "header__side-btns",
  sideBtnsHeader: "side-btns-header",
};

export default class HeaderSideBtnsView extends View {
  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [cssClasses.headerSideBtns, cssClasses.sideBtnsHeader],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
      dataAttributes: [],
    };

    super(params);
  }
}
