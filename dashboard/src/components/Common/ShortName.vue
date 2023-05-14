<script lang="ts">
import { computed } from "vue";
import { getNameFormats } from "../../utils/helper";

export default {
  name: "ShortName",
  props: {
    userName: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
      default: "large",
    },
  },

  setup(props) {
    const shortName = computed(() => {
      return getNameFormats(props.userName).shortName;
    });

    return {
      shortName,
    };
  },
};
</script>

<template>
  <div
    :class="[
      'font-normal bg-thirdly rounded-full text-sm text-white flex justify-center items-center',
      { 'w-6 h-6': size === 'small' },
      { 'w-8 h-8': size === 'medium' },
      { 'w-10 h-10': size === 'large' },
    ]"
  >
    {{ shortName }}
  </div>
</template>
