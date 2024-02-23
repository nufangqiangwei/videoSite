<template>
  <div id="videoContent" v-loading="loading">
    <el-row :gutter="10" v-for="item in videoListData" style="margin-bottom: 30px">
      <el-col :span="4" v-for="info in item">
        <videoInfoCard :videoInfo="info"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import videoInfoCard from "@/components/videoInfoCard.vue";
import {mapState} from "vuex";

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
    }
  },
  created() {
    this.getVideoList()
  },
  mounted() {
    this.$nextTick(() => {
      document.addEventListener('scroll', () => {
        if (this.loading) {
          return
        }
        // 判断最后一行是否显示
        let lastRow = document.querySelector('#videoContent').lastElementChild
        let lastRowRect = lastRow.getBoundingClientRect()
        if (lastRowRect.top < window.innerHeight && !this.loading){
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

    ...mapState({
      timeFilter: state => state.timeFilter
    })
  },
  watch: {
    timeFilter: {
      handler: function (newVal, oldVal) {
        console.log('timeFilter change', newVal, oldVal)
          this.page = 1
          this.videoList = []
          this.getVideoList()
      },
      deep: true
    }
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
        page: this.page,
        size: this.size,
        minDuration: this.timeFilter.min,
        maxDuration: this.timeFilter.max,
      }).toString()
      let response = await fetch(`/video/list?${queryParams}`)
      let data = await response.json()
      this.videoList.push(...data)
      this.page++
      this.loading = false
    }
  }
}

</script>

<style>
.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
