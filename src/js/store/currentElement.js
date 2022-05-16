import { makeAutoObservable } from "mobx";

class currentElement {
  chosenArticle = {}

  constructor() {
    makeAutoObservable(this)
  }

  chooseArticle(item) {
    this.chosenArticle = item;
  }
}

export default new currentElement();