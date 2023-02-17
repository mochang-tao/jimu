<template>
	<div class="login">
		<div class="form" v-if="show == 1">
			<div class="box">
				<fui-input placeholder="用户名/账号/手机号" backgroundColor='#ffffff00' v-model="form.accountNumber">
					<template #left>
						<image class="icon" src="../../static/svg/login_user.svg" mode=""></image>
					</template>
				</fui-input>
			</div>
			<div class="box">
				<fui-input  placeholder="请输入您的密码" backgroundColor='#ffffff00'  v-model="form.passwrod">
					<template #left>
						<image class="icon" src="../../static/svg/login_password.svg" mode=""></image>
					</template>
				</fui-input>
			</div>
			<div class="btn">
				<fui-button background="#a05dbc91"  @click="onLogin" >登录</fui-button>
			</div>
			<div class='bottom'>
				<div class="left">忘记密码</div>
				<div class='right' @click="show = 2">注册账号</div>
			</div>
		</div>
	   <register v-else @close="show = 1"></register>
	</div>
</template>

<script setup>
	import register from './components/register.vue'
	import {
		reactive,
		ref
	} from "vue";
	let show = ref(1)
	const form = reactive({
		accountNumber: '',
		passwrod: ''
	})
	function onLogin(){
		if(!form.accountNumber && !form.passwrod){
			return 
		}
		
	}
</script>

<style lang="less" scoped>
	.login {
		width: 100vw;
		height: 130vh;
		background-image: url('@/static/login.jpeg');
		background-size: 100% ;

		.form {
			width: 330px;
			background-color: #fff;
			border-radius: 10px;
			padding: 20px;
			position: fixed;
			top: 150px;
			left: calc(50% - 170px);

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
