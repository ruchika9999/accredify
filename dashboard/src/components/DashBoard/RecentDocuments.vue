<script lang="ts">
import { onMounted, computed } from "vue";
import MoreIcon from "../Icons/More.vue";
import NoteIcon from "../Icons/Note.vue";
import { documentStore } from "../../store/document";
import { formatDate } from "../../utils/helper";

export default {
  name: "RecentDocuments",
  components: {
    MoreIcon,
    NoteIcon,
  },

  setup() {
    const useDocumentStore = documentStore();

    onMounted(() => {
      useDocumentStore.fetchDocument();
    });

    const documents = computed(() => {
      const list = useDocumentStore.getDocument;
      const isLoading = useDocumentStore.getLoading;

      return { list, isLoading };
    });

    return {
      documents,
      formatDate,
    };
  },
};
</script>

<template>
  <div class="flex justify-between">
    <h4 class="text-xl font-bold">Recent Documents</h4>
    <h4 class="font-bold text-sm text-thirdly">
      <a href="#" class="hover:text-secondly">View All Documents </a>
    </h4>
  </div>
  <div class="border border-gray-scale-two rounded mt-4 mb-4 py-8 px-6">
    <p v-if="documents.isLoading === 'loading'" class="hidden">loading...</p>
    <table class="border-collapse table-fixed w-full text-sm">
      <thead>
        <tr>
          <th
            class="border-b border-gray-scale-two font-medium text-left w-5/6 pt-2 pb-6"
          >
            <p class="font-bold text-gray-scale-three text-sm ml-4">
              Document Name
            </p>
          </th>
          <th
            class="border-b border-gray-scale-two font-medium text-left w-4/12 pt-2 pb-6"
          >
            <p class="font-bold text-gray-scale-three text-sm ml-4">
              Received On
            </p>
          </th>
          <th
            class="border-b border-gray-scale-two font-medium pr-8 pt-0 w-1/12"
          ></th>
        </tr>
      </thead>
      <tbody class="bg-white">
        <tr
          v-for="document in documents.list"
          :key="document.id"
          class="border-b border-gray-scale-two"
        >
          <td class="px-5 pt-5 pb-4">
            <div class="flex">
              <NoteIcon fillColor="#493DF5" />
              <p class="font-bold text-sm">{{ document.document_name }}</p>
            </div>
          </td>
          <td class="px-5 pt-5 pb-4 text-primary">
            <p class="font-normal text-sm text-primary">
              {{ formatDate(document.received_on) }}
            </p>
          </td>
          <td>
            <button class="mt-2"><MoreIcon /></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
