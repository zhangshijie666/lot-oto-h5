import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: {
        token: '',
        userInfo: {}
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
