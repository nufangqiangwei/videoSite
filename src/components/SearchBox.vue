<template>
  <div class="search_box">
    <input type="text"
onfocus="if (value==defaultValue)value=''">
    <div class="icon_box">
      <i class="icon icon_search"></i>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
  .search_box {
    width: 500px;
    height: 40px;
    background-color: #FFFFFF;
    position: absolute;
    top: 13px;
    left: calc(50% - 250px);
    border-radius: 6px;
    display: flex;
    align-items: center;
    padding: 0 12px;
    box-sizing: border-box;
    input {
      height: 32px;
      flex: 1;
      border: none;
      outline: none;
      border-radius: 6px;
      padding: 0 8px;
      &:focus {
        background-color: #E3E5E7;
      }
    }
    .icon_box {
      width: 32px;
      height: 32px;
      border-radius: 6px;
      margin-left: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        cursor: pointer;
        background-color: #E3E5E7;
      }
    }
  }
</style>