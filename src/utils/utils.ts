/**
 * 中国标准时间转字符串
 * @param date 
 * @returns 
 */
export const formatDate = (d: number, showYear = true): string => {
  const date = new Date(d * 1000)
  // 获取完整年份
  const year = date.getFullYear()
  console.log(date.getMonth(), 'date.getMonth()')
  
  // 获取月份，并补0
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  // 获取日期，并补0
  const day = date.getDate().toString().padStart(2, '0')
  if (!showYear) return `${month}-${day}`
  return `${year}-${month}-${day}`
}
