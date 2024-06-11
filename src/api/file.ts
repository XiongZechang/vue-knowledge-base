import request from '../utils/request82'

export function fileUpload(data: any) {
    return request({
        url: '/user/common/upload',
        method: 'post',
        data
    })
}