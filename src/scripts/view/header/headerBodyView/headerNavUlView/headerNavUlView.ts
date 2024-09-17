// Styles

import "./headerNavUlView.scss";

// Scripts

import View from "../../../view";

// Types

import {
  ElementParams,
  HeaderLinksElements,
  PageParam,
} from "../../../../../types/types";

// Parameters

const tag = {
  TAG: "ul",
};

const cssClasses = {
  headerList: "header__list",
};

// Pages

export default class HeaderNavUlView extends View {
  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [cssClasses.headerList],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
      dataAttributes: [],
    };

    super(params);
  }
}
