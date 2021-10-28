<template>
  <div class="home">
    <div class=" bg-black h-screen text-white text-sm ">
      <div class="text-white">
        <span class="text-green-500">Typinguser@TypingusernoMacBookMax</span>
        <span>:</span>
        <span class="text-blue-300 px-2">~/</span><br />
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

      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  setup(){
    let commands=reactive([
      { id: 1, name: "cd ~",explain:'ディレクトリを移動する' },
      { id: 2, name: "git status",explain:'' },
      { id: 3, name: "git add ." },
      { id: 4, name: "git commit -m 'comment'" },
      { id: 5, name: "git checkout -b branchName" },
      { id: 6, name: "git fetch" },
      { id: 7, name: "git pull origin develop" },
      { id: 8, name: "git branch -a" },
      { id: 9, name: "git push origin branchName" },
      { id: 10, name: "yarn serve" },
      { id: 11, name: "npm run serve" },
      { id: 12, name: "mkdir directoryName",explain:'directoryNameというディレクトリを作成する' },
      { id: 13, name: "git diff" },
      { id: 14, name: "git fetch --prune" },
      { id: 15, name: "git branch -d branchName" },
      { id: 16, name: "git merge origin develop" },
      { id: 17, name: "pwd" ,explain:'現在のディレクトリのパスを調べる' },
      { id: 18, name: "code ." },
      { id: 19, name: "vue create typing-game" },
    ])
  return{
      commands
    }
  }
}
</script>

<style>

</style>
