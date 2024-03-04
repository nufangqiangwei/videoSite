import instance from '@/utils/request'

export const getVideoList = (page = 1, size = 30) => {
  const url = `/video/list?page=${page}&size=${size}`
  return instance.get(url)
}
