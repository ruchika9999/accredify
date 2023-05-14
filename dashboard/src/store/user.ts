import { defineStore } from "pinia";

import { AsyncState, Roles } from "../utils/constants";
import { UserType } from "../utils/type";

import { User } from "./../services/user";

export interface UserStoreState {
  user: UserType | null;
  loading: AsyncState;
  error: string | null;
}

export const userStore = defineStore({
  id: "userStore",
  state: (): UserStoreState => ({
    user: null,
    loading: AsyncState.IDLE,
    error: null,
  }),
  actions: {
    async fetchUser() {
      this.loading = AsyncState.LOADING;
      const userApi = new User();
      try {
        const response = await userApi.getUser();
        this.user = response.data;
        this.loading = AsyncState.SUCCESS;
      } catch (e) {
        if (e instanceof Error) {
          this.user = null;
          this.error = e.message;
          this.loading = AsyncState.FAILED;
        }
      }
    },
  },
  getters: {
    getUserRole(state): Roles {
      return state.user?.current_organisation.is_personal
        ? Roles.PERSONAL
        : Roles.MANAGER;
    },
    getUserName(state): string {
      return state.user?.name ?? "";
    },
    getLoading(state): AsyncState {
      return state.loading;
    },
  },
});
