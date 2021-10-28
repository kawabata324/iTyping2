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
        <p>{{ messages.message1 }}</p>
        <p>{{ messages.message2 }}</p>
        <p>
          {{ messages.message3 }}<span class="text-blue-500">{{ messages.message4 }}</span
          >{{ messages.message5 }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";
// import {reactive} from 'vue'
export default {
  name: "Home",
  setup() {
    const router = useRouter();
    const inputCommandRef = ref("");
    let messages = reactive({
      message1:'',
      message2:'',
      message3:'',
      message4:'',
      message5:''
    })
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
          messages.message1 += message.charAt(i);
          i++;
        } else if (i2 < message2.length) {
          messages.message2 += message2.charAt(i2);
          i2++;
        } else if (i3 < message3.length) {
          messages.message3 += message3.charAt(i3);
          i3++;
        } else if (i4 < message4.length) {
          messages.message4 += message4.charAt(i4);
          i4++;
        } else if (i5 < message5.length) {
          messages.message5 += message5.charAt(i5);
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
      messages,
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
