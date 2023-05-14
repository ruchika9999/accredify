<script lang="ts">
export default {
  name: "ProtectionIcon",
  props: {
    isActive: Boolean,
  },
};
</script>

<template>
  <svg
    class="h-6 w-6 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
  >
    <path
      :fill="isActive ? '#fff' : '#D0D2D6'"
      d="m20.713 6.548-8.5-4a.493.493 0 0 0-.426 0l-8.5 4A.5.5 0 0 0 3 7c0 4.824 1.476 11.226 8.507 14.325.115.051.206.091.27.122a.5.5 0 0 0 .447 0c.063-.031.154-.071.27-.122C19.523 18.225 21 11.825 21 7a.5.5 0 0 0-.287-.452Zm-5.364 3.45-3.373 3.8a.601.601 0 0 1-.429.202h-.02a.6.6 0 0 1-.421-.173l-1.927-1.9a.6.6 0 1 1 .842-.854L11.5 12.53 14.45 9.2a.6.6 0 0 1 .898.797Z"
    />
  </svg>
</template>
