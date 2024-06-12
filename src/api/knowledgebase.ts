import request from '../utils/request83'

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
