// Scripts

//import HashRouterHandler from './handler/hash/hash-router-handler';
import HistoryRouterHandler from "./handler/historyRouterHandler";

// Types

import { Routes } from "../types/types";
import { HistoryRouterHandlerRequestParams } from "../types/types";

// Pages

import { Pages, ID_SELECTOR } from "../pages/pages";

/**
 * @typedef {{path: string, callback: function}} Route
 */
export default class Router {
  #routes: Routes | null = null;
  #handler: HistoryRouterHandler | null = null;

  constructor(routes: Routes) {
    this.#routes = routes;
    this.#handler = new HistoryRouterHandler(this.urlChangedHandler.bind(this));

    document.addEventListener("DOMContentLoaded", () => {
      this.#handler!.navigate(null);
    });
  }

  /*
  setHashHandler() {
    this.#handler!.disable();
    this.#handler = new HashRouterHandler(this.urlChangedHandler.bind(this));
  }
    */

  navigate(url: string | null) {
    this.#handler!.navigate(url);
  }

  urlChangedHandler(requestParams: HistoryRouterHandlerRequestParams) {
    
    const pathForFind =
      requestParams.resource === ""
        ? requestParams.path
        : `${requestParams.path}/${ID_SELECTOR}`;

    const route = this.#routes!.find((item) => item.path === pathForFind);

    if (!route) {
      this.redirectToNotFoundPage();
      return;
    }

    route.callback(requestParams.resource);
  }

  redirectToNotFoundPage() {
    const notFoundPage = this.#routes!.find(
      (item) => item.path === Pages.NOT_FOUND
    );
    if (notFoundPage) {
      this.navigate(notFoundPage.path);
    }
  }
}
