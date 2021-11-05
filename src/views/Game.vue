<template>
  <div class="game">
    <div class=" bg-black min-h-screen text-white text-sm ">
      <div class="text-white">
        <span class="text-green-500">Typinguser@TypingusernoMacBookMax</span>
        <span>:</span>
        <span class="text-blue-300 px-2">{{ PathRef }}</span
        ><br />
        <div class="flex">
          <label for="command" class="w-4">$</label>
          <input
            type="text"
            class="bg-black flex-1"
            v-model="inputCommandRef"
            @keydown.enter="Useranswer"
            autocomplete="off"
            v-focus
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
          {{ ClearmessageRef }}
        </p>
        <span class="text-blue-500 mr-6">Your Clear Command Count:</span
        >{{ ClearCountRef }}/{{ TypingCommands.length }}
        <p><span class="text-purple-500 mr-6">Timer:</span>{{ TimerRef }}</p>
        <pre>

{{ ResponsemsgRef }}
        </pre>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, ref } from "@vue/reactivity";
import {
  onMounted,
  watchEffect,
  watch,
  defineComponent,
} from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { Howl } from "howler";

export default defineComponent({
  setup() {
    let IntervalId = 0;

    const router = useRouter();

    let ClearCountRef = ref(0);
    let TimerRef = ref(0);

    let clearGameRef = ref(false);
    const TypingCommandRef = ref("");
    const inputCommandRef = ref("");
    const collectCommand = ref(true);

    let PathRef = ref("~/TypingGame");
    let ClearmessageRef = ref("");
    let ResponsemsgRef = ref("");

    let TypingCommands = reactive([
      // { id: 1, name: "cd ~" },
      // { id: 2, name: "git status" },
      { id: 3, name: "git add ." },
      { id: 4, name: "git commit -m 'comment'" },
      { id: 5, name: "git checkout -b branchName" },
      { id: 6, name: "git fetch" },
      { id: 7, name: "git pull origin develop" },
      // { id: 8, name: "git branch -a" },
      // { id: 9, name: "git push origin branchName" },
      // { id: 10, name: "yarn serve" },
      // { id: 11, name: "npm run serve" },
      // { id: 12, name: "mkdir directoryName" },
      // { id: 13, name: "git diff" },
      // { id: 14, name: "git fetch --prune" },
      // { id: 15, name: "git branch -D branchName" },
      // { id: 16, name: "git merge develop" },
      // { id: 17, name: "pwd" },
      // { id: 18, name: "code ." },
      // { id: 19, name: "vue create typing-game" },
    ]);

    const RandomCommand = () => {
      if (!TypingCommands.length) {
        TypingCommandRef.value = "TypingGame successfully !";
        clearGameRef.value = true;

        typeWriter();
        clearInterval(IntervalId);
        return;
      }

      // ランダムなコマンドの生成
      const randomIndex = Math.floor(Math.random() * TypingCommands.length);
      const randomCommand = TypingCommands[randomIndex];

      // ランダムコマンドを表示する
      TypingCommandRef.value = randomCommand.name;
    };

    const Useranswer = () => {
      if (inputCommandRef.value === TypingCommandRef.value) {

        //本来の最初のコマンドと一致するinputCommandをセレクトコマンド変数にする
        let selectCommand = TypingCommands.find(
          (TypingCommand) => TypingCommand.name === inputCommandRef.value
        );

        if (selectCommand !== undefined) {
          changeResponsemsg(selectCommand.id);
        }

      TypingCommands = TypingCommands.filter(
        (TypingCommand) => TypingCommand !== selectCommand
      );

      // 初期化
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

    const typeWriter = () => {
      let i = 0;
      setInterval(() => {
        let message = `If you want to end game , You type 'cd commandExplanation' after $ and press enter.`;
        if (i < message.length) {
          ClearmessageRef.value += message.charAt(i);
          i++;
        }
      }, 100);
    };

    const changeResponsemsg = (id: number) => {
      if (id === 1) {
        PathRef.value = "~";
        ResponsemsgRef.value = "";
      }
      if (id === 2) {
        ResponsemsgRef.value = `On branch develop
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
      if (id === 4) {
        ResponsemsgRef.value = `[main fc2e1fa] comment
2 files changed, 255 insertions(+), 199 deletions(-)
rewrite src/views/Game.vue (79%)`;
      }
      if (id === 5) {
        ResponsemsgRef.value = `Switched to a new branch 'branchName'`;
      }
      if (id === 6) {
        ResponsemsgRef.value = `remote: Enumerating objects: 10, done.
remote: Counting objects: 100% (10/10), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 6 (delta 4), reused 5 (delta 4), pack-reused 0
Unpacking objects: 100% (6/6), 1.36 KiB | 173.00 KiB/s, done.`;
      }
      if (id === 7) {
        ResponsemsgRef.value = `Enumerating objects: 11, done.
Counting objects: 100% (11/11), done.
Delta compression using up to 8 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (6/6), 2.82 KiB | 2.82 MiB/s, done.
Total 6 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To https://github.com/kawabata324/iTyping2.git
  fa29aef..fc2e1fa  develop -> develop`;
      }
      if (id === 8) {
        ResponsemsgRef.value = `
  develop
  main
  remotes/origin/develop
  remotes/origin/main`;
      }
      if (id === 9) {
        ResponsemsgRef.value = `[main 68e575c] comment
1 file changed, 25 insertions(+), 6 deletions(-)`;
      }
      if (id === 10 || id === 11) {
        ResponsemsgRef.value = `$ vue-cli-service serve
INFO  Starting development server...
98% after emitting CopyPlugin

DONE  Compiled successfully in 3307ms
  App running at:
  - Local:   http://localhost:8080/
  - Network: unavailable

  Note that the development build is not optimized.
  To create a production build, run npm run build.`;
      }
      if (id === 12) {
        ResponsemsgRef.value = ``;
      }
      if (id === 13) {
        ResponsemsgRef.value = `diff --git a/src/router/index.js b/src/router/index.js
  index 12a3ef3..0c9b5a7 100644
  --- a/src/router/index.js
  +++ b/src/router/index.js
  @@ -14,6 +14,11 @@ const routes = [
    // this generates a separate chunk (about.[hash].js) for this route
       // which is lazy-loaded when the route is visited.
       component: () => import(/* webpackChunkName: "about" */ '../views/Game.vue')
  +  },
  +  {
    +    path:'/command',
  +    name:'CommandExplanation',
  +    component: () => import(/* webpackChunkName: "about" */ '../views/CommandExplanation.vue')
    }
  ]

  diff --git a/src/views/Game.vue b/src/views/Game.vue
  index ef41177..ef08ebd 100644
  --- a/src/views/Game.vue
  +++ b/src/views/Game.vue
  @@ -32,7 +32,8 @@
          </p>
          <p><span class="text-purple-500 mr-6">Timer:</span>{{ TimerRef }}</p>
          <pre>
  -          {{ ResponsemsgRef }}
  +
  +{{ ResponsemsgRef }}
          </pre>
        </div>
      </div>
  @@ -179,6 +180,13 @@ rewrite src/views/Game.vue (79%)`;
      }
      if (id === 14) {
        ResponsemsgRef.value = ` - [deleted]         (none)     -> origin/feature/chart.js_test
- [deleted]         (none)     -> origin/feature/
- [deleted]         (none)     -> origin/hotfirqqrqrqq2
- [deleted]         (none)     -> origin/setup-testing
remote: Enumerating objects: 53, done.
remote: Counting objects: 100% (50/50), done.
remote: Compressing objects: 100% (11/11), done.
remote: Total 27 (delta 20), reused 22 (delta 15), pack-reused 0
Unpacking objects: 100% (27/27), 69.18 KiB | 1.15 MiB/s, done.
  d28221b..ce2rwqr develop    -> origin/develop
  a2a22rr..8erwwrr  main       -> origin/main
  a2r3q3r..8e321d6  prod       -> origin/prod
 * [new tag]         4.0.0.2    -> 4.0.0.2
 * [new tag]         4.0.0.1    -> 4.0.0.1`;
      }
      if (id === 15) {
        ResponsemsgRef.value = `Deleted branch branchName (was 21393434)`;
      }
      if (id === 16) {
        ResponsemsgRef.value = ` src/router/index.js              |   5 +++++
src/views/CommandExplanation.vue |  59 ++++++++++++++++++++++++++++++++++++++++++++++++++
src/views/Game.vue               | 195 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-----------------------------------
src/views/Home.vue               |  40 ++++++++++++++++------------------
4 files changed, 236 insertions(+), 63 deletions(-)
create mode 100644 src/views/CommandExplanation.vue`;
      }
      if (id === 17) {
        if (PathRef.value === "~/TypingGame") {
          ResponsemsgRef.value = `/Users/TypingUser/TypingGame`;
        }
        if (PathRef.value === "~") {
          ResponsemsgRef.value = `/Users/TypingUser`;
        }
      }
      if (id === 18) {
        ResponsemsgRef.value = ``;
      }
      if (id === 19) {
        ResponsemsgRef.value = `Vue CLI v4.5.14
✨  Creating project in /Users/kawabataharuki/Documents/code/Vue3Practice/test.
🗃  Initializing git repository...
⚙️  Installing CLI plugins. This might take a while...
added 1285 packages, and audited 1286 packages in 1m
83 packages are looking for funding
  run 'npm fund' for details

43 vulnerabilities (18 moderate, 25 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues possible (including breaking changes), run:
  npm audit fix --force

Some issues need review, and may require choosing
a different dependency.

Run 'npm audit' for details.
🚀  Invoking generators...
📦  Installing additional dependencies...
added 67 packages, and audited 1353 packages in 8s

90 packages are looking for funding
  run 'npm fund' for details

45 vulnerabilities (20 moderate, 25 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues possible (including breaking changes), run:
  npm audit fix --force

Some issues need review, and may require choosing
a different dependency.

Run 'npm audit' for details.
⚓  Running completion hooks...
📄  Generating README.md...
🎉  Successfully created project typing-game.
👉  Get started with the following commands:`;
      }
    };

    onMounted(() => {
      RandomCommand();

      IntervalId = window.setInterval(()=>{
        TimerRef.value++
      }, 1000);
    });

    watchEffect(() => {
      if (clearGameRef.value) {

        if (inputCommandRef.value === "cd commandExplanation") {
          router.push("/command");
        }
      }
    });

    watch(inputCommandRef, () => {
      const audio = new Howl({ src: "@/assets/sounds/nc159115.mp3" });
      audio.play();
    });
    
    return {
      Useranswer,
      inputCommandRef,
      TypingCommandRef,
      TypingCommands,
      RandomCommand,
      collectCommand,
      ClearCountRef,
      TimerRef,
      clearGameRef,
      ResponsemsgRef,
      changeResponsemsg,
      PathRef,
      ClearmessageRef,
      typeWriter,
    };
  },
});
</script>
<style scoped>
input {
  outline: none;
}
</style>
