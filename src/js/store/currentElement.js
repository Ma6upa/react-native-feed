import { makeAutoObservable } from "mobx";

class currentElement {
  chosenArticle = {
    "title": "You have not selected any news yet",
    "published_date": "2021-05-17 0:55:00",
    "clean_url": "Us :)",
    "summary": "For something to show up on that screen, you must select any article you like on the News screen. Go ahead, it's awesome!",
    "media": "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg",
  }

  constructor() {
    makeAutoObservable(this)
  }

  chooseArticle(item) {
    this.chosenArticle = item;
  }
}

export default new currentElement();