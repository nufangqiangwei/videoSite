<template>
  <div class="ci_label">
    <i class="icon icon_close"></i>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less" scoped>
  .ci_label {
    width: 75px;
    height: 26px;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    display: inline-block;
    border: 1px solid #F1F2F3;
    color: #61666D;
    border-radius: 6px;
    transition: background-color .3s, color .3s;
    &:hover {
      background-color: #E3E5E7;
      color: #18191C;
      cursor: pointer;
    }
  }
</style>