<template>
  <div class="home" id="video_home_id" @scroll="onScroll">
    <div class="home_background">
      <search-box></search-box>
    </div>
    <div class="home_channal_tag">
      <header-channel></header-channel>
    </div>
    <div class="home_channel_box">
      <video-container></video-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderChannel from '@/components/HeaderChannel.vue'
import VideoContainer from '@/components/VideoContainer.vue'
import SearchBox from '@/components/SearchBox.vue'

const onScroll = (): void => {
  // console.log(e, 111)
  // const root = document.querySelector('#video_home_id') as HTMLDivElement
  // console.log(root.scrollHeight, 'scrollHeight')
  // console.log(root.scrollTop, 'scrollTop')
  // console.log( window.innerHeight, ' window.innerHeight')
}
</script>

<style lang="less" scoped>
  .home {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    overflow: auto;
    .home_background {
      // height: 155px;
      background-color: #eaeaea;
      flex-shrink: 0;
      position: relative;
    }
    .home_channal_tag {
      height: 100px;
      // padding: 0 60px;
      max-width: 1920px;
      margin: 0 auto;
      flex-shrink: 0;
    }
    .home_channel_box {
      height: calc(100% - 255px);
      max-width: 1920px;
      margin: 0 auto;
      
    }
  }
</style>