import request from '@/utils/request'

// 保存财务科目
export function saveFinance(data) {
  return request({
    url: '/financeCostSubject/api/saveFinance',
    method: 'post',
    data
  })
}


// 删除财务科目
export function deleteFinance(data) {
  return request({
    url: '/financeCostSubject/api/deleteFinance',
    method: 'post',
    data
  })
}


