// Components

import HistoryRouterHandler from "../historyRouterHandler";

// Types

import { HashRouterHandlerParams } from "../../../types/types";

export default class HashRouterHandler extends HistoryRouterHandler {
  hashRouterHandlerParams: HashRouterHandlerParams = {
    nameEvent: "hashchange",
    locationField: "hash",
  };

  constructor(callbackRouter: Function) {
    super(callbackRouter);
    /**
     * @type {import('../history-router-handler').RouterHandlerParam}
     */

    window.addEventListener(
      this.hashRouterHandlerParams.nameEvent,
      this.handler?.bind(this)
    );
  }

  setHistory(url: string | null) {
    window.location.href = `${window.location.href.replace(
      /#(.*)$/,
      ""
    )}#${url}`;
  }
}
