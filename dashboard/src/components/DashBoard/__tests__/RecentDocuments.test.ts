import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import sinon, { SinonSpy } from "sinon";
import { createTestingPinia } from "@pinia/testing";

import RecentDocuments from "../RecentDocuments.vue";
import { DocumentStoreState } from "../../../store/document";

import {
  successPayload,
  loadingPayload,
  errorPayload,
  mockLabel,
} from "../../../__mockData__/recentDocuments";

describe("RecentDocuments", () => {
  const recentDocuments = (payload: DocumentStoreState) => {
    const wrapper = mount(RecentDocuments, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: (fn?: any): SinonSpy => sinon.spy(fn),
            initialState: {
              documentStore: payload,
            },
          }),
        ],
      },
    });

    return wrapper;
  };

  describe("success", () => {
    it("should render document sub details", () => {
      expect(recentDocuments(successPayload).html()).toContain(
        mockLabel.heading
      );
      expect(recentDocuments(successPayload).html()).toContain(
        mockLabel.viewLink
      );
      expect(recentDocuments(successPayload).html()).toContain(
        mockLabel.table.documentName
      );
      expect(recentDocuments(successPayload).html()).toContain(
        mockLabel.table.receivedOn
      );
      expect(recentDocuments(successPayload).html()).toContain(
        mockLabel.documentName
      );
      expect(recentDocuments(successPayload).html()).toContain(
        mockLabel.receivedOnDate
      );
    });
  });

  describe("loading", () => {
    it("should render loading", () => {
      expect(recentDocuments(loadingPayload).html()).toContain(
        mockLabel.loading
      );
    });
  });

  describe("error", () => {
    it("not to display documents", () => {
      expect(recentDocuments(errorPayload).html()).not.toBe(
        mockLabel.documentName
      );
      expect(recentDocuments(errorPayload).html()).not.toBe(
        mockLabel.receivedOnDate
      );
    });
  });
});
