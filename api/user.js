import request from "../utils/request.js"

export const userRegister = (data) => request('api-jj/user/register','get',data) 

export const userLogin = data => request('api-jj/user/login','get',data)

export const sendCode = data => request('api-jj/user/sendCode','get',data)