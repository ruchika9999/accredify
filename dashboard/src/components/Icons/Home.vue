<script lang="ts">
export default {
  name: "HomeIcon",
  props: {
    isActive: Boolean,
  },
};
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="21"
    fill="none"
    class="h-6 w-6 fill-current mr-2"
  >
    <path
      :fill="isActive ? '#fff' : '#D0D2D6'"
      d="m17.788 6.091-8.5-6a.5.5 0 0 0-.577 0l-8.5 6A.501.501 0 0 0 0 6.5v11a.5.5 0 0 0 .5.5H6a.5.5 0 0 0 .5-.5v-6h5v6a.5.5 0 0 0 .5.5h5.5a.5.5 0 0 0 .5-.5v-11a.502.502 0 0 0-.212-.409Z"
    />
  </svg>
</template>
