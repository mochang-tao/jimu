<template>
	<div class="body">
		<div class="container">
		      <div class="square" style="--d: 1"></div>
		      <div class="square" style="--d: 2"></div>
		      <div class="square" style="--d: 3"></div>
		      <div class="square" style="--d: 4"></div>
		      <div class="square" style="--d: 5"></div>
		      <div class="square" style="--d: 6"></div>
		      <div class="square" style="--d: 7"></div>
		      <div class="square" style="--d: 8"></div>
		      <div class="square" style="--d: 9"></div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	* {
		margin : 0;
		padding: 0;
		--w:30px
	}
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	
	.body {
		font-size      : 16px;
		font-family    : Microsoft Yahei, SimSun, Helvetica;
		display        : flex;
		height         : 100vh;
		align-items    : center;
		justify-content: center;
		background     : #222;
		overflow       : hidden;
		color : #fff;
	}

	  :root {
	      --w: 30px;
	  }
	    .container {
	      height: calc(var(--w) * 5);
	      width: calc(var(--w) * 5);
	      padding: var(--w);
	      box-shadow: 0 12px 20px 6px rgb(104 112 118 / 0.2);
	      border-radius: calc(var(--w) / 2);
	      display: flex;
	      flex-wrap: wrap;
	      transform-style: preserve-3d;
	      transform: rotateX(45deg) rotateZ(45deg);
	    }
	    .square {
	      height: var(--w);
	      width: var(--w);
	      background-color: rgb(207, 52, 40);
	      position: relative;
	      transform-style: preserve-3d;
	      transform: translateZ(var(--w));
	      box-shadow: calc(var(--w) * 3) calc(var(--w) * 3) 15px rgba(0, 0, 0, 0.2);
	      animation: beating 1s infinite;
	      animation-delay: calc(0.05s * var(--d));
	    }
	    .square:hover {
	      cursor: pointer;
	      filter: brightness(2.1);
	    }
	    .square:after,
	    .square:before {
	      content: "";
	      position: absolute;
	      height: var(--w);
	      width: var(--w);
	      left: 0;
	      top: 0;
	    }
	    .square:before {
	      background-color: rgb(56, 35, 35);
	      transform: rotateY(-90deg);
	      transform-origin: right center;
	    }
	    .square:after {
	      background-color: rgb(80, 39, 36);
	      transform: rotateX(90deg);
	      transform-origin: right bottom;
	    }
	    @keyframes beating {
	      50% {
	        transform: translateZ(calc(var(--w) / 2));
	      }
	    }
</style>