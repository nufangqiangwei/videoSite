<template>
  <div class="header_channel">
    <div class="channel_icons">
      <div class="channel_icons_item">
        <div class="icon_box icons_dynamic"></div>
        <span>动态</span>
      </div>
      <div class="channel_icons_item">
        <div class="icon_box icons_hot"></div>
        <span>热门</span>
      </div>
    </div>
    <div class="channel_container">
      <div class="container_left">
        <ci-label v-for="item in CHANNEL_TYPE_LIST" :key="item.value">{{ item.label }}</ci-label>
      </div>
      <div class="container_right">
        <div class="each_channel" v-for="item in CHANNEL_ICON_TYPE_LIST" :key="item.value">
          <i :class="['icon', item.icon]"></i>
          <span>{{ item.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CiLabel from '@/components/element/CiLabel.vue'
import { CHANNEL_TYPE_LIST, CHANNEL_ICON_TYPE_LIST } from '@/utils/constant'
import { $Video } from '@/api/api'
import { onMounted } from 'vue'


</script>

<style lang="less" scoped>
.header_channel {
  display: flex;
  align-items: center;
  height: 100%;
  .channel_icons {
    display: flex;
    .channel_icons_item {
      width: 40px;
      margin-right: 16px;
      .icon_box {
        width: 40px;
        height: 40px;
        border-radius: 40px;
      }
      .icons_dynamic {
        background-color: #ff9e2c;
      }
      .icons_hot {
        background-color: #f07775;
      }
      span {
        font-size: 13px;
        color: #18191C;
      }
    }
  }
  .channel_container {
    display: flex;
    .container_left {
      flex: 1;
      padding-right: 20px;
      display: grid;
      grid-auto-flow: column;
      grid-gap: 10px;
      grid-template-rows: repeat(2, 1fr);
      border-right: 1px solid #E3E5E7;
    }
    .container_right {
      width: 230px;
      display: grid;
      grid-auto-flow: column;
      grid-gap: 10px;
      grid-template-rows: repeat(2, 1fr);
      padding-left: 20px;
      .each_channel {
        font-size: 14px;
        display: flex;
        color: #61666D;
        align-items: center;
      }
    }
  }
}
</style>