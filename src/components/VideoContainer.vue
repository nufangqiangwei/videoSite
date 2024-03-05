<template>
  <div class="video_container">
    <div class="each_video" v-for="item in videoList.arr" :key="item.uuid" @click="openUrl(item.uuid)">
      <img :src="item.coverUrl" alt="">
      <div class="video_title">{{ item.title }}</div>
      <div class="video_info">
        <span class="author">{{ item.authorName }}</span>
        <span class="date">{{ formatDate(item.uploadTime, false) }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { $Video } from '@/api/api'
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { VideoInfoType } from './type';
import { formatDate } from '@/utils/utils'
import { EXTERNAL_URL } from '@/utils/constant';

// 视频列表
const videoList = reactive({ arr: [] as Array<VideoInfoType> })
// 加载视频 page
const page = ref<number>(1)
// 加载视频 size
const size = ref<number>(30)
// 加载状态
const isLoaded = ref<boolean>(false)

// 获取 video 视频列表
const getVideoList = async (isFromScroll?: boolean): Promise<void> => {
  const data = await $Video.getVideoList(page.value, size.value)
  if (data?.code === 0 && Array.isArray(data?.data)) {
    const arr = data.data
    videoList.arr.push(...arr)
    isLoaded.value = Boolean(isFromScroll)
  }
} 

// 容器滚动事件
const onScroll = (): void => {
  const root = document.querySelector('#video_home_id') as HTMLDivElement
  const rootHeight = root.scrollHeight
  if (isLoaded.value) return
  if (window.innerHeight + root.scrollTop >= rootHeight) {
    console.log('jiazai ')
    isLoaded.value = true
    page.value ++
    getVideoList()
  }
}

// 打开外部 url 地址
const openUrl = (uuid: string): void => {
  const url = `${EXTERNAL_URL}/${uuid}`
  window.open(url)
}

onMounted(() => {
  getVideoList()
  const root = document.querySelector('#video_home_id') as HTMLDivElement
  root.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
  const root = document.querySelector('#video_home_id') as HTMLDivElement
  root.removeEventListener('scroll', onScroll)
})
</script>

<style lang="less" scoped>
.video_container {
  height: 100%;
  // overflow: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  align-content: flex-start;
  // justify-content: start;
  // display: grid;
  // grid-auto-flow: column;
  // grid-gap: 10px;
  // grid-template-rows: repeat(4, 1fr);
  .each_video {
    width: 258px;
    margin-right: 20px;
    height: max-content;
    margin-bottom: 20px;
    img {
      width: 100%;
      height: 145px;
      border-radius: 6px;
      &:hover {
        cursor: pointer;
      }
    }
    .video_title {
      text-align: start;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      height: 44px;
      display: -webkit-box; /* Safari */
      -webkit-line-clamp: 2; /* Safari and Chrome */
      -webkit-box-orient: vertical; /* Safari and Chrome */
      overflow: hidden;
      transition: color .3s;
      &:hover {
        cursor: pointer;
        color: #00AEEC;
      }
    }
    .video_info {
      text-align: start;
      font-size: 14px;
      display: flex;
      align-items: center;
      margin-top: 4px;
      transition: color .3s;
      width: max-content;
      &:hover {
        cursor: pointer;
        color: #00AEEC;
      }
      .date {
        margin-left: 15px;
      }
    }
  }
}
</style>