<template>
  <div id="videoContent" v-loading="loading">
    <div
        v-for="(item, index) in videoListData"
        style="margin-bottom: 30px"
    >
      <el-row :gutter="10">
        <el-col :span="4">
          <videoInfoCard :videoInfo="item[0]"/>
        </el-col>
        <el-col :span="4">
          <videoInfoCard :videoInfo="item[1]"/>
        </el-col>
        <el-col :span="4">
          <videoInfoCard :videoInfo="item[2]"/>
        </el-col>
        <el-col :span="4">
          <videoInfoCard :videoInfo="item[3]"/>
        </el-col>
        <el-col :span="4">
          <videoInfoCard :videoInfo="item[4]"/>
        </el-col>
        <el-col :span="4">
          <videoInfoCard :videoInfo="item[5]"/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>


<script>

import videoInfoCard from "@/components/videoInfoCard.vue";

export default {
  name: 'indexVideoGirdPage',
  components: {
    videoInfoCard
  },
  data() {
    return {
      videoList: [],
      page: 1,
      size: 30,
      loading: false,
      lastRequestBaseTime: 0,
    }
  },
  mounted() {
    console.log('indexVideoGirdPage mounted')
    this.$nextTick(() => {
      console.log('indexVideoGirdPage nextTick')
      document.addEventListener('scroll', () => {
        if (this.loading) {
          return
        }
        // 判断最后一行是否显示
        let lastRow = document.querySelector('#videoContent').lastElementChild
        let lastRowRect = lastRow.getBoundingClientRect()
        if (lastRowRect.top < window.innerHeight && !this.loading) {
          this.getVideoList()
        }

      })
    })
  },
  computed: {
    videoListData() {
      let result = this.groupArray(this.videoList, 6)
      if (result.length === 0) {
        return []
      }
      // 最后一个数组不足6个元素，使用初始值补齐
      if (result[result.length - 1].length < 6) {
        for (let i = result[result.length - 1].length; i < 6; i++) {
          result[result.length - 1].push({
            id: 0,
            title: '初始值',
            tags: ['标签1', '标签2', '标签3'],
            time: '2020-01-01 12:00:00',
            duration: 100,
            url: 'http://www.baidu.com',
          })
        }

      }
      return result
    },

  },
  methods: {
    groupArray(array, groupSize) {
      const groupedArray = [];
      for (let i = 0; i < array.length; i += groupSize) {
        groupedArray.push(array.slice(i, i + groupSize));
      }
      return groupedArray;
    },
    async getVideoList() {
      this.loading = true
      let queryParams = new URLSearchParams({
        lastRequestBaseTime: this.lastRequestBaseTime,
      }).toString()
      let response = await fetch('/history?' + queryParams)
      let data = await response.json()
      this.videoList.push(...data.data)
      this.lastRequestBaseTime = data.baseTime
      this.loading = false
    }
  },
}


</script>

<style scoped>

</style>
