//当前环境
// const env = 'DEVELOPMENT'
const env = 'PRODUCTION'
const SERVER_LIST = {
  PRODUCTION: 'https://h5.ddl2024.com/',
  DEVELOPMENT: 'http://192.168.1.145:8080/'
}
export const ENV = env
export const BASE_URL = SERVER_LIST[env]
