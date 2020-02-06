import request from '../../../request'

// 用工形式 新增或修改
function  createOrEdit(data) {
  return request({
    url: '/maintenanceEmploymentTypeInfo/api/createOrEdit',
    method: 'post',
    data
  })
}

// 用工形式 删除
function  remove(data) {
  return request({
    url: '/maintenanceEmploymentTypeInfo/api/remove',
    method: 'post',
    data
  })
}

// 用工形式 分页查询
function  getQueryPage(data) {
  return request({
    url: '/maintenanceEmploymentTypeInfo/query/getQueryPage',
    method: 'get',
    params: data
  })
}

// 用工形式 拖拽排序
function  changeList(data) {
  return request({
    url: '/maintenanceEmploymentTypeInfo/api/changeList',
    method: 'post',
    data
  })
}

export default {
  createOrEdit,
  remove,
  getQueryPage,
  changeList
}
