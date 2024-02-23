<template>
  <div>
<!--    <div class="sourceSeb">-->
<!--      <el-button> b站</el-button>-->
<!--      <el-button> a站</el-button>-->
<!--      <el-button> youtube</el-button>-->
<!--    </div>-->
    <div class="videoFilter">
      <span id="timeLength">时长</span>
      <div style="float:left;width: 20px"/>
      <el-slider id="timeFilter"
                 v-model="timeFilterValue"
                 :marks="sliderStepMark"
                 range
                 :min="0"
                 :max="8"
                 @change="timeFilterChange"
      />
    </div>
    <el-divider></el-divider>
    <div id="videoTags" >
      <div v-for="(item, index) in tags" :key="index">
        <el-tag class="tag" type="info">
          {{ item }}
        </el-tag>
        <el-divider  direction="vertical" />
      </div>

    </div>

  </div>
</template>


<script>
export default {
  name: 'heaterTitle',
  created() {
    console.log('title created')
  },
  data() {
    return {
      timeFilterValue: [1,2],
      sliderStepMark: {
        1: '30s',
        2: '1min',
        3: '3min',
        4: '5min',
        5: '15min',
        6: '30min',
        7: '1h',
        8: '2h',
      },
      tags:[
        '标签1',
        '标签2',
        '标签3',
        '标签4',
        '标签5',
        '标签6',
        '标签7',
        '标签8',
        '标签9',
        '标签10',
        '标签11',
        '标签12',
        '标签13',
        '标签14',
        '标签15',
        '标签16',
        '标签17',
        '标签18',
        '标签19',
        '标签20',
        '标签21',
        '标签22',
        '标签23',
        '标签24',
        '标签25',
        '标签26',
        '标签27',
        '标签28',
        '标签29',
        '标签30',
        '标签31',
        '标签32',
        '标签33',
        '标签34',
        '标签35',
        '标签36',
        '标签37',
        '标签38',
        '标签39',
      ]
    }
  },
  methods: {
    timeFilterChange() {
      console.log('timeFilterChange。 min：',this.timeFilterValue[0], ' 。max:', this.timeFilterValue[1])
      this.$store.commit('changeTimeFilter', {
        min: this.convertTime(this.timeFilterValue[0]),
        max: this.convertTime(this.timeFilterValue[1])
      })
    },
    shouldShowDivider(index) {
      // 判断是否需要显示 el-divider
      return index !== this.tags.length - 1 && index !== 0;
    },
    convertTime(value){
      switch (value) {
        case 1:
          return 30
        case 2:
          return 60
        case 3:
          return 180
        case 4:
          return 300
        case 5:
          return 900
        case 6:
          return 1800
        case 7:
          return 3600
        case 8:
          return 7200
        default:
          return 0
      }
    }
  },
}

</script>


<style>
.videoFilter:after {
  content:"";
  display: block;
  clear: both;
}
#timeLength {
  float: left;
  padding-right: 20px;
  margin-top: 8px;
}

#timeFilter {
  width: 95%;
  float: left;
}
#videoTags{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px; /* 间隔大小 */
}
.divider {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
