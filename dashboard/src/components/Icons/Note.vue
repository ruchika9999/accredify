<script lang="ts">
export default {
  name: "NoteIcon",
  props: {
    fillColor: String,
    isActive: Boolean,
  },
};
</script>
<template>
  <svg
    class="h-6 w-6 fill-current mr-2"
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="22"
    fill="none"
  >
    <path
      :fill="isActive ? '#fff' : fillColor ?? '#D0D2D6'"
      d="M13.5 0h-11A2.502 2.502 0 0 0 0 2.5v15A2.502 2.502 0 0 0 2.5 20h11a2.502 2.502 0 0 0 2.5-2.5v-15A2.502 2.502 0 0 0 13.5 0Zm-6 14h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1Zm4-3h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1Zm0-3h-7a.5.5 0 1 1 0-1h7a.5.5 0 0 1 0 1Zm0-3h-7a.5.5 0 1 1 0-1h7a.5.5 0 0 1 0 1Z"
    />
  </svg>
</template>
