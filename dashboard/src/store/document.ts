import { defineStore } from "pinia";

import { AsyncState } from "../utils/constants";
import { DocumentType } from "../utils/type";

import { Document } from "./../services/document";

export interface DocumentStoreState {
  documents: DocumentType | null;
  loading: AsyncState;
  error: string | null;
}

export const documentStore = defineStore({
  id: "documentStore",
  state: (): DocumentStoreState => ({
    documents: null,
    loading: AsyncState.IDLE,
    error: null,
  }),
  actions: {
    async fetchDocument() {
      this.loading = AsyncState.LOADING;

      const documentApi = new Document();

      try {
        const response = await documentApi.getDocument();
        this.documents = response.data;
        this.loading = AsyncState.SUCCESS;
      } catch (e) {
        if (e instanceof Error) {
          this.documents = null;
          this.error = e.message;
          this.loading = AsyncState.FAILED;
        }
      }
    },
  },

  getters: {
    getDocument(state) {
      return state?.documents?.data ?? [];
    },
    getLoading(state): AsyncState {
      return state.loading;
    },
  },
});
