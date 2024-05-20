import request from '../utils/request82'

export function getKnowledge() {
        return request({
        url: '/user/ks',
        method: 'get',
        // data
    })
}

export function addKnowledge(data: any) {
    return request({
        url: '/user/ks',
        method: 'post',
        data
    })
}

export function getKnowledgeDetail(data: any) {
    return request({
        url: '/user/ks/'+data.kbid+'/'+data.kid,
        method: 'get',
        data: data
    })
}

export function getKnowledgeBaseDetail(data: number) {
    return request({
        url: '/user/ks/'+data,
        method: 'get',
    })
}