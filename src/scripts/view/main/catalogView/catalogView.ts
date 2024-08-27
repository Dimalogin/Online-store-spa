// Styles

import "./catalogView.scss";

// Scripts

import View from "../../view";

// Types

import { ElementParams } from "../../../../types/types";
import State from "../../../../state/state";

// Parameters

const tag = {
  TAG: "div",
};

const cssClasses = {};

export default class CatalogView extends View {
  constructor(state: State) {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [],
      textContent: "Catalog Page",
      callback: null,
      attributes: [],
      identificators: [],
      dataAttributes: [],
    };

    super(params);
  }
}
