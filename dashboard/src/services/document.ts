import { API } from "./api";

export class Document extends API {
  constructor() {
    super("document");
  }

  getDocument() {
    return this.getData();
  }
}
