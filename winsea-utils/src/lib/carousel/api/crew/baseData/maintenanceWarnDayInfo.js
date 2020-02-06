import request from '../../../request'

// 预警天数 分页查询
function  getQueryPage(data) {
  return request({
    url: '/maintenanceWarnDayInfo/query/getQueryPage',
    method: 'get',
    params: data
  })
}

// 预警天数 修改
function  changeInfo(data) {
  return request({
    url: '/maintenanceWarnDayInfo/api/changeInfo',
    method: 'post',
    data
  })
}
export default {
  getQueryPage,
  changeInfo
}
