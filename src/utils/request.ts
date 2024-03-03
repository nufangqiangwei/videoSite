import { ResponseApiType } from "@/common/type"
import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios"

class Axios {
  // axios 实例
  instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: 'https://video.lushen.click/api',
      timeout: 5000
    })
    this.requestInit()
    this.responseInit()
  }

  requestInit () {
    // 添加请求拦截器
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // 在发送请求之前做些什么
        return config
      }, (error: Error) => {
        // 对请求错误做些什么
        return Promise.reject(error)
      }
    )
  }

  responseInit () {
    // 添加响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        // 处理系统异常错误码（持续补充）
        const code = response.status
        switch(code) {
          case 500:

        }
        return response.data  as ResponseApiType
      }, (error: Error) => {
        return Promise.reject(error)
      }
    )
  }
}

export default new Axios().instance
