// Styles

import "./headerNavLiView.scss";

// Scripts

import View from "../../../../view";

// Types

import {
  ElementParams,
  HeaderLinksElements,
  PageParam,
} from "../../../../../../types/types";

// Parameters

const tag = {
  TAG: "li",
};

const cssClasses = {
  headerItem: "header__item",
};

// Pages

export default class HeaderNavLiView extends View {
  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [cssClasses.headerItem],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
      dataAttributes: [],
    };

    super(params);
  }
}
