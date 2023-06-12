export class storageSync {
	constructor(){
		this.USER_TOKEN = 'u_t'
	}
	getToken(){
	  return uni.getStorageSync(this.USER_TOKEN)
	}
	setToken(token){
	  uni.setStorageSync(this.USER_TOKEN,token)
	}
}