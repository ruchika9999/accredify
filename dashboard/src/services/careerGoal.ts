import { API } from "./api";

export class CareerGoal extends API {
  constructor() {
    super("career-goal");
  }

  getCareerGoal() {
    return this.getData();
  }
}
