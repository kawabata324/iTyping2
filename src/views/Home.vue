import HelloWorld from '@/components/HelloWorld.vue';
<template>
  <div class="home">
    <div class=" bg-black h-screen text-white text-sm ">
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
            id="comand"
          />
        </div>
        <p v-show="!collectCommand" class="text-red-500">Error:Please type 'cd TypingGame'</p>
        <p>
          Hello World !<br />
          If you want to start the game , You type '<span class="text-blue-500">cd TypingGame</span>' after $ and
          press enter.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import {useRouter} from 'vue-router'
// import {reactive} from 'vue'
export default {
  name: "Home",
  setup() {
    const router=useRouter()
    const inputCommandRef = ref("");
    const collectCommand =ref(true)
    const Useranswer = () => {
      console.log(inputCommandRef.value);
      if (inputCommandRef.value === "cd TypingGame") {
        console.log("gamestart");
        router.push('/game')
      } else {
        console.log("gamenostart");
        collectCommand.value=false
      }
    };
    return {
      Useranswer,
      inputCommandRef,
      collectCommand
    };
  },
};
</script>
<style scoped>
  input:focus{
    outline:none;
  }
</style>
