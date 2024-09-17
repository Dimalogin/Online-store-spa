// Styles

import "./headerNavLinkView.scss";

// Scripts

import View from "../../../../../view";

// Types

import {
  ElementParams,
  HeaderLinksElements,
  PageParam,
} from "../../../../../../../types/types";

// Parameters

const tag = {
  TAG: "a",
};

const cssClasses = {
  headerLink: "header__link",
  headerLinkSelected: "header__link--selected",
};

// Pages

export default class HeaderNavLinkView extends View {
  #headerLinksElements: Map<string, HeaderNavLinkView> | null = null;

  constructor(
    pageParam: PageParam,
    headerLinksElements: Map<string, HeaderNavLinkView>
  ) {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [cssClasses.headerLink],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
      dataAttributes: [],
    };

    super(params);

    this.#headerLinksElements = headerLinksElements;
    this.#configureView(pageParam);
  }

  #setFirstLetterUpperCase(name: string): string {
    return name[0].toUpperCase() + name.slice(1);
  }

  setSelectedStatus() {
    this.#headerLinksElements!.forEach((headerLinkElement) =>
      headerLinkElement.setNotSelectedStatus()
    );

    const element = this.viewElementCreator?.getElement();
    element!.classList.add(cssClasses.headerLinkSelected);
  }

  setNotSelectedStatus() {
    const element = this.viewElementCreator?.getElement();
    element!.classList.remove(cssClasses.headerLinkSelected);
  }

  #configureView(pageParam: PageParam) {
    const name = this.#setFirstLetterUpperCase(pageParam.name);
    this.viewElementCreator?.setTextContent(name);
    this.viewElementCreator?.setCallback(pageParam.callback);

    const element = this.viewElementCreator!.getElement();
    element.addEventListener("click", this.setSelectedStatus.bind(this));
  }
}
