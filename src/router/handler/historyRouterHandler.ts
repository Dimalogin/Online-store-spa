// Types

import { HistoryRouterHandlerParams } from "../../types/types";
import { HistoryRouterHandlerRequestParams } from "../../types/types";

export default class HistoryRouterHandler {
  historyRouterHandlerParams: HistoryRouterHandlerParams = {
    nameEvent: "popstate",
    locationField: "pathname",
  };

  #callback: Function | null = null;
  handler: Function | null = null;

  constructor(callback: Function) {
    this.#callback = callback;
    this.handler = this.navigate.bind(this);

    window.addEventListener(
      this.historyRouterHandlerParams.nameEvent,
      this.handler.bind(this)
    );
  }

  navigate(url: string | null) {
    if (typeof url === "string") {
      this.setHistory(url);
    }

    const urlString =
      window.location[this.historyRouterHandlerParams.locationField].slice(1);

    const result: HistoryRouterHandlerRequestParams = {
      path: "",
      resource: "",
    };

    const path = urlString.split("/");

    [result.path = "", result.resource = ""] = path;

    this.#callback!(result);
  }

  disable() {
    window.removeEventListener(
      this.historyRouterHandlerParams.nameEvent,
      this.handler?.bind(this)
    );
  }

  setHistory(url: string | null) {
    window.history.pushState(null, "", `/${url}`);
  }
}
