<script lang="ts">
import SideBar from "../components/SideBar.vue";
import NavBar from "../components/Navbar.vue";

export default {
  name: "OtherPage",
  components: {
    SideBar,
    NavBar,
  },
};
</script>
<template>
  <div class="leading-normal tracking-normal" id="main-body">
    <div class="flex flex-wrap">
      <SideBar />

      <div class="w-full m-l-60">
        <NavBar />
      </div>
    </div>
  </div>
</template>
