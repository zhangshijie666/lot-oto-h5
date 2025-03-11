# 创建项目
1.使用 uniapp vue3基础模版 创建项目  node版本要求16

2.添加 .prettierrs 配置文件 .gitignore 配置文件 暂不配置eslint
``` js
module.exports = {
  printWidth: 120, // 每行代码长度（默认80）
  tabWidth: 2, // 每个tab相当于多少个空格（默认2）
  tabs: false, // 是否使用tab缩进（默认false）
  semi: false, // 声明结尾使用分号(默认true)
  singleQuote: true, // 使用单引号（默认false）
  quoteProps: 'as-needed', // 对象的key仅在必要时用引号
  trailingComma: 'none', // 多行使用拖尾逗号（默认none）
  bracketSpacing: true, // 对象大括号直接是否有空格（默认true）
  jsxBracketSameLine: false, // jsx > 是否另起一行
  arrowParens: 'avoid', // (x) => {} 是否要有小括号
  endOfLine: 'auto' // 结尾是 \n \r \n\r auto
}
 .gitignore 常见即可 主要是 node_modules dist 等
```

3.引入pinia 缓存数据 使用 pinia-plugin-persistedstate 持久化数据
``` js
main.js
import pinia from './store'
app.use(pinia)
//src/store/index.js
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate) // 配置持久化插件
export default pinia
//src/store/modules/user.js
import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: {
        token: '',
      }
    }
  },
  actions: {
    setUser(val) {
      this.user.token = val
    }
  },
  persist: {
    enabled: true, // 开启持久化
    strategies: [
      {
        key: 'user-store',
        storage: localStorage // 可以是 sessionStorage, localStorage 或自定义 storage
        // paths: ['token'] // 选择需要持久化的 state
      }
    ]
  }
})
```
4.引入 uview-plus 等 ui库 
``` js

// 如果您的项目是HX创建的，根目录又没有package.json文件的话，请先执行如下命令：
// npm init -y
// 安装
npm install uview-plus
npm install dayjs
npm install clipboard
// main.js，注意要在use方法之后执行
import uviewPlus, { setConfig } from 'uview-plus'
app.use(uviewPlus)
// 在项目根目录的uni.scss中引入此文件。
@import 'uview-plus/theme.scss';
// 在App.vue中首行的位置引入，注意给style标签加入lang="scss"属性
<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-plus/index.scss";
</style>
// 在项目的manifest.json中增加mergeVirtualHostAttributes配置
"mp-weixin" : {
	"appid" : "",
	...
	"mergeVirtualHostAttributes" : true
},
"mp-toutiao" : {
	"appid" : "",
	...
	"mergeVirtualHostAttributes" : true
}
// 配置easycom组件模式 全局引入
// pages.json
{
	"easycom": {
		"autoscan": true,
		// 注意一定要放在custom里，否则无效，https://ask.dcloud.net.cn/question/131175
		"custom": {
			"^u--(.*)": "uview-plus/components/u-$1/u-$1.vue",
			"^up-(.*)": "uview-plus/components/u-$1/u-$1.vue",
	        "^u-([^-].*)": "uview-plus/components/u-$1/u-$1.vue"
		}
	}
}
```
5.引入 axios 请求库 lodash 工具库 dayjs 时间库
``` js
//dayjs 时间库  vue3 全局注册(不推荐) 只能通过  import { inject } from 'vue' const $dayjs = inject('$dayjs')
import dayjs from 'dayjs'
dayjs().format('YYYY-MM-DD HH:mm:ss')
//lodash  按需引入减少打包体积
import { debounce } from 'lodash
const handleScroll = debounce(() => {
  console.log('Scrolled!');
}, 300);
//axios 库 fetch 库

```
5.添加 husky lint-staged 配置文件 做代码提交前的代码检查






