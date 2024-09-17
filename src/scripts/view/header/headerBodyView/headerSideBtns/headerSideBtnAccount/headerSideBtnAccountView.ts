// Styles

import "./headerSideBtnAccountView.scss";

// Scripts

import View from "../../../../view";
import HeaderNavLinkView from "../../headerNavUlView/headerNavLiView/headerNavLinkView/headerNavLinkView";

// Types

import { ElementParams, PageParam } from "../../../../../../types/types";

// Templates

import headerSideBtnsAccountTemplate from "../../../../../../templates/header/headerSideBtnsAccountTemplate";

// Pages

// Parameters

const tag = {
  TAG: "a",
};

const cssClasses = {
  sideBtnsHeaderBtns: "side-btn-header__btn",
  sideBtnsHeaderAccount: "side-btn-header__account",
  headerLinkSelected: "header__link--selected",
};

export default class HeaderSideBtnAccountView extends View {
  #headerSideBtnAccountIconView: DocumentFragment | null = null;
  #headerLinksElements: Map<string, HeaderNavLinkView> | null = null;

  constructor(
    pageParam: PageParam,
    headerLinksElements: Map<string, HeaderNavLinkView>
  ) {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [
        cssClasses.sideBtnsHeaderBtns,
        cssClasses.sideBtnsHeaderAccount,
      ],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
      dataAttributes: [],
    };

    super(params);
    this.#headerLinksElements = headerLinksElements;

    this.#createHeaderSideBtnAccountIconView();
    this.#configureView(pageParam);
  }

  #setNotSelectedStatus() {
    this.#headerLinksElements!.forEach((headerLinkElement) =>
      headerLinkElement.setNotSelectedStatus()
    );
  }

  #createHeaderSideBtnAccountIconView() {
    this.#headerSideBtnAccountIconView =
      headerSideBtnsAccountTemplate.content.cloneNode(true) as DocumentFragment;
  }

  #configureView(pageParam: PageParam) {
    this.viewElementCreator?.addInnerElement(
      this.#headerSideBtnAccountIconView!
    );

    this.viewElementCreator?.setCallback(pageParam.callback);
    const element = this.viewElementCreator!.getElement();
    element.addEventListener("click", this.#setNotSelectedStatus.bind(this));
  }
}
