import HomeView from "../scripts/view/main/homeView/homeView";
import CatalogView from "../scripts/view/main/catalogView/catalogView";
import ReviewsView from "../scripts/view/main/reviewsView/reviewsView";
import AboutView from "../scripts/view/main/aboutView/aboutView";
import HistoryRouterHandler from "../router/handler/historyRouterHandler";

export type ElementParams = {
  tag: string;
  classNames: Array<string>;
  textContent: string;
  callback: null | Function;
  attributes: Array<Array<string>>;
  identificators: Array<string>;
  dataAttributes: Array<Array<string>>;
};

export type ContainerParams = {
  CONTAINER: string;
};

type Route = {
  path: string;
  callback: Function;
};

export type Routes = Array<Route>;

export type PagesParams = {
  HOME: string;
  CATALOG: string;
  REVIEWS: string;
  ABOUT: string;
  ACCOUNT: string;
  FAVORITES: string;
  SHOPPING_CART: string;
  NOT_FOUND: string;
};

export type Components = HomeView | CatalogView | ReviewsView | AboutView;

export type HistoryRouterHandlerParams = {
  nameEvent: string;
  locationField: "pathname";
};

export type HistoryRouterHandlerRequestParams = {
  path: string;
  resource: string;
};

export type HashRouterHandlerParams = {
  nameEvent: "hashchange";
  locationField: "hash";
};
