import request from '../utils/request82'

// 1.获取所有知识库及其对应知识
export function getKnowledge() {
        return request({
        url: '/user/ks',
        method: 'get',
        // data
    })
}

// 2.新增知识
export function addKnowledge(data: any) {
    return request({
        url: '/user/ks',
        method: 'post',
        data
    })
}

// 3.查看知识预览
export function getKnowledgePreview(data: any) {
    return request({
        url: '/user/ks/preview/'+data.kbid+'/'+data.kid,
        method: 'get',
        data: data
    })
}

// 4.修改知识知识预览 
export function updateKnowledgePreview(data: any) {
    return request({
        url: '/user/ks/preview/'+data.kbid+'/'+data.kid,
        method: 'put',
        data: data
    })
}

// 5.根据知识库id返回知识 
export function getKnowledgeBaseDetail(data: number) {
    return request({
        url: '/user/ks/'+data,
        method: 'get',
    })
}

// 6.返回知识详情
export function getKnowledgeDetail(kbid: any, kid: any) {
    return request({
        url: '/user/ks/'+kbid+'/'+kid,
        method: 'get',
    })
}

// 7.修改知识
export function updateKnowledge(data: any) {
    return request({
        url: '/user/ks/'+data.kbid+'/'+data.kid,
        method: 'put',
        data: data
    })
}

// 8.删除知识
export function deleteKnowledge(data: any) {
    return request({
        url: '/user/ks/'+data.kbid+'/'+data.kid,
        method: 'delete',
        data: data
    })
}
