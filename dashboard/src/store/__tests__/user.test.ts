import { setActivePinia, createPinia } from "pinia";
import { describe, it, expect, beforeEach } from "vitest";
import { userStore } from "../user";

describe("userStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should fetch user", async () => {
    const store = userStore();
    const user = await store.fetchUser();
    expect(user).not.toBeNull();
  });
});
