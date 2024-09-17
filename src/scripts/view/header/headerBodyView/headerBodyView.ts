// Styles

import "./headerBodyView.scss";

// Scripts

import View from "../../view";
import Router from "../../../../router/router";
import HeaderLogoView from "./headerLogoView/headerLogoView";
import HeaderNavUlView from "./headerNavUlView/headerNavUlView";
import HeaderNavLiView from "./headerNavUlView/headerNavLiView/headerNavLiView";
import HeaderNavLinkView from "./headerNavUlView/headerNavLiView/headerNavLinkView/headerNavLinkView";
import HeaderSideBtnsView from "./headerSideBtns/headerSideBtnsView";
import HeaderSideBtnAccountView from "./headerSideBtns/headerSideBtnAccount/headerSideBtnAccountView";
import HeaderSideBtnFavoritesView from "./headerSideBtns/headerSideBtnFavorites/headerSideBtnFavoritesView";
import HeaderSideBtnShoppingCartView from "./headerSideBtns/headerSideBtnShoppingCart/headerSideBtnShoppingCartView";
// Types

import {
  ElementParams,
  HeaderLinksElements,
  PageParam,
  NavLinks,
} from "../../../../types/types";

// Parameters

const tag = {
  TAG: "div",
};

const cssClasses = {
  headerBody: "header__body",
};

// Pages

const logoLinks = {
  LOGO: "",
};

const navLinks = {
  HOME: "home",
  CATALOG: "catalog",
  REVIEWS: "reviews",
  ABOUT: "about",
};

const headerSideBtnAccount = {
  ACCOUNT: "account",
};

const headerSideBtnFavorites = {
  FAVORITES: "favorites",
};

const headerSideBtnShoppingCart = {
  SHOPPING_CART: "shopping-cart",
};

export default class HeaderBodyView extends View {
  #headerBodyFragment: DocumentFragment | null =
    document.createDocumentFragment();

  #headerNavUlElement: HTMLElement | null = null;
  #headerSideBtnsElement: HTMLElement | null = null;

  #router: Router | null = null;
  headerLinksElements: Map<string, HeaderNavLinkView> = new Map();

  constructor(router: Router) {
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

    this.#router = router;

    this.#createHeaderLogoView();
    this.#createHeaderNavUl();
    this.#createHeaderNavLinks();

    this.#createHeaderSideBtnsView();
    this.#createHeaderSideBtnAccountView();
    this.#createHeaderSideBtnFavoritesView();
    this.#createHeaderSideBtnShoppingCartView();

    this.#configureView();
  }

  #createHeaderLogoView() {
    const pageParam: PageParam = {
      name: logoLinks.LOGO,
      callback: () => this.#router?.navigate(logoLinks.LOGO),
    };

    const headerLogoView = new HeaderLogoView(pageParam);
    this.#headerBodyFragment?.appendChild(headerLogoView.getHtmlElement());
  }

  #createHeaderNavUl() {
    const headerNavUlElement = new HeaderNavUlView();
    this.#headerNavUlElement = headerNavUlElement.getHtmlElement();
  }

  #createHeaderNavLinks() {
    Object.keys(navLinks).forEach((key) => {
      const pageParam: PageParam = {
        name: navLinks[key as keyof NavLinks],
        callback: () => this.#router?.navigate(navLinks[key as keyof NavLinks]),
      };

      const headerNavLiView = new HeaderNavLiView();

      const headerNavLinkView = new HeaderNavLinkView(
        pageParam,
        this.headerLinksElements
      );

      headerNavLiView.viewElementCreator?.addInnerElement(
        headerNavLinkView.getHtmlElement()
      );

      this.headerLinksElements.set(
        navLinks[key as keyof NavLinks].toUpperCase(),
        headerNavLinkView
      );

      this.#headerNavUlElement?.appendChild(headerNavLiView.getHtmlElement());
    });
  }

  #createHeaderSideBtnsView() {
    const headerSideBtnsComponent = new HeaderSideBtnsView();
    this.#headerSideBtnsElement = headerSideBtnsComponent.getHtmlElement();
  }

  #createHeaderSideBtnAccountView() {
    const pageParam: PageParam = {
      name: headerSideBtnAccount.ACCOUNT,
      callback: () => this.#router?.navigate(headerSideBtnAccount.ACCOUNT),
    };

    const headerSideBtnAccountComponent = new HeaderSideBtnAccountView(
      pageParam,
      this.headerLinksElements
    );

    this.#headerSideBtnsElement?.appendChild(
      headerSideBtnAccountComponent.getHtmlElement()
    );
  }

  #createHeaderSideBtnFavoritesView() {
    const pageParam: PageParam = {
      name: headerSideBtnFavorites.FAVORITES,
      callback: () => this.#router?.navigate(headerSideBtnFavorites.FAVORITES),
    };

    const headerSideBtnFavoritesView = new HeaderSideBtnFavoritesView(
      pageParam
    );

    this.#headerSideBtnsElement?.appendChild(
      headerSideBtnFavoritesView.getHtmlElement()
    );
  }

  #createHeaderSideBtnShoppingCartView() {
    const pageParam: PageParam = {
      name: headerSideBtnShoppingCart.SHOPPING_CART,
      callback: () =>
        this.#router?.navigate(headerSideBtnShoppingCart.SHOPPING_CART),
    };

    const headerSideBtnShoppingCartView = new HeaderSideBtnShoppingCartView(
      pageParam
    );

    this.#headerSideBtnsElement?.appendChild(
      headerSideBtnShoppingCartView.getHtmlElement()
    );
  }

  #configureView() {
    this.#headerBodyFragment?.appendChild(this.#headerNavUlElement!);
    this.#headerBodyFragment?.appendChild(this.#headerSideBtnsElement!);
    this.viewElementCreator?.addInnerElement(this.#headerBodyFragment!);
  }

  setSelectedItem(page: string) {
    const linkComponent = this.headerLinksElements.get(page.toUpperCase());

    if (linkComponent instanceof HeaderNavLinkView) {
      linkComponent.setSelectedStatus();
    }
  }
}
