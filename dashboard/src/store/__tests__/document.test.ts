import { setActivePinia, createPinia } from "pinia";
import { describe, it, expect, beforeEach } from "vitest";
import { documentStore } from "../document";

describe("documentStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should fetch document", async () => {
    const store = documentStore();
    const document = await store.fetchDocument();
    expect(document).not.toBeNull();
  });
});
