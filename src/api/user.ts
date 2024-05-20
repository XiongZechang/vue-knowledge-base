import request from '../utils/request81'

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