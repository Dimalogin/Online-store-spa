// Styles

import "./headerSideBtnFavoritesView.scss";

// Scripts

import View from "../../../../view";

// Types

import { ElementParams, PageParam } from "../../../../../../types/types";

// Templates

import headerSideBtnsFavoritesTemplate from "../../../../../../templates/header/headerSideBtnsFavoritesTemplate";

// Pages

// Parameters

const tag = {
  TAG: "a",
};

const cssClasses = {
  sideBtnsHeaderBtns: "side-btn-header__btn",
  sideBtnsHeaderFavorites: "side-btn-header__favorites",
};

export default class HeaderSideBtnFavoritesView extends View {
  #headerSideBtnsFavoritesView: DocumentFragment | null = null;

  constructor(pageParam: PageParam) {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [
        cssClasses.sideBtnsHeaderBtns,
        cssClasses.sideBtnsHeaderFavorites,
      ],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
      dataAttributes: [],
    };

    super(params);

    this.#createHeaderSideBtnFavoritesIconView();
    this.#configureView(pageParam);
  }

  #createHeaderSideBtnFavoritesIconView() {
    this.#headerSideBtnsFavoritesView =
      headerSideBtnsFavoritesTemplate.content.cloneNode(
        true
      ) as DocumentFragment;
  }

  #configureView(pageParam: PageParam) {
    this.viewElementCreator?.addInnerElement(
      this.#headerSideBtnsFavoritesView!
    );

    this.viewElementCreator?.setCallback(pageParam.callback);
  }
}
