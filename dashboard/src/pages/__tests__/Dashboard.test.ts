import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import sinon, { SinonSpy } from "sinon";
import { createTestingPinia } from "@pinia/testing";

import Dashboard from "../Dashboard.vue";

import { UserStoreState } from "./../../store/user";
import {
  successPayload,
  loadingPayload,
  errorPayload,
  mockLabel,
} from "./../../__mockData__/dashboard";

describe("Dashboard", () => {
  const dashboard = (payload: UserStoreState) => {
    const wrapper = mount(Dashboard, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: (fn?: any): SinonSpy => sinon.spy(fn),
            initialState: {
              userStore: payload,
            },
          }),
        ],
      },
    });

    return wrapper;
  };

  describe("success", () => {
    it("should render dashboard sub heading", () => {
      expect(dashboard(successPayload).html()).toContain(mockLabel.description);
    });
    it("say hi to login user", () => {
      expect(dashboard(successPayload).html()).toContain(mockLabel.name);
    });

    it("should display the CareerGoal component if the user is a manager", async () => {
      await dashboard(successPayload).vm.$nextTick();
      const careerGoalComponent = dashboard(successPayload).findComponent({
        name: "CareerGoal",
      });
      expect(careerGoalComponent.exists()).toBe(true);
    });

    it("should not display the CareerGoal component if the user is a personal user", async () => {
      const userDataSuccessPersonal = {
        ...successPayload,
        user: {
          ...successPayload.user,
          current_organisation: {
            ...successPayload.user?.current_organisation,
            is_personal: true,
          },
        },
      };
      await dashboard(userDataSuccessPersonal).vm.$nextTick();
      const careerGoalComponent = dashboard(
        userDataSuccessPersonal
      ).findComponent({
        name: "CareerGoal",
      });
      expect(careerGoalComponent.exists()).toBe(false);
    });

    it("should display the RecentDocuments component", async () => {
      await dashboard(successPayload).vm.$nextTick();
      const recentDocumentsComponent = dashboard(successPayload).findComponent({
        name: "RecentDocuments",
      });
      expect(recentDocumentsComponent.exists()).toBe(true);
    });
  });

  describe("loading", () => {
    it("should render loading", () => {
      expect(dashboard(loadingPayload).html()).toContain(mockLabel.loading);
    });
  });

  describe("error", () => {
    it("user name failed to display", () => {
      expect(dashboard(errorPayload).html()).not.toBe(mockLabel.name);
    });
    it("should render dashboard sub heading", () => {
      expect(dashboard(errorPayload).html()).toContain(mockLabel.description);
    });
  });
});
