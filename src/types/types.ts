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
  page: string;
  callback: Function;
};

export type Routes = Array<Route>;

export type PagesParams = {
  INDEX: string;
  PRODUCT: string;
  NOT_FOUND: string;
};
