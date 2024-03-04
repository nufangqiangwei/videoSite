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