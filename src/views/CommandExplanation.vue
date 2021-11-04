<template>
  <div class="home">
    <div class=" bg-black min-h-screen text-white text-sm ">
      <div class="text-white">
        <span class="text-green-500">Typinguser@TypingusernoMacBookMax</span>
        <span>:</span>
        <span class="text-blue-300 px-2">~/commandExplanation</span><br />
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
        <ul>
          <li v-for="command in commands" :key="command.id" class="mt-5">
            {{command.name}}    :   <span class="text-green-500"> {{command.explain}}</span>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive } from '@vue/reactivity'
export default {
  setup(){
    let commands=reactive([
      { id: 1, name: "cd ~",explain:'ディレクトリの移動' },
      { id: 2, name: "git status",explain:'ローカルの変更を確認する' },
      { id: 3, name: "git add .",explain:"ファイルの登録（コミットするため）" },
      { id: 4, name: "git commit -m 'comment'",explain:"ファイルの変更や追加をコミット" },
      { id: 5, name: "git checkout -b branchName",explain:"ブランチ作成 & 切り替え" },
      { id: 6, name: "git fetch",explain: "リモートから変更を取得する"},
      { id: 7, name: "git pull origin develop",explain:"リモートから変更を取得する" },
      { id: 8, name: "git branch -a",explain:"全てのブランチを確認する" },
      { id: 9, name: "git push origin branchName",explain:"リモートにプッシュ" },
      { id: 10, name: "yarn serve",explain:"ローカルサーバーの立ち上げ" },
      { id: 11, name: "npm run serve",explain:"ローカルサーバーの立ち上げ" },
      { id: 12, name: "mkdir directoryName",explain:'directoryNameというディレクトリを作成する' },
      { id: 13, name: "git diff",explain:"リモートとローカルのファイルの差分を抽出する" },
      { id: 14, name: "git fetch --prune",explain:"リモートブランチの作成" },
      { id: 15, name: "git branch -d branchName",explain:"ローカルブランチの削除" },
      { id: 16, name: "git merge origin develop",explain:"ブランチの結合"},
      { id: 17, name: "pwd" ,explain:'現在のディレクトリのパスを調べる' },
      { id: 18, name: "code .",explain:"editorを開く" },
      { id: 19, name: "vue create typing-game",explain:"vue-cliでプロジェクトの作成" },
    ])
  return{
      commands
    }
  }
}
</script>

<style scoped>
input {
  outline: none;
}
</style>
