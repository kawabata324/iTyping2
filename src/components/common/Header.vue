<template>
  <div class="bg-gray-700 h-10 flex items-center">
    <div class="pl-5 flex gap-1.5">
      <button type="button" class="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm  bg-red-600" @click="gotoHome"></button>
      <button type="button" class="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm  bg-yellow-600"></button>
      <button type="button" class="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm  bg-green-600"></button>
    </div>
  </div>
</template>

<script>
export default {
  name:'Header',
  setup(_,context){
    const gotoHome=()=>{
      context.emit('red-btn-click')
    }
    return{
      gotoHome
    }
  }
}
</script>

<style>

</style>
