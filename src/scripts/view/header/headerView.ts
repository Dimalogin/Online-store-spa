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
import Router from "../../../router/router";

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
  #headerBodyView: HeaderBodyView | null = null;

  #router: Router | null = null;

  constructor(router: Router) {
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

    this.#router = router;

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
    this.#headerBodyView = new HeaderBodyView(this.#router!);
    this.#containerView?.appendChild(this.#headerBodyView.getHtmlElement());
  }

  #configureView() {
    this.viewElementCreator?.addInnerElement(this.#containerView!);
  }

  setSelectedItem(page: string) {
    this.#headerBodyView?.setSelectedItem(page);
  }
}
