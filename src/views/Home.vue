<template>
  <div class="home">
    <div class=" bg-black min-h-screen text-white text-sm ">
      <div class="text-white">
        <span class="text-green-500">Typinguser@TypingusernoMacBookMax</span>
        <span>:</span>
        <span class="text-blue-300 px-2">~</span><br />
        <div class="flex">
          <label for="comand" class="w-4">$</label>
          <input
            type="text"
            class="bg-black flex-1"
            v-model="inputCommandRef"
            @keydown.enter="Useranswer"
            autocomplete="off"
            v-focus
            id="comand"
          />
        </div>
        <p v-show="!collectCommand" class="text-red-500">
          Error:Please type 'cd TypingGame'
        </p>
        <TypeWriter class="whitespace-pre" :message="messageRef" id=1 />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { watch } from "@vue/runtime-core";
import TypeWriter from "@/components/common/TypeWriter.vue"
export default {
  name: "Home",
  components:{
    TypeWriter
  },
  setup() {
    const router = useRouter();
    const inputCommandRef = ref("");
    const messageRef = ref(`
    Hello World! Welcome to TypingGame.
    You can type faster and learn command
    If you want to start the game , You type 'cd TypingGame' after $ and press enter.
    `)
    const collectCommand = ref(true);
    const Useranswer = () => {
      if (inputCommandRef.value === "cd TypingGame") {
        router.push("/game");
      } else {
        collectCommand.value = false;
      }
    };
    watch(inputCommandRef,()=>{
      const audio=new Audio(require('@/assets/sounds/nc159115.mp3'))
      audio.currentTime=0
      audio.play()
    })
    return {
      Useranswer,
      inputCommandRef,
      collectCommand,
      messageRef,
    };
  },
};
</script>
<style scoped>
input:focus {
  outline: none;
}
</style>
