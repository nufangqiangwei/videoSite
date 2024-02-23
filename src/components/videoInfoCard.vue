<template>
  <el-card :body-style="{ padding: '0px', marginBottom: '1px' }">
    <div class="image-container element" @click="playVideo">
      <img
          alt="Image"
          :src="videoInfo.cover_url"
          class="image"
          referrer="no-referrer|origin|unsafe-url"
      />
    </div>

    <div style="padding: 14px;">
      <div style="height: 64px;overflow: hidden;">
        <span class="videoTitle" >{{ videoInfo.title }}
      </span>
      </div>
      <div class="bottom card-header videoDescribe element">
        <span @click="clickAuthor" >{{ videoInfo.web_site+' - ' + videoInfo.author_name }}</span>
      </div>
    </div>
  </el-card>
</template>

<script >
export default {
  props:{
    videoInfo: {
      type: Object,
      default: () => {
        return {
          id: 1,
          web_site: 'bilibili',
          author_name: '',
          title: "",
          video_desc: "",
          duration: 0,
          uuid: "",
          url: null,
          cover_url: "",
          upload_time: "",
          create_time: "",
          view: 0,
          danmaku: 0,
          reply: 0,
          favorite: 0,
          coin: 0,
          share: 0,
          now_rank: 0,
          his_rank: 0,
          like: 0,
          dislike: 0,
          evaluation: ""
        }
      }
    }
  },
  data () {
    return {
      loading: true,
      currentDate: '2021-06-01'
    }
  },
  methods: {
    getWebSitePlayBaseUrl(){
      if (this.videoInfo.web_site === 'bilibili'){
        return 'https://www.bilibili.com/video/'
      }else if (this.videoInfo.web_site === 'acfun'){
        return 'https://www.acfun.cn/v/'
      }else if (this.videoInfo.web_site === 'youtube'){
        return 'https://www.youtube.com/watch?v='
      }
    },
    getWebSiteAuthorBaseUrl(){
      if (this.videoInfo.web_site === 'bilibili'){
        return 'https://space.bilibili.com/'
      }else if (this.videoInfo.web_site === 'acfun'){
        return 'https://www.acfun.cn/u/'
      }else if (this.videoInfo.web_site === 'youtube'){
        return 'https://www.youtube.com/channel/'
      }
    },
    playVideo(){
      window.open(this.getWebSitePlayBaseUrl()+this.videoInfo.uuid)
    },
    clickAuthor(){
      window.open(this.getWebSiteAuthorBaseUrl()+this.videoInfo.author_web_uid)
    }
  }
}
</script>


<style >
.image-container {
  width: 100%; /* 设置容器元素的宽度 */
  position: relative;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-container::before {
  content: "";
  display: block;
  padding-top: 56%; /* 设置容器元素的高度为宽度的 4:3 比例 (例如 4/3 * 100% = 75%) */
}


.videoTitle {
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 2em;
  font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;
  font-weight: 500;
  line-height: 2em; /* or any other unit that equals two lines */
}

.videoDescribe{
  color: #9499A0;
  font-family: inherit;
  font-size: 13px;
  font-weight: 400;
  font-style: normal;
}

.element {
  cursor: pointer;
}
</style>
