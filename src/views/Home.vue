<template>
  <div class="home">
    <div class="home_background"></div>
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
    .home_background {
      height: 155px;
      background-color: #eaeaea;
    }
    .home_channal_tag {
      height: 100px;
      padding: 0 60px;
    }
    .home_channel_box {
      flex: 1;
    }
  }
</style>