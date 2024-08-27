// Styles

import "./homeView.scss";

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

export default class HomeView extends View {
  constructor(state: State) {
    const params: ElementParams = {
      tag: tag.TAG,
      classNames: [],
      textContent: "Home Page",
      callback: null,
      attributes: [],
      identificators: [],
      dataAttributes: [],
    };

    super(params);

    console.log("Home Page");
  }
}
