import request from '../utils/request83'

export function login(data: any) {
    return request({
    url: '/user/users/login',
    method: 'post',
    data: data
  })
}

export function register(data: any) {
    return request({
    url: '/user/users/register',
    method: 'post',
    data
  })
}

export function updateUserInfo(data: any) {
    return request({
    url: '/user/users',
    method: 'put',
    data
  })
}

// 1.查询所有知识库
export function getKnowledgeBase() {
    return request({
        url: '/user/kbs',
        method: 'get',
    })
}
// 2.新增知识库
export function addKnowledgeBase(data: any) {
    return request({
        url: '/user/kbs',
        method: 'post',
        data
    })
}
// 3.修改知识库
export function updataKnowledgeBase(data: any) {
    return request({
        url: '/user/kbs/',
        method: 'put',
        data
    })
}
// 4.删除知识库
export function deleteKnowledgeBase(data: any) {
    return request({
        url: '/user/kbs/'+data,
        method: 'delete',
    })
}
