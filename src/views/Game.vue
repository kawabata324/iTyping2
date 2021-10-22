<template>
  <div class="game">
        <div class=" bg-black h-screen text-white text-sm ">
      <div class="text-white">
        <span class="text-green-500">Typinguser@TypingusernoMacBookMax</span>
        <span>:</span>
        <span class="text-blue-500 px-2">~</span><br />
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
        <p v-show="!collectCommand" class="text-red-500">Error:your typing is not collect.</p>
        <p>
          {{ TypingCommandRef }}
        </p>
      </div>
    </div>
  </div>
</template>
  <script>
import { reactive,ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
  export default {
    setup(){
      const TypingCommandRef=ref('')
      const inputCommandRef = ref('');
      const collectCommand =ref(true)
      const TypingCommands=reactive([
        {id:1,name:'cd'},
        {id:2,name:'git status'},
        {id:3,name:'git add .'}
      ])
      const RandomCommand=()=>{
        if(!TypingCommands.length){
          inputCommandRef.value='ゲーム終了'
          return
        }
        //ここら辺のロジックあとで考える
        // const newTypingCommands=TypingCommands.filer(TypingCommand=>TypingCommand.id!==randomCommand.id)
        const randomIndex=Math.floor(Math.random()*TypingCommands.length)
        const randomCommand=TypingCommands[randomIndex]
        TypingCommandRef.value=randomCommand.name
      }
      const Useranswer = () => {
      if (inputCommandRef.value === TypingCommandRef.value) {
        RandomCommand()
        inputCommandRef.value=''
      } else {
        collectCommand.value=false
        inputCommandRef.value=''
        return
      }
    };
      onMounted(
        ()=>{
          RandomCommand()
        }
      )
      return{
        Useranswer,
        inputCommandRef,
        TypingCommandRef,
        TypingCommands,
        RandomCommand,
        collectCommand
      }
    }
  }
  </script>
