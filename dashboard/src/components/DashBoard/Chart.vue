<script lang="ts">
import CircleProgress from "vue3-circle-progress";
import "vue3-circle-progress/dist/circle-progress.css";
export default {
  name: "Chart",
  props: {
    fillColor: Number,
  },
  components: {
    CircleProgress: CircleProgress,
  },
};
</script>
<template>
  <CircleProgress
    :percent="fillColor"
    :viewport="true"
    :show-percent="true"
    :is-gradient="true"
    :gradient="{
      startColor: '#493DF5',
      stopColor: '#493DF5',
    }"
  />
</template>
