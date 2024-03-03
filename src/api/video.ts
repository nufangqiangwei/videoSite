import instance from '@/utils/request'

export const getVideoList = () => {
  return instance.get('/video/list')
}
