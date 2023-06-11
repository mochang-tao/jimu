// 全局请求封装
const base_url = 'http://192.168.65.1:7001/'
 
// 需要修改token，和根据实际修改请求头
export default (url, method, params) => {
	// 获取本地token
	// const token = uni.getStorageSync('GetPhone_Token');
	const token = 'sd'
	// 根据请求方法或URL来判断是否添加请求头
	let header
	if (method == "post") {
		header.token = token
		header['content-type'] = "application/json"
	} else if (url == "api/WxUser/GetWxUser") {
		header = {
			token: token
		}
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: base_url + url,
			method: method,
			header: header,
			dataType:'jsonp',
			data: params,
			success(response) {
				const res = response
				// console.log(res)
                // 根据返回的状态码做出对应的操作
                //获取成功
				if (res.data.Errcode == '0') {
					resolve(res);
				} else if (res.data.Errcode == '500') {
                    //获取失败
					uni.clearStorageSync()
					uni.showToast({
						title: res.data.Errmsg,
						icon: 'none',
						success() {
							uni.navigateTo({
								url: "/pages/login/index"
							})
						}
					})
				}
			},
			fail(err) {
				reject(err);
				console.log(err)
			},
			complete() {
 
			}
		});
	}).catch((e) => {});
};