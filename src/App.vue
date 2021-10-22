<template>
  <div id="nav">
    <Header @red-btn-click='gotoHome'/>
    <router-view />
  </div>
</template>
<script>
import Header from "@/components/common/Header.vue";
import { useRouter } from 'vue-router';

export default {
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
};
</script>
<style></style>
