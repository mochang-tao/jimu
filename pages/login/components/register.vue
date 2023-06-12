<template>
	<div class="forms">
		<div class="title">注册</div>
		<div class="box">
			<fui-input placeholder="用户名" backgroundColor='#ffffff00' v-model="form.username">
				<template #left>
					<image class="icon" src="../../../static/svg/login_user.svg" mode=""></image>
				</template>
			</fui-input>
		</div>
		<div class="box">
			<fui-input placeholder="请输入您的密码" backgroundColor='#ffffff00' :password="true" v-model="form.passWord">
				<template #left>
					<image class="icon" src="../../../static/svg/login_password.svg" mode=""></image>
				</template>
			</fui-input>
		</div>
		<div class="box">
			<fui-input placeholder="请再次输入密码" :password="true" backgroundColor='#ffffff00' v-model="form.passWordTwo">
				<template #left>
					<image class="icon" src="../../../static/svg/login_password.svg" mode=""></image>
				</template>
			</fui-input>
		</div>
		<div class="box">
			<fui-input placeholder="请输入邮箱" backgroundColor='#ffffff00' v-model="form.email">
				<template #left>
					<image class="icon" src="../../../static/svg/login_meail.svg" mode=""></image>
				</template>
			</fui-input>
		</div>
		<div class="box">
			<fui-input placeholder="请输入年龄" backgroundColor='#ffffff00' v-model="form.age">
				<template #left>
					<image class="icon" src="../../../static/svg/login_age.svg" mode=""></image>
				</template>
			</fui-input>
		</div>
		<div class="btn">
			<fui-button background="#a05dbc91" @click="onRegister">注册</fui-button>
		</div>
		<div class='bottom'>
			<div class="left" @click="$emit('close')">返回登录</div>
		</div>
	</div>
</template>

<script setup>
	import {userRegister} from '../../../api/user.js'
	import {toast} from '../../../utils/tool.js'
	import {
		reactive
	} from "vue";
	let $emit = defineEmits(['close'])
	let form = reactive({
		username: '',
		email: '',
		passWord: '',
		passWordTwo: '',
		age:null
	})
    const $toast = new toast()
	function onRegister() {
		if(form.passWordTwo != form.passWord){
		  $toast.text('两次密码不一致！')
		  return
		}
		for (let key in form) {
			if (!form[key]) {
				uni.showToast({
					title:'请填写个人信息！',
					icon:'none',
					duration:2000
				})
				return
			}
		}
		userRegister(form).then(res=>{
			$toast.success(res.mag)
			console.log(res,'res')
			$emit('close')
		})
		console.log('ddd')
	}
</script>

<style lang="less" scoped>
	.forms {
		width: 600rpx;
		background-color: #fff;
		// height: 900rpx;
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

		.box {
			padding: 10px 0;
		}

		.phone {}

		.icon {
			width: 20px;
			height: 20px;
			fill: currentColor;
			color: #1890FF; //这里是默认颜
			margin: 0 10px;
		}

		.btn {
			margin-top: 20px;
		}

		.bottom {
			display: flex;
			justify-content: space-between;
			color: #d583f7b0;
			padding-top: 40rpx;
		}
	}
</style>
