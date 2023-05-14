<script lang="ts">
import HomeIcon from "../components/Icons/Home.vue";
import NoteIcon from "../components/Icons/Note.vue";
import IdeaIcon from "../components/Icons/Idea.vue";
import Protection from "../components/Icons/Protection.vue";
import SettingsIcon from "../components/Icons/Settings.vue";
import DisplayLogo from "../components/Common/DisplayLogo.vue";
import { RoutesName } from "../utils/constants";

export default {
  name: "Sidebar",
  components: {
    DisplayLogo,
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

  data() {
    return {
      navItems: [
        { id: 0, icon: HomeIcon, margin: "pl-3", route: RoutesName.DASHBOARD },
        { id: 1, icon: NoteIcon, margin: "pl-4", route: RoutesName.DOCUMENT },
        { id: 2, icon: IdeaIcon, margin: "pl-1", route: RoutesName.IDEA },
        { id: 3, icon: Protection, margin: "pl-2", route: RoutesName.SECURITY },
        {
          id: 4,
          icon: SettingsIcon,
          margin: "pl-2",
          route: RoutesName.SETTING,
        },
      ],
    };
  },

  computed: {
    activeIndex() {
      const currentRouteName = this.$route?.name;
      const activeNavItem = this.navItems.find(
        (navItem) => navItem.route === currentRouteName
      );
      return activeNavItem ? activeNavItem.id : null;
    },
  },
};
</script>

<template>
  <div
    class="w-60-fix fixed md:top-0 md:left-0 h-screen lg:block bg-primary border-r z-30"
    id="main-nav"
  >
    <div class="mb-4">
      <div
        class="h-60-px w-full flex items-center justify-center text-blue-400 h-10 mt-2"
      >
        <DisplayLogo :userName="userName" :isManager="isManager" />
      </div>
      <div class="mt-6">
        <router-link
          v-for="(navItem, index) in navItems"
          :key="index"
          :class="[
            'h-60-px w-full flex items-center justify-center text-blue-400 h-10 cursor-pointer hover:bg-secondly',
            navItem.margin, // add the margin class from the object
            { 'bg-secondly': index === activeIndex },
          ]"
          :to="{ name: navItem.route }"
          :data-test-id="navItem.route"
          :name="navItem.route"
        >
          <component
            :is="navItem.icon"
            class="h-6 w-6 fill-current mr-2"
            :isActive="index === activeIndex"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>
