// Styles

import "./headerBodyView.scss";

// Scripts

import View from "../../view";
import HeaderLogoView from "./headerLogoView/headerLogoView";

// Types

import { ElementParams } from "../../../../types/types";

// Parameters

const tag = {
  TAG: "div",
};

const cssClasses = {
  headerBody: "header__body",
};

export default class HeaderBodyView extends View {
  #headerBodyView: HTMLElement | null = null;

  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [cssClasses.headerBody],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
      dataAttributes: [],
    };

    super(params);

    this.#createHeaderLogoView();
    this.#configureView();
  }

  #createHeaderLogoView() {
    const headerLogoView = new HeaderLogoView();
    this.#headerBodyView = headerLogoView.getHtmlElement();
  }

  #configureView() {
    this.viewElementCreator?.addInnerElement(this.#headerBodyView!);
  }
}
