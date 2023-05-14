<script lang="ts">
import { computed } from "vue";

import SideBar from "../SideBar.vue";
import NavBar from "../Navbar.vue";
import { userStore } from "../../store/user";
import { Roles } from "../../utils/constants";

export default {
  name: "Container",
  components: {
    SideBar,
    NavBar,
  },

  setup() {
    const useUserStore = userStore();
    const user = computed(() => {
      return {
        userName: useUserStore.getUserName,
        isManager: useUserStore.getUserRole === Roles.MANAGER,
      };
    });

    return {
      user,
    };
  },
};
</script>

<template>
  <div class="leading-normal tracking-normal">
    <div class="flex flex-wrap">
      <SideBar :userName="user.userName" :isManager="user.isManager" />
      <div class="w-full m-l-60">
        <NavBar :userName="user.userName" />
        <div class="p-6 bg-gray-100 mb-20">
          <div class="lg:px-36 sm:px-1">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
