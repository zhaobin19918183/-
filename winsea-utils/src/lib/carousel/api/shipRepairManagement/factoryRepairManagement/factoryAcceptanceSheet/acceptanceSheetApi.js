// 厂修预算单Api接口

import request from '../../../../utils/request'

// 验收单详细->工程类别一览查询
function  getRepairParameterCompany(data) {
  return request({
    url: '/repairParameterCompany/query/getRepairParameterCompany',
    method: 'get',
    params: data
  })
}

// 厂修工程单一览查询
function  getPageByCondition(data) {
  return request({
    url: '/repairYardAcceptanceInfo/query/getPageByCondition',
    method: 'get',
    params: data
  })
}

// 验收单状态集合查询 
function  getStatusList(data) {
  return request({
    url: '/repairYardAcceptanceInfo/query/getStatusList',
    method: 'get',
    params: data
  })
}
// 验收单修船厂集合查询
function  getShipyardList(data) {
  return request({
    url: '/repairYardAcceptanceInfo/query/getShipyardList',
    method: 'get',
    params: data
  })
}

// 验收单详情查询 
function  getAcceptanceInfo(data) {
  return request({
    url: '/repairYardAcceptanceInfo/query/getAcceptanceInfo',
    method: 'get',
    params: data
  })
}

// 验收单关联单据查询
function  getRelevanceBill(data) {
  return request({
    url: '/repairYardAcceptanceInfo/query/getRelevanceBill',
    method: 'get',
    params: data
  })
}

// 操作历史 
function  getBillOperateHis(data) {
  return request({
    url: '/repairYardAcceptanceInfo/query/getBillOperateHis',
    method: 'get',
    params: data
  })
}

// 验收单编辑 
function  updateBudgetInfo(data) {
  return request({
    url: '/repairYardAcceptanceInfo/api/updateBudgetInfo',
    method: 'post',
    data: data
  })
}

// 验收单确认
function  confirm(data) {
  return request({
    url: '/repairYardAcceptanceInfo/api/confirm',
    method: 'post',
    data: data
  })
}

// 验收单退回
function  returnAcceptanceInfo(data) {
  return request({
    url: '/repairYardAcceptanceInfo/api/returnAcceptanceInfo',
    method: 'post',
    data: data
  })
}

//  提交岸基
function  submitAcceptanceInfo(data) {
  return request({
    url: '/repairYardAcceptanceInfo/api/submitAcceptanceInfo',
    method: 'post',
    data: data
  })
}

// 验收单明细删除
function  deleteItem(data) {
  return request({
    url: '/repairYardAcceptanceInfo/api/deleteItem',
    method: 'post',
    data: data
  })
}