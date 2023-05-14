<script lang="ts">
import NotificationIcon from "./Icons/Notification.vue";
import ArrowDownIcon from "./Icons/ArrowDown.vue";
import ShortName from "./Common/shortName.vue";

export default {
  name: "NavBar",
  components: {
    NotificationIcon,
    ArrowDownIcon,
    ShortName,
  },
  data() {
    return {
      dropDownOpen: false,
    };
  },
  props: {
    userName: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="sticky top-0 z-140 bg-primary">
    <div
      class="border-b border-gray-scale-two w-full h-16 flex items-center justify-between bg-white rounded-tl-lg"
    >
      <div />
      <div class="flex justify-between mr-20">
        <div class="flex items-center relative">
          <NotificationIcon />
        </div>
        <div class="mr-2 ml-10">
          <ShortName :userName="userName" :size="'small'" />
        </div>
        <div
          class="text-primary font-normal cursor-pointer flex items-center"
          @click="dropDownOpen = !dropDownOpen"
        >
          <p>{{ userName }}</p>
          <dv class="ml-8"><ArrowDownIcon /></dv>
        </div>
        <div
          class="absolute border border-t-0 border-gray-scale-two shadow-xl text-gray-700 rounded-b-lg w-48 mt-11 right-0 mr-6 bg-white"
          :class="dropDownOpen ? '' : 'hidden'"
        >
          <a
            href="#"
            @click="dropDownOpen = !dropDownOpen"
            class="block px-4 py-2 hover:bg-gray-scale-two"
            >Account</a
          >
          <a
            href="#"
            @click="dropDownOpen = !dropDownOpen"
            class="block px-4 py-2 hover:bg-gray-scale-two"
            >Settings</a
          >
          <a
            href="#"
            @click="dropDownOpen = !dropDownOpen"
            class="block px-4 py-2 hover:bg-gray-scale-two"
            >Logout</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
