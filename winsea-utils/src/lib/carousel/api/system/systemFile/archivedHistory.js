import request from '../../../request'

// 存档历史列表
function  getArchiveInfo(data) {
  return request({
    url: '/txFileArchiveInfo/query/getArchiveInfoByPage',
    method: 'get',
    params: data
  });
}
// 获取船舶/部门列表
function  getShipDeptList(data) {
  return request({
    url: '/txFileArchiveInfo/query/getArchiveInfoShipDeptList',
    method: 'get',
    params: data
  });
}
// 批量下载
function  batchAttachment(data) {
  return request({
    url: '/appendix/download/batchAttachment',
    method: 'get',
    params: data
  })
}
