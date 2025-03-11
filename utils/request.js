import Request from 'luch-request' // 使用npm
import { BASE_URL } from '@/dd-env'
const http = new Request()
http.setConfig(config => {
  config.baseURL = BASE_URL //
  //超时时间
  config.timeout = 60000
  console.log('设置跟路径', BASE_URL)
  return config
})
// 请求拦截
http.interceptors.request.use(
  config => {
    //请求前
    console.log('请求前')
    return config
  },
  config => {
    //请求错误
    console.log('请求错误')
    return Promise.reject(config)
  }
)

// 响应拦截
http.interceptors.response.use(
  response => {
    //响应成功
    return response.data
  },
  response => {
    switch (response.statusCode) {
      case 401:
        // 401 清除token信息并跳转到登录页面
        uni.clearStorageSync('token')
        uni.reLaunch({
          url: '/pages/login/login'
        })
        break
      case 451:
        uni.showToast({
          title: '访问限制,请联系客服',
          icon: 'none'
        })
        break
      default: //其他错误
        uni.showToast({
          title: response.data.msg || '请求失败',
          icon: 'none'
        })
    }
    //响应失败
    console.log('响应错误')
    return Promise.reject(response)
  }
)

export { http }
