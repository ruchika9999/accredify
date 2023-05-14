import { mount } from "@vue/test-utils";
import sinon, { SinonSpy } from "sinon";
import { describe, it, expect } from "vitest";

import NavBar from "../Navbar.vue";
import { successPayload, mockLabel } from "./../../__mockData__/dashboard";
import { createTestingPinia } from "@pinia/testing";

describe("NavBar", () => {
  const wrapper = mount(NavBar, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: (fn?: any): SinonSpy => sinon.spy(fn),
          initialState: {
            userStore: successPayload,
          },
        }),
      ],
    },
  });

  it("renders the user name correctly", () => {
    expect(wrapper.html()).toContain(mockLabel.displayName);
  });

  it("renders icon name", () => {
    expect(wrapper.html()).toContain(mockLabel.iconName);
  });

  it("opens the dropdown on click", async () => {
    await wrapper.find(".text-primary").trigger("click");
    expect(wrapper.vm.dropDownOpen).toBe(true);
  });
});
