// 修船模块-航修结算单Api接口

import request from '../../../../utils/request'
// 结算单一览查询
function  getPageByCondition(data) {
  return request({
    url: '/repairVoyageSettlementInfo/query/getPageByCondition',
    method: 'get',
    params: data
  })
}

// 结算单状态查询
function  getSettlementStatusList(data) {
  return request({
    url: '/repairVoyageSettlementInfo/query/getSettlementStatusList',
    method: 'get',
    params: data
  })
}

// 查询已验收的验收单信息集合 -制定结算单
function  getVoyageAcceptanceInfoWaitMakeSettlement(data) {
  return request({
    url: '/repairVoyageSettlementInfo/query/getVoyageAcceptanceInfoWaitMakeSettlement',
    method: 'get',
    params: data
  })
}

// 查询验收项目集合
function  getVoyageAcceptanceItemList(data) {
  return request({
    url: '/repairVoyageSettlementInfo/query/getVoyageAcceptanceItemList',
    method: 'get',
    params: data
  })
}

// 结算单编辑保存
function  saveSettlementInfo(data) {
  return request({
    url: '/repairVoyageSettlementInfo/api/saveSettlementInfo',
    method: 'post',
    data
  })
}

// 结算单提交
function  submitSettlementInfo(data) {
  return request({
    url: '/repairVoyageSettlementInfo/api/submitSettlementInfo',
    method: 'post',
    data
  })
}

// 结算单废弃
function  discardSettlementInfo(data) {
  return request({
    url: '/repairVoyageSettlementInfo/api/discardSettlementInfo',
    method: 'post',
    data
  })
}

// 结算单详情查询
function  getSettlementInfo(data) {
  return request({
    url: '/repairVoyageSettlementInfo/query/getSettlementInfo',
    method: 'get',
    params: data
  })
}

// 结算单操作历史查询
function  getBillOperateHis(data) {
  return request({
    url: '/repairVoyageAcceptanceInfo/query/getBillOperateHis',
    method: 'get',
    params: data
  })
}

// 结算单审核信息查询 / 退回
function  getAuditInformations(data) {
  return request({
    url: '/repairVoyageSettlementInfo/query/getAuditInformations',
    method: 'get',
    params: data
  })
}

// 结算单关联单据查询
function  getSettlementRelevanceBill(data) {
  return request({
    url: '/repairVoyageSettlementInfo/query/getSettlementRelevanceBill',
    method: 'get',
    params: data
  })
}

// 修船厂查询
function  getListByCondition(data) {
  return request({
    url: '/servicerMerchantInfo/query/getPageByCondition',
    method: 'get',
    params: data
  });
}
