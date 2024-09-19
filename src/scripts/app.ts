// Style

// Scripts

import State from "../state/state";
import { Pages, ID_SELECTOR } from "../pages/pages";

import Router from "../router/router";

// Components

import WrapperView from "./view/wrapper/wrapperView";
import HeaderView from "./view/header/headerView";
import MainView from "./view/main/mainView";

// Pages

import HomeView from "./view/main/homeView/homeView";
import CatalogView from "./view/main/catalogView/catalogView";
import ReviewsView from "./view/main/reviewsView/reviewsView";
import AboutView from "./view/main/aboutView/aboutView";
import AccountView from "./view/main/accountView/accountView";
import FavoritesView from "./view/main/favoritesView/favoritesView";
import ShoppingCartView from "./view/main/shoppingCartView/shoppingCartView";
import FooterView from "./view/footer/footerView";
import NotFoundView from "./view/main/notFoundView/notFountView";

// Types

import { Routes } from "../types/types";
import { Components } from "../types/types";

// Parameters

export default class App {
  #wrapperView: HTMLElement | null = null;
  #headerView: HeaderView | null = null;
  #mainView: MainView | null = null;
  #footerView: FooterView | null = null;

  #state: State | null = null;
  #routes: Routes | null = null;
  #router: Router | null = null;

  constructor() {
    this.#setState();
    this.#setRoutes();
    this.#initRouter();

    // const routes = this.createRoutes(state);
    // this.router = new Router(routes);
    /**
     * Раскомментировать для использования # в строке браузера
     */
    // this.router.setHashHandler();

    console.log(true);

    this.#createWrapperView();
    this.#createHeaderView();

    this.#createMainView();
    this.#createView();
  }

  #setState() {
    this.#state = new State();
  }

  #setRoutes() {
    this.#routes = this.#createRoutes(this.#state!);
  }

  #initRouter() {
    this.#router = new Router(this.#routes!);
  }

  #createWrapperView() {
    const wrapper = new WrapperView();
    this.#wrapperView = wrapper.getHtmlElement();
  }

  #createHeaderView() {
    this.#headerView = new HeaderView(this.#router!);
    this.#wrapperView?.append(this.#headerView.getHtmlElement());
  }

  #createMainView() {
    this.#mainView = new MainView();
    this.#wrapperView?.append(this.#mainView.getHtmlElement());
  }

  #createFooterView() {
    this.#footerView = new FooterView();
  }

  #createView() {
    document.body.append(this.#wrapperView!);
  }

  #createRoutes(state: State) {
    return [
      {
        path: ``,
        callback: () => {
          const homeView: HomeView = new HomeView(state);
          this.setContent(Pages.HOME, homeView);
        },
      },
      {
        path: `${Pages.HOME}`,
        callback: () => {
          const homeView: HomeView = new HomeView(state);
          this.setContent(Pages.HOME, homeView);
        },
      },
      {
        path: `${Pages.CATALOG}`,
        callback: () => {
          const catalogView: CatalogView = new CatalogView(state);
          this.setContent(Pages.CATALOG, catalogView);
        },
      },

      {
        path: `${Pages.CATALOG}/${ID_SELECTOR}`,
        callback: (id: string) => {
          const catalogView: CatalogView = new CatalogView(state);
          this.setContent(Pages.CATALOG, catalogView);
        },
      },
      {
        path: `${Pages.REVIEWS}`,
        callback: () => {
          const reviewsView: ReviewsView = new ReviewsView(state);
          this.setContent(Pages.REVIEWS, reviewsView);
        },
      },
      {
        path: `${Pages.ABOUT}`,
        callback: () => {
          const aboutView: AboutView = new AboutView(state);
          this.setContent(Pages.ABOUT, aboutView);
        },
      },

      {
        path: `${Pages.ACCOUNT}`,
        callback: () => {
          const accountView: AccountView = new AccountView(state);
          this.setContent(Pages.ACCOUNT, accountView);
        },
      },
      {
        path: `${Pages.FAVORITES}`,
        callback: () => {
          const favoritesView: FavoritesView = new FavoritesView(state);
          this.setContent(Pages.ACCOUNT, favoritesView);
        },
      },
      {
        path: `${Pages.SHOPPING_CART}`,
        callback: () => {
          const shoppingCartView: ShoppingCartView = new ShoppingCartView(
            state
          );
          this.setContent(Pages.SHOPPING_CART, shoppingCartView);
        },
      },

      {
        path: `${Pages.NOT_FOUND}`,
        callback: () => {
          const notFoundView: NotFoundView = new NotFoundView(state);
          this.setContent(Pages.NOT_FOUND, notFoundView);
        },
      },
    ];
  }

  setContent(page: string, view: Components) {
    this.#headerView!.setSelectedItem(page);
    this.#mainView!.setContent(view);
  }
}
