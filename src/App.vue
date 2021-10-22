<template>
  <div id="nav">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "@/components/common/Header.vue";


export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
<style></style>
