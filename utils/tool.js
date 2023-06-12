	
export class toast{
	constructor(){
		
	}
	text(value){
		uni.showToast({
			icon:'none',
			title:value,
			duration:2000
		})
	}
	success(value){
		uni.showToast({
		   icon:"success" ,
		   title:value,
		   duration:2000
		})
	}
}