import { makeAutoObservable } from "mobx";

class currentElement {
  currentElement = {}

  constructor() {
    makeAutoObservable(this)
  }

  chooseArticle(article) {
    this.currentElement = article;
  }
}

export default currentElement;