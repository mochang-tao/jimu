<template>
	<div class="login">
		 <div class="form">
			  <div class="title">
					登录dd
				</div>
				<fui-button text="默认按钮"></fui-button>
		 </div>
	</div>
</template>

<script lang="ts">
</script>

<style lang="less" scoped>
	.login{
		width: 100vw;
		height: 100vh;
		background-color: aqua;
		.form{
			width: 300px;
			height: 300px;
		  background-color: #fff;
			border-radius: 5px;
			padding: 20px;
			position: relative;
			top: calc(50% - 200px);
			left: calc(50% - 170px);
			.title{
				 font-size: 20px;
				 font-weight: 700;
				 text-align: center;
			}
		}
	}
</style>