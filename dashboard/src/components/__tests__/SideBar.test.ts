import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import HomeIcon from "../Icons/Home.vue";
import DocumentIcon from "../Icons/Note.vue";
import IdeaIcon from "../Icons/Idea.vue";
import SecurityIcon from "../Icons/Protection.vue";
import SettingIcon from "../Icons/Settings.vue";

import Sidebar from "../SideBar.vue";
import { RoutesName } from "../../utils/constants";

describe("Sidebar", () => {
  const wrapper = mount(Sidebar, {
    global: {
      mocks: {
        $route: {
          name: RoutesName.DASHBOARD,
        },
      },
    },
  });

  it("renders the correct number of navigation items", () => {
    const navItems = wrapper.findAll("router-link");
    expect(navItems).toHaveLength(5);
  });

  it("renders the correct navigation items", () => {
    const homeIcon = wrapper.findComponent(HomeIcon);
    const documentIcon = wrapper.findComponent(DocumentIcon);
    const ideaIcon = wrapper.findComponent(IdeaIcon);
    const securityIcon = wrapper.findComponent(SecurityIcon);
    const settingIcon = wrapper.findComponent(SettingIcon);

    expect(homeIcon.exists()).toBe(true);
    expect(documentIcon.exists()).toBe(true);
    expect(ideaIcon.exists()).toBe(true);
    expect(securityIcon.exists()).toBe(true);
    expect(settingIcon.exists()).toBe(true);
  });

  it("sets the correct active navigation item", () => {
    const activeNavItem = wrapper.find("[data-test-id='dashboard']");
    expect(activeNavItem.attributes("name")).toBe(RoutesName.DASHBOARD);
  });
});
