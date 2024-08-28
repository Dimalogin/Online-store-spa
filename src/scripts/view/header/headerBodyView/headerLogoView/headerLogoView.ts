// Styles

import "./headerLogoView.scss";

// Scripts

import View from "../../../view";

import { Pages } from "../../../../../pages/pages";

// Types

import { ElementParams } from "../../../../../types/types";

// Pages

// Templates

import headerLogoTemplate from "../../../../../templates/headerLogoTemplate";

// Parameters

const tag = {
  TAG: "a",
};

const cssClasses = {
  headerLogo: "header__logo",
  logoHeader: "logo-header",
};

export default class HeaderLogoView extends View {
  #headerLogoTemplate: DocumentFragment | null = null;

  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [cssClasses.headerLogo, cssClasses.logoHeader],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
      dataAttributes: [],
    };

    super(params);
    this.#initHeaderLogoTemplate();
    this.#configureView();
  }

  #initHeaderLogoTemplate() {
    this.#headerLogoTemplate = headerLogoTemplate.content.cloneNode(
      true
    ) as DocumentFragment;
  }

  #configureView() {
    
    this.viewElementCreator?.addInnerElement(this.#headerLogoTemplate!);
  }
}
