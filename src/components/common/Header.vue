<template>
  <div class="bg-gray-700 h-10 flex items-center">
    <div class="pl-5 flex gap-1.5" @mouseover="isShow=true" @mouseleave="isShow=false">
      <button type="button" class="inline-flex items-center p-1 hover:px-0 border border-transparent rounded-full shadow-sm  bg-red-600" @click="gotoHome">
        <font-awesome-icon icon="times" class="icon-size"  v-show="isShow" />
        <font-awesome-icon icon="times" class="icon-size times"  v-show="!isShow" />
      </button>
      <button type="button" class="inline-flex items-center p-1 hover:px-0 border border-transparent rounded-full shadow-sm  bg-yellow-600">
        <font-awesome-icon icon="minus" class="icon-size"  v-show="isShow" />
        <font-awesome-icon icon="minus" class="icon-size minus"  v-show="!isShow" />
      </button>
      <button type="button" class="inline-flex items-center p-1 hover:px-0 border border-transparent rounded-full shadow-sm  bg-green-600">
        <font-awesome-icon icon="expand-arrows-alt" class="icon-size"  v-show="isShow" />
        <font-awesome-icon icon="expand-arrows-alt" class="icon-size arrow"  v-show="!isShow" />
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
    return{
      gotoHome,isShow
    }
  }
})
</script>

<style scoped>
  .icon-size{
    font-size: 3px;
    margin: 0;
  }
  .times{
    color: #DC2626;
  }
  .minus{
    color: #D97706;
  }
  .arrow{
    color: #059669;
  }
</style>
