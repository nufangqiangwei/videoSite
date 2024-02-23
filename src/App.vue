<template>
  <div class="common-layout">
    <meta name="referrer" content="no-referrer" />
    <el-container>
      <el-header height="75">
        <heaterTitle/>
      </el-header>
      <el-main>
        <indexVideoGirdPage/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import heaterTitle from './components/title.vue'
import indexVideoGirdPage from './components/indexVideoGirdPage.vue'

export default {
  name: 'App',
  components: {
    heaterTitle, indexVideoGirdPage
  },
}
</script>

<style>

</style>
