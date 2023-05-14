<script lang="ts">
import CircleProgress from "vue3-circle-progress";
import "vue3-circle-progress/dist/circle-progress.css";
export default {
  name: "Chart",
  props: {
    progress: Number,
  },
  components: {
    CircleProgress: CircleProgress,
  },

  setup(props) {
    return {
      progress: props.progress,
    };
  },
};
</script>
<template>
  <CircleProgress
    :percent="progress"
    :unit="'%'"
    :viewport="true"
    :show-percent="true"
    :is-gradient="true"
    :gradient="{
      startColor: '#493DF5',
      stopColor: '#493DF5',
    }"
  />
</template>
