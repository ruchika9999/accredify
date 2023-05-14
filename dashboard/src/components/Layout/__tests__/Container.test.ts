import { mount } from "@vue/test-utils";
import sinon, { SinonSpy } from "sinon";
import { describe, it, expect } from "vitest";

import Container from "../Container.vue";
import SideBar from "../../SideBar.vue";
import NavBar from "../../Navbar.vue";
import { successPayload, mockLabel } from "./../../../__mockData__/dashboard";
import { createTestingPinia } from "@pinia/testing";

describe("NavBar", () => {
  const wrapper = mount(Container, {
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

  describe("should display left and top navigation", () => {
    it("renders SideBar and NavBar components", () => {
      const sideBarComponent = wrapper.findComponent(SideBar);
      const navBarComponent = wrapper.findComponent(NavBar);

      expect(sideBarComponent.exists()).toBe(true);
      expect(navBarComponent.exists()).toBe(true);
    });
  });

  describe("should display user name and icon", () => {
    it("renders the user name correctly", async () => {
      await wrapper.html();
      expect(wrapper.html()).toContain(mockLabel.displayName);
    });

    it("renders icon name", () => {
      expect(wrapper.html()).toContain(mockLabel.iconName);
    });
  });
});
