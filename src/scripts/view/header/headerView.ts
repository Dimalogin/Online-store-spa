// Styles

import "./headerView.scss";

// Scripts

import View from "../view";
import ContainerView from "../container/containerView";
import HeaderBodyView from "./headerBodyView/headerBodyView";
import { Pages } from "../../../pages/pages";

// Types

import { ElementParams } from "../../../types/types";
import { LinksParams } from "../../../types/types";

// Pages

const NamesLinks: LinksParams = {
  HOME: "home",
  CATALOG: "catalog",
  REVIEWS: "reviews",
  ABOUT: "about",
  ACCOUNT: "account",
  FAVORITES: "favorites",
  SHOPPING_CART: "shopping_cart",
};

// Parameters

const tag = {
  TAG: "header",
};

const cssClasses = {
  HEADER: "header",
};

export default class HeaderView extends View {
  #containerView: HTMLElement | null = null;
  #headerBodyView: HTMLElement | null = null;

  constructor() {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [cssClasses.HEADER],
      textContent: "",
      callback: null,
      attributes: [],
      identificators: [],
      dataAttributes: [],
    };

    super(params);

    this.#createContainerView();
    this.#createHeaderBodyView();

    this.#configureView();
  }

  #createContainerView(): void {
    const headerContainerParams = {
      CONTAINER: "header",
    };

    const containerView = new ContainerView(headerContainerParams);
    this.#containerView = containerView.getHtmlElement();
  }

  #createHeaderBodyView(): void {
    const headerBodyView = new HeaderBodyView();
    this.#containerView?.appendChild(headerBodyView.getHtmlElement());
  }

  #configureView() {
    this.viewElementCreator?.addInnerElement(this.#containerView!);
  }
}
