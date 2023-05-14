import { API } from "./api";

export class User extends API {
  constructor() {
    super("user");
  }

  getUser() {
    return this.getData();
  }
}
