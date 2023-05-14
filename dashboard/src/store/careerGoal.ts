import { defineStore } from "pinia";

import { AsyncState } from "../utils/constants";
import { CareerGoalType } from "../utils/type";

import { CareerGoal } from "../services/careerGoal";

export interface CareerGoalStore {
  goals: CareerGoalType[] | null;
  loading: AsyncState;
  error: string | null;
}

export const careerGoalStore = defineStore({
  id: "careerGoalStore",
  state: (): CareerGoalStore => ({
    goals: [],
    loading: AsyncState.IDLE,
    error: null,
  }),
  actions: {
    async fetchCareerGoal() {
      this.loading = AsyncState.LOADING;

      const careerGoalApi = new CareerGoal();
      try {
        const response = await careerGoalApi.getCareerGoal();

        this.goals = response.data;
        this.loading = AsyncState.SUCCESS;
      } catch (e) {
        if (e instanceof Error) {
          this.goals = null;
          this.error = e.message;
          this.loading = AsyncState.FAILED;
        }
      }
    },
  },

  getters: {
    getCareerGoal(state): CareerGoalType[] {
      return state.goals ?? [];
    },
    getLoading(state): AsyncState {
      return state.loading;
    },
  },
});
