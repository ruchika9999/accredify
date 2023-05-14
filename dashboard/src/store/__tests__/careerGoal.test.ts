import { setActivePinia, createPinia } from "pinia";
import { describe, it, expect, beforeEach } from "vitest";
import { careerGoalStore } from "../careerGoal";

describe("careerGoalStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should fetch goal", async () => {
    const store = careerGoalStore();
    const goal = await store.fetchCareerGoal();
    expect(goal).not.toBeNull();
  });
});
