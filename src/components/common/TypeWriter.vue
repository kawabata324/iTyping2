<template>
  <div>
    <p class="text-white">{{messageRef}}</p>
  </div>
</template>

<script lang="ts">
import{ref,onMounted, defineComponent,} from 'vue'
export default defineComponent({
  props:{
    message:String,
    id:String,
    clearFlag:Boolean
  },
  setup(props){
    let messageRef=ref('')
    const typeWriter = () => {
      let i = 0;
      setInterval(() => {
        if (i < props.message.length) {
          messageRef.value += props.message.charAt(i);
          i++;
      }} ,100);
    };
    onMounted(()=>{
      if(props.id==='1'){
        typeWriter()
      }
    })
    // watch('props.clearFlag',()=>{
    //   if(props.clearFlag){
    //     typeWriter()
    //   }
    // })

    return{
      typeWriter,
      messageRef
    }
  }
})
</script>

<style>

</style>
