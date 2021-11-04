<template>
  <div class="bg-gray-700 h-10 flex items-center">
    <div class="pl-5 flex gap-1.5" @mouseover="isShowTrue" @mouseleave="isShowFalse">
      <button type="button" class="inline-flex items-center p-1 hover:px-0 border border-transparent rounded-full shadow-sm  bg-red-600" @click="gotoHome">
        <font-awesome-icon icon="times" class="icon-size"  v-show="isShow" />
      </button>
      <button type="button" class="inline-flex items-center p-1 hover:px-0 border border-transparent rounded-full shadow-sm  bg-yellow-600">
        <font-awesome-icon icon="minus" class="icon-size"  v-show="isShow" />
      </button>
      <button type="button" class="inline-flex items-center p-1 hover:px-0 border border-transparent rounded-full shadow-sm  bg-green-600">
        <font-awesome-icon icon="expand-arrows-alt" class="icon-size"  v-show="isShow" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name:'Header',
  setup(_,context){
    const isShow=ref(false)
    const gotoHome=()=>{
      context.emit('red-btn-click')
    }
    const isShowTrue=()=>{
      isShow.value=true
    }
    const isShowFalse=()=>{
      isShow.value=false
    }
    return{
      gotoHome,isShow,isShowTrue,isShowFalse
    }
  }
})
</script>

<style scoped>
  .icon-size{
    font-size: 5px;
    margin: 0px 0.8px;
  }
</style>
