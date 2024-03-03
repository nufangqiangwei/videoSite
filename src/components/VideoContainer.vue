<template>
  <div class="video_container">
    <div class="each_video" v-for="item in videoList.arr" :key="item.uuid">
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
import { onMounted, reactive } from 'vue'
import { VideoInfoType } from './type';
import { ResponseApiType } from '@/common/type';
import { formatDate } from '@/utils/utils'

const videoList = reactive({ arr: [] as Array<VideoInfoType> })

const getVideoList = async (): Promise<void> => {
  console.log('111111111111')
  const data = await $Video.getVideoList()
  console.log(data, 'data')
  if (data && data.code === 0) {
    videoList.arr = data.data
  }
} 

onMounted(() => {
  getVideoList()
})
</script>

<style lang="less" scoped>
.video_container {
  height: 100%;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  // justify-content: start;
  // display: grid;
  // grid-auto-flow: column;
  // grid-gap: 10px;
  // grid-template-rows: repeat(4, 1fr);
  .each_video {
    width: 258px;
    margin-right: 20px;
    
    img {
      width: 100%;
      height: 145px;
      border-radius: 6px;
    }
    .video_title {
      text-align: start;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
    }
    .video_info {
      text-align: start;
      font-size: 14px;
    }
  }
}
</style>