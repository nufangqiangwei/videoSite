import { AxiosResponse } from "axios"

// 接口返回值参数
export interface ResponseApiType extends AxiosResponse {
  // 消息
  msg: string
  // 错误码
  code: number
  // 数据
  data: any
}
