<template>
  <div id="nav">
    <Header @red-btn-click='gotoHome' class=""/>
    <router-view />
  </div>
</template>
<script lang="ts">
import Header from "./components/common/Header.vue";
import { defineComponent } from "@vue/runtime-core";
import { useRouter } from 'vue-router';
export default defineComponent({
  name: "App",
  components: {
    Header,
  },
  setup(){
    const router=useRouter()
    const gotoHome=()=>{
      router.push('/')
    }
    return{
      gotoHome
    }
  }
});
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Zen+Old+Mincho&display=swap');
  #nav{
    font-family: 'Lato', sans-serif;
    font-family: 'Zen Old Mincho', serif;
  }
</style>
