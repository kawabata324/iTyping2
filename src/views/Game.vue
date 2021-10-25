<template>
  <div class="game">
    <div class=" bg-black h-screen text-white text-sm ">
      <div class="text-white">
        <span class="text-green-500">Typinguser@TypingusernoMacBookMax</span>
        <span>:</span>
        <span class="text-blue-300 px-2">{{PathRef}}</span><br />
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
        <p v-show="!collectCommand" class="text-red-500">
          Error:your typing is not collect.
        </p>
        <p>
          {{ TypingCommandRef }}
        </p>
        <p v-show="clearGameRef">
          {{ messageRef }}<span class="text-blue-500">{{ messageRef2 }}</span
          >{{ messageRef3 }}
        </p>
        <p>
          <span class="text-blue-500 mr-6">Your Clear Command Count:</span
          >{{ ClearCountRef }}/{{ TypingCommands.length }}
        </p>
        <p><span class="text-purple-500 mr-6">Timer:</span>{{ TimerRef }}</p>
        <pre>
          {{ ResponsemsgRef }}
        </pre>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    let IntervalId = ref("");
    let ClearCountRef = ref(0);
    let TimerRef = ref(0);
    let clearGameRef = ref(false);
    const TypingCommandRef = ref("");
    const inputCommandRef = ref("");
    const collectCommand = ref(true);
    let PathRef=ref("~/TypingGame")
    let messageRef = ref("");
    let messageRef2 = ref("");
    let messageRef3 = ref("");
    let ResponsemsgRef = ref("");
    let TypingCommands = reactive([
      // { id: 1, name: "cd ~" },
      // { id: 2, name: "git status" },
      // { id: 3, name: "git add ." },
      {id:4,name:"git commit -m 'comment'"},
      {id:5,name:'git checkout -b branchName'},
      // {id:6,name:'git fetch'},
      {id:7,name:'git pull origin develop'},
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
    ]);
    let CopyCommands = reactive([
      { id: 1, name: "cd ~" },
      { id: 2, name: "git status" },
      { id: 3, name: "git add ." },
      { id: 4, name: "git commit -m 'comment'" },
      { id: 5, name: "git checkout -b branchName" },
      { id: 6, name: "git fetch" },
      { id: 7, name: "git pull origin develop" },
      { id: 8, name: "git branch -a" },
      { id: 9, name: "git push origin branchName" },
      { id: 10, name: "yarn serve" },
      { id: 11, name: "npm run serve" },
      { id: 12, name: "mkdir directoryName" },
      { id: 13, name: "git diff" },
      { id: 14, name: "git fetch --prune" },
      { id: 15, name: "git branch -d branchName" },
      { id: 16, name: "git merge origin develop" },
      { id: 17, name: "pwd" },
      { id: 18, name: "code ." },
      { id: 19, name: "vue create typing-game" },
    ]);

    const RandomCommand = () => {
      if (!TypingCommands.length) {
        TypingCommandRef.value = "TypingGame successfully !";
        typeWriter();
        clearGameRef.value = true;
        clearInterval(IntervalId);
        return;
      }
      const randomIndex = Math.floor(Math.random() * TypingCommands.length);
      const randomCommand = TypingCommands[randomIndex];
      TypingCommands = TypingCommands.filter(
        (TypingCommand) => TypingCommand !== randomCommand
      );
      TypingCommandRef.value = randomCommand.name;
    };
    const Useranswer = () => {
      if (inputCommandRef.value === TypingCommandRef.value) {
        let selectCommand = CopyCommands.find(
          (CopyCommand) => CopyCommand.name === inputCommandRef.value
        );
        changeResponsemsg(selectCommand.id);
        RandomCommand();
        inputCommandRef.value = "";
        ClearCountRef.value++;
        collectCommand.value = true;
      } else {
        collectCommand.value = false;
        inputCommandRef.value = "";
        return;
      }
    };
    const CountUp = () => {
      TimerRef.value++;
    };
    const typeWriter = () => {
      let i = 0;
      let i2 = 0;
      let i3 = 0;
      setInterval(() => {
        let message = "If you want to end game , You type '";
        let message2 = "cd commandExplanation";
        let message3 = "' after $ and press enter.";
        if (i < message.length) {
          messageRef.value += message.charAt(i);
          i++;
        } else if (i2 < message2.length) {
          messageRef2.value += message2.charAt(i2);
          i2++;
        } else if (i3 < message3.length) {
          messageRef3.value += message3.charAt(i3);
          i3++;
        }
      }, 100);
    };
    const changeResponsemsg = (id) => {
      if(id===1){
        PathRef.value="~"
        ResponsemsgRef.value=""
      }
      if (id === 2) {
        ResponsemsgRef.value =`On branch develop
Your branch is up to date with 'origin/develop'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
  modified:   src/views/Game.vue
  modified:   src/views/Home.vue

no changes added to commit (use "git add" and/or "git commit -a")`;
      }
      if (id === 3) {
        ResponsemsgRef.value = "";
      }
      if (id===4){
        ResponsemsgRef.value=`[main fc2e1fa] comment
2 files changed, 255 insertions(+), 199 deletions(-)
rewrite src/views/Game.vue (79%)`
      }
      if(id===5){
        ResponsemsgRef.value=`Switched to a new branch 'branchName'`
      }
      if(id===7){
        ResponsemsgRef.value=`Enumerating objects: 11, done.
Counting objects: 100% (11/11), done.
Delta compression using up to 8 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (6/6), 2.82 KiB | 2.82 MiB/s, done.
Total 6 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To https://github.com/kawabata324/iTyping2.git
  fa29aef..fc2e1fa  develop -> develop`
      }
      if(id===8){
        ResponsemsgRef.value=`
  develop
* main
  remotes/origin/develop
  remotes/origin/main`
      }
    };
    onMounted(() => {
      RandomCommand();
      // IntervalId=setInterval(CountUp,1000)
    });
    //clearGamerefがtrueだったらcommand入力したら飛ぶようにするメソッド作る
    return {
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
      messageRef2,
      messageRef3,
      ResponsemsgRef,
      changeResponsemsg,
      CopyCommands,
      PathRef,
    };
  },
};
</script>
<style scoped>
input {
  outline: none;
}
</style>
