<template>
	<div class="login">
		 <div class="form">
			  <div class="title">
					登录
				</div>
				<div><fui-input label="标题" v-model="name" :bottomLeft="0" borderTop placeholder="请输入文本"></fui-input></div>
				<div>{{name}}</div>
		 </div>
	</div>
</template>

<script setup>
	import { ref } from "vue";
		const name = ref('我是变量')
</script>

<style lang="less" scoped>
	.login{
		width: 100vw;
		height: 130vh;
		background-image: url('@/static/login.jpeg');
		background-size: 100% 100%;
		.form{
			width: 300px;
			height: 300px;
		  background-color: #fff;
			border-radius: 5px;
			padding: 20px;
			position: fixed;
			top: 150px;
			left: calc(50% - 170px);
			.title{
				 font-size: 20px;
				 font-weight: 700;
				 text-align: center;
			}
		}
	}
</style>