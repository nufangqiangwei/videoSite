<template>
  <div class="ci_label">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less" scoped>
  .ci_label {
    width: 75px;
    height: 26px;
    display: inline-block;
    border: 1px solid #F1F2F3;
    color: #61666D;
    border-radius: 6px;
    transition: background-color .3s, color .3s;
    &:hover {
      background-color: #E3E5E7;
      color: #18191C;
    }
  }
</style>