import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import sinon, { SinonSpy } from "sinon";
import { createTestingPinia } from "@pinia/testing";

import CareerGoal from "../CareerGoal.vue";
import Chart from "../Chart.vue";
import { CareerGoalStore } from "../../../store/careerGoal";
import {
  successPayload,
  loadingPayload,
  errorPayload,
  mockLabel,
} from "../../../__mockData__/careerGoal";

describe("CareerGoal", () => {
  const careerGoal = (payload: CareerGoalStore) => {
    const wrapper = mount(CareerGoal, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: (fn?: any): SinonSpy => sinon.spy(fn),
            initialState: {
              careerGoalStore: payload,
            },
          }),
        ],
      },
    });

    return wrapper;
  };

  describe("should display chart", () => {
    it("renders Chart components", () => {
      const chartComponent = careerGoal(successPayload).findComponent(Chart);

      expect(chartComponent.exists()).toBe(true);
    });
  });

  describe("success", () => {
    it("should render goal sub details", () => {
      expect(careerGoal(successPayload).html()).toContain(mockLabel.heading);
      expect(careerGoal(successPayload).html()).toContain(
        mockLabel.progressSubHeading
      );
      expect(careerGoal(successPayload).html()).toContain(mockLabel.become);
      expect(careerGoal(successPayload).html()).toContain(mockLabel.goal);
      expect(careerGoal(successPayload).html()).toContain(mockLabel.viewLink);
    });
  });

  describe("loading", () => {
    it("should render loading message", () => {
      expect(careerGoal(loadingPayload).html()).toContain(mockLabel.loading);
    });
  });

  describe("error", () => {
    it("user goal failed to display", () => {
      expect(careerGoal(errorPayload).html()).not.toBe(mockLabel.goal);
    });
    it("should render Career Goal heading", () => {
      expect(careerGoal(errorPayload).html()).toContain(mockLabel.heading);
    });
  });
});
