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
        <p v-show="!collectCommand" class="text-red-500">
          Error:Please type 'cd TypingGame'
        </p>
        <p>{{ messageRef }}</p>
        <p>{{ messageRef2 }}</p>
        <p>
          {{ messageRef3 }}<span class="text-blue-500">{{ messageRef4 }}</span
          >{{ messageRef5 }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";
// import {reactive} from 'vue'
export default {
  name: "Home",
  setup() {
    const router = useRouter();
    const inputCommandRef = ref("");
    let messageRef = ref("");
    let messageRef2 = ref("");
    let messageRef3 = ref("");
    let messageRef4 = ref("");
    let messageRef5 = ref("");
    const collectCommand = ref(true);
    const Useranswer = () => {
      if (inputCommandRef.value === "cd TypingGame") {
        router.push("/game");
      } else {
        collectCommand.value = false;
      }
    };
    const typeWriter = () => {
      let i = 0;
      let i2 = 0;
      let i3 = 0;
      let i4 = 0;
      let i5 = 0;
      setInterval(() => {
        let message = "Hello World! Welcome to TypingGame.";
        let message2 = "You can type faster and learn command";
        let message3 = "If you want to start the game , You type '";
        let message4 = "cd TypingGame";
        let message5 = "' after $ and press enter.";
        if (i < message.length) {
          messageRef.value += message.charAt(i);
          i++;
        } else if (i2 < message2.length) {
          messageRef2.value += message2.charAt(i2);
          i2++;
        } else if (i3 < message3.length) {
          messageRef3.value += message3.charAt(i3);
          i3++;
        } else if (i4 < message4.length) {
          messageRef4.value += message4.charAt(i4);
          i4++;
        } else if (i5 < message5.length) {
          messageRef5.value += message5.charAt(i5);
          i5++;
        }
      }, 100);
    };
    onMounted(() => {
      typeWriter();
    });
    return {
      Useranswer,
      inputCommandRef,
      collectCommand,
      messageRef,
      messageRef2,
      messageRef3,
      messageRef4,
      messageRef5,
      typeWriter,
    };
  },
};
</script>
<style scoped>
input:focus {
  outline: none;
}
</style>
