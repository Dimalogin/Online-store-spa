// Styles

import "./headerSideBtnShoppingCartView.scss";

// Scripts

import View from "../../../../view";

// Types

import { ElementParams, PageParam } from "../../../../../../types/types";

// Templates

import headerSideBtnsShoppingCartTemplate from "../../../../../../templates/header/headerSideBtnsShoppingCartTemplate";

// Pages

// Parameters

const tag = {
  TAG: "a",
};

const cssClasses = {
  sideBtnsHeaderBtns: "side-btn-header__btn",
  sideBtnsHeaderShoppingCart: "side-btn-header__shopping-cart",
};

export default class HeaderSideBtnShoppingCartView extends View {
  #headerSideBtnShoppingCartView: DocumentFragment | null = null;

  constructor(pageParam: PageParam) {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [
        cssClasses.sideBtnsHeaderBtns,
        cssClasses.sideBtnsHeaderShoppingCart,
      ],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
      dataAttributes: [],
    };

    super(params);

    this.#createHeaderSideBtnShoppingCartIconView();
    this.#configureView(pageParam);
  }

  #createHeaderSideBtnShoppingCartIconView() {
    this.#headerSideBtnShoppingCartView =
      headerSideBtnsShoppingCartTemplate.content.cloneNode(
        true
      ) as DocumentFragment;
  }

  #configureView(pageParam: PageParam) {
    console.log(pageParam)
    this.viewElementCreator?.addInnerElement(
      this.#headerSideBtnShoppingCartView!
    );

    this.viewElementCreator?.setCallback(pageParam.callback);
  }
}
