import { http } from '@/utils/request.js'
import { getPublicUrl } from '@/utils/common.js'

//登录
export const login = params => {
  return http.post(`${getPublicUrl()}/login`, params)
}
