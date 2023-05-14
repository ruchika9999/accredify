import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { SinonSpy } from "sinon";
import sinon from "sinon";
import { createTestingPinia } from "@pinia/testing";

import OtherPage from "../OtherPage.vue";
import Container from "../../components/Layout/Container.vue";

import { loadingPayload } from "./../../__mockData__/dashboard";

describe("OtherPage", () => {
  const wrapper = mount(OtherPage, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: (fn?: any): SinonSpy => sinon.spy(fn),
          initialState: {
            userStore: loadingPayload,
          },
        }),
      ],
    },
  });

  it("renders SideBar and NavBar components", () => {
    const container = wrapper.findComponent(Container);
    expect(container.exists()).toBe(true);
  });
});
