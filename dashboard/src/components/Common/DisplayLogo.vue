<script lang="ts">
import Logo from "../Icons/Logo.vue";
import ShortName from "./shortName.vue";

export default {
  name: "DisplayLogo",
  components: {
    Logo,
    ShortName,
  },
  props: {
    userName: {
      type: String,
      required: true,
    },
    isManager: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<template>
  <div class="flex items-center">
    <Logo v-if="isManager" />
    <ShortName v-else :userName="userName" />
  </div>
</template>
