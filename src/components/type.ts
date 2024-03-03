// 索引 channel 类型
export type ChannelType = {
  /**
   * 值
   */
  value: string
  /**
   * 显示标签
   */
  label: string
  /**
   * 图标
   */
  icon?: string
  /**
   * 子集
   */
  children?: Array<ChannelType>
}

// 获取视频的数据类型
export type VideoInfoType = {
  /**
   * 作者名称
   */
  authorName: string
  /**
   * 作者网页 uid
   */
  authorWebUid: string
  /**
   * 头像地址
   */
  avatar: string
  /**
   * 背景地址
   */
  coverUrl: string
  /**
   * 持续时间
   */
  duration: number
  /**
   * 名称
   */
  title: string
  /**
   * 上传时间
   */
  uploadTime: string
  /**
   * uuid
   */
  uuid: string
  /**
   * 视频描述
   */
  videoDesc: string
  /**
   * 网址
   */
  webSite: string
}
