const KEY_FOR_SAVE_STATE_TO_LOCALSTORAGE = "stateStore";

export default class State {
  fields:  | null = null;

  constructor() {
    //window.addEventListener("beforeunload", this.saveState.bind(this));
    this.loadState();
  }

  loadState() {
    const storageItem = localStorage.getItem(
      KEY_FOR_SAVE_STATE_TO_LOCALSTORAGE
    );

    if (storageItem) {
      const fieldObject = JSON.parse(storageItem);
      return new Map(Object.entries(fieldObject));
    }

    return new Map();
  }

  /*
  saveState() {
    const fiedlsObject = Object.fromEntries(this.fields.entries());
    localStorage.setItem(
      KEY_FOR_SAVE_STATE_TO_LOCALSTORAGE,
      JSON.stringify(fiedlsObject)
    );
  }
    */
}
