import request from '@/utils/request'

// 查询支出统计详情
export function getStatisticsPayMoney(params) {
  return request({
    url: '/financePayStatistics/query/statisticsPayMoney',
    method: 'get',
    params: params
  })
}
