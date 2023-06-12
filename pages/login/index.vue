<template>
	<div class="login">
		<div class="form" v-if="show == 1">
			<div class="title">登录</div>
			<div class="box">
				<fui-input placeholder="用户名/账号/手机号" backgroundColor='#ffffff00' v-model="form.email">
					<template #left>
						<image class="icon" src="../../static/svg/login_user.svg" mode=""></image>
					</template>
				</fui-input>
			</div>
			<div class="box">
				<fui-input  placeholder="请输入您的密码" :password="true" backgroundColor='#ffffff00'  v-model="form.passWord">
					<template #left>
						<image class="icon" src="../../static/svg/login_password.svg" mode=""></image>
					</template>
				</fui-input>
			</div>
			<div class="btn">
				<fui-button background="#a05dbc91"  @click="onLogin" >登录</fui-button>
			</div>
			<div class='bottom'>
				<div class="left" @click="visible = true">忘记密码</div>
				<div class='right' @click="show = 2">注册账号</div>
			</div>
		</div>
	   <register v-else @close="show = 1"></register>
	</div>
	<!-- <fui-toast ref="toast"></fui-toast> -->
	<fui-dialog :show="visible" title="忘记密码" :content="dialogText" :buttons="buttons" @click="visible = false"></fui-dialog>
</template>

<script setup>
	import register from './components/register.vue'
	import { userLogin } from '../../api/user';
	import {storageSync} from '../../utils/storageSync.js'
	import {toast} from '../../utils/tool.js'
	import {
		reactive,
		ref
	} from "vue";
	let $storageSync = new storageSync()
	let show = ref(1)
	let dialogText = ref('请联系工作人员！联系电话: 17817762479')
	let visible = ref(false)
	let buttons = ref([{
		text: '确定',
		color: '#a05dbc91'
	}])
	let $toast = new toast()
	
	const form = reactive({
		email: '',
		passWord: ''
	})
	function onLogin(){
		if(form.email && form.passWord){
			if(form.email == ''){
				showToast(2)
				return 
			}else if(form.passWord == ''){
				showToast(3)
				return
			}
			userLogin(form).then(res=>{
			  $storageSync.setToken(res.data.token)
			  $toast.success('登录成功')
			  uni.switchTab({url:"../homePage/index"})
			})
		  // if(form.email == 'yunibobo'&&form.passWord == 'mi') showToast(200) ;
		}else{
			showToast(1)
		}
	}
	function showToast (type) {
			let options = {}
			//提示信息
			switch(type){
				case 1:options.text = '请填写用户名和密码'
				break
				case 2:options.text = '请填写用户名'
				break
				case 3:options.text = '请填写密码'
				break
				case 4:options.text = '用户名不存在'
				break
				case 5:options.text = '密码错误'
				break
				case 6:options.text = '密码或者用户名错误'
				break
				case 200:options.text = '登录成功'
				break
			}
			$toast.text(options.text)
		}
</script>

<style lang="less" scoped>
	.login {
		width: 100vw;
		height: 130vh;
		background-image: url('@/static/login.jpeg');
		background-size: 100% ;
        .title {
        	font-size: 20px;
        	font-weight: 700;
        	text-align: center;
        }
		.form {
			width: 330px;
			background-color: #fff;
			border-radius: 10px;
			padding: 20px;
			position: fixed;
			top: 150px;
			left: calc(50% - 185px);

			.title {
				font-size: 20px;
				font-weight: 700;
				text-align: center;
			}
      .box{
				padding: 10px 0;
			}
			.phone {}

			.icon{
				width: 20px;
				height: 20px;
				fill:currentColor;
				color:#1890FF;//这里是默认颜
				margin: 0 10px;
			}
			.btn{
				margin-top: 20px;
			}
			.bottom{
				display: flex;
				justify-content: space-between;
				color: #d583f7b0;
				padding-top: 40rpx;
			}
		}
	}
</style>
