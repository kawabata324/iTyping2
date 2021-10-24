<template>
  <div class="game">
        <div class=" bg-black h-screen text-white text-sm ">
      <div class="text-white">
        <span class="text-green-500">Typinguser@TypingusernoMacBookMax</span>
        <span>:</span>
        <span class="text-blue-300 px-2">~/TypingGame</span><br />
        <div class="flex">
          <label for="command" class="w-4">$</label>
          <input
            type="text"
            class="bg-black flex-1"
            v-model="inputCommandRef"
            @keydown.enter="Useranswer"
            autocomplete="off"
            id="command"
          />
        </div>
        <p v-show="!collectCommand" class="text-red-500">Error:your typing is not collect.</p>
        <p>
          {{ TypingCommandRef }}
        </p>
        <p v-show="clearGameRef">{{ messageRef }}<span class="text-blue-500">{{ messageRef2 }}</span>' after $ and
          press enter.</p>
        <p>
          <span class="text-blue-500 mr-6">Your Clear Command Count:</span>{{ClearCountRef}}/{{ TypingCommands.length }}
        </p>
        <p>
          <span class="text-purple-500 mr-6">Timer:</span>{{TimerRef}}
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
      let IntervalId=ref('')
      let ClearCountRef=ref(0)
      let TimerRef=ref(0)
      let clearGameRef=ref(false)
      const TypingCommandRef=ref('')
      const inputCommandRef = ref('');
      const collectCommand =ref(true)
      let messageRef=ref("")
      let messageRef2=ref("")
      let TypingCommands=reactive([
        {id:1,name:'cd Documents'},
        {id:2,name:'git status'},
        // {id:3,name:'git add .'},
        // {id:4,name:"git commit -m 'comment'"},
        // {id:5,name:'git checkout -b branchName'},
        // {id:6,name:'git fetch'},
        // {id:7,name:'git pull origin develop'},
        // {id:8,name:'git branch -a'},
        // {id:9,name:'git push origin branchName'},
        // {id:10,name:'yarn serve'},
        // {id:11,name:'npm run serve'},
        // {id:12,name:'mkdir directoryName'},
        // {id:13,name:'git diff'},
        // {id:14,name:'git fetch --prune'},
        // {id:15,name:'git branch -d branchName'},
        // {id:16,name:'git merge origin develop'},
        // {id:17,name:'pwd'},
        // {id:18,name:'code .'},
        // {id:19,name:'vue create typing-game'}
      ])
      const RandomCommand=()=>{
        if(!TypingCommands.length){
          TypingCommandRef.value='TypingGame successfully !'
          typeWriter()
          clearGameRef.value=true
          clearInterval(IntervalId)
          return
        }
        const randomIndex=Math.floor(Math.random()*TypingCommands.length)
        const randomCommand=TypingCommands[randomIndex]
        TypingCommands=TypingCommands.filter(TypingCommand=>TypingCommand!==randomCommand)
        TypingCommandRef.value=randomCommand.name
      }
      const Useranswer = () => {
      if (inputCommandRef.value === TypingCommandRef.value) {
        RandomCommand()
        inputCommandRef.value=''
        ClearCountRef.value++
        collectCommand.value=true
      } else {
        collectCommand.value=false
        inputCommandRef.value=''
        return
      }
    };
      const CountUp=()=>{
        TimerRef.value++
      }
      const typeWriter=()=>{
      let i=0
      let i2=0
      setInterval(()=>{
        let message="If you want to end game , You type '"
        let message2="cd commandExplanation"
        if(i<message.length){
          messageRef.value+=message.charAt(i)
          i++
        }
        else if(i2<message2.length){
          messageRef2.value+=message2.charAt(i2)
          i2++
        }
      },100)
    }
      onMounted(
        ()=>{
          RandomCommand()
          // IntervalId=setInterval(CountUp,1000)
        }
      )
      //clearGamerefがtrueだったらcommand入力したら飛ぶようにするメソッド作る
      return{
        Useranswer,
        inputCommandRef,
        TypingCommandRef,
        TypingCommands,
        RandomCommand,
        collectCommand,
        ClearCountRef,
        TimerRef,
        CountUp,
        IntervalId,
        clearGameRef,
        typeWriter,
        messageRef,
        messageRef2
      }
    }
  }
  </script>
<style scoped>
input{
  outline: none;
}
</style>
