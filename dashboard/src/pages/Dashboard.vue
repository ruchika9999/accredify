<script lang="ts">
import { onMounted, computed } from "vue";
import { userStore } from "../store/user";

import SideBar from "../components/SideBar.vue";
import NavBar from "../components/Navbar.vue";
import CareerGoal from "../components/DashBoard/CareerGoal.vue";
import RecentDocuments from "../components/DashBoard/RecentDocuments.vue";
import { Roles, DashboardMessage } from "../utils/constants";

export default {
  name: "Dashboard",
  components: {
    SideBar,
    NavBar,
    CareerGoal,
    RecentDocuments,
  },

  setup() {
    const useUserStore = userStore();

    onMounted(() => {
      useUserStore.fetchUser();
    });

    const user = computed(() => {
      return {
        username: useUserStore.getUserName,
        isManager: useUserStore.getUserRole === Roles.MANAGER,
        isLoading: useUserStore.getLoading,
        dashBardMessage:
          useUserStore.getUserRole === Roles.MANAGER
            ? DashboardMessage.FOR_MANAGER
            : DashboardMessage.FOR_PERSONAL,
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
      <SideBar :userName="user.username" :isManager="user.isManager" />
      <div class="w-full m-l-60">
        <NavBar />
        <div class="p-6 bg-gray-100 mb-20">
          <div class="lg:px-36 sm:px-1">
            <div class="mt-4">
              <p
                :class="[
                  'text-2xl font-bold mb-2 lg:mb-0',
                  { hidden: user.isLoading === 'failed' },
                ]"
              >
                Hi, {{ user.username }}👋
              </p>
              <p v-if="user.isLoading === 'loading'" class="hidden">
                loading...
              </p>
              <p class="font-normal text-gray-scale-one mt-2">
                {{ user.dashBardMessage }}
              </p>
            </div>
            <div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-10 mt-12">
              <div
                v-if="user.isManager"
                :class="user.isManager ? 'lg:col-span-1' : 'hidden'"
              >
                <CareerGoal />
              </div>

              <div :class="user.isManager ? 'lg:col-span-2' : 'lg:col-span-4'">
                <RecentDocuments />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
