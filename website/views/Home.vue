<template>
	<div class="home-container">
		<Topnav />
		<div class="support">
			<h3>
				Black Lives Matter.
				<a
					href="https://support.eji.org/give/153413/#!/donation/checkout"
					target="_blank"
					rel="noopener noreferrer"
					id="blm-link"
				>
					Support the Equal Justice Initiative.
				</a>
			</h3>
		</div>
		<section className="section">
			<div class="left">
				<h1 className="title">Vae UI</h1>
				<p className="sub-title">一套 Vue3 的 UI 组件库，贴心的 UI 设计，友好的开发体验。</p>
				<p className="home-page-badge-wrap">
					<a href="https://github.com/xieyezi/vae-ui" target="_blank" rel="noopener noreferrer">
						<img alt="npm" src="https://img.shields.io/badge/vue3-composition--api-brightgreen" />
					</a>
					<a href="https://github.com/xieyezi/vae-ui" target="_blank" rel="noopener noreferrer">
						<img src="https://img.shields.io/badge/typescript-vue-orange" alt="star" />
					</a>

					<a href="https://github.com/xieyezi/vae-ui" target="_blank" rel="noopener noreferrer">
						<img src="https://img.shields.io/github/stars/xieyezi/vae-ui?style=social" alt="star" />
					</a>
				</p>
				<div class="toolbar">
					<vae-button level="main">开始使用</vae-button>
					<vae-button>组件</vae-button>
				</div>
			</div>
			<div class="right">
				<img width="400" src="https://i.loli.net/2020/11/15/sxeItRC7f86vZPi.png " />
			</div>
		</section>
		<footer>
			<div>
				Copyright 2020 - present xieyezi All Rights Reserved
				<span style="margin-left: 30px; margin-right: 10px">联系我:</span>
				<a href="https://github.com/xieyezi" class="highlight-name" target="_blank">Github</a>
				<a href="https://juejin.im/user/5c1cfe85e51d4511851c478d" class="highlight-name" target="_blank">掘金</a>
			</div>
		</footer>
	</div>
</template>

<script lang="ts">
import Topnav from '../components/top-nav.vue'
export default {
	components: {
		Topnav
	}
}
</script>

<style lang="scss" scoped>
.home-container {
	color: #575757;
	a {
		color: #56b88d;
		text-decoration: none;
	}
}
.support {
	margin-top: 30px;
	margin-left: 10%;
	padding: 20px;
	background-color: #e9f5fe;
	width: 50%;
	border-radius: 6px;
	font-size: 14px;
	line-height: 1.42857143;
	font-size: 18px;
	line-height: 24px;
}
.section {
	margin: 128px 128px 0px 128px;
	padding-left: 60px;
	text-align: left;
	display: flex;
	justify-content: space-between;
	.left {
		width: 45%;
		.title {
			font-family: Raleway, Hiragino Sans GB, sans-serif;
			font-weight: 700;
			h1 {
				font-size: 46px;
				line-height: 62px;
			}
		}
		.sub-title {
			font-size: 22px;
			margin: 20px 0;
		}
		.home-page-badge-wrap {
			margin-top: 8px;
			a {
				margin-left: 10px;
			}
		}
		.toolbar {
			margin-top: 50px;
		}
	}
	.right {
		width: 50%;
		// background-color: #111111;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
footer {
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 8%;
	padding: 20px 0;
	background: rgba(7, 17, 27, 0.2);
	font-size: 12px;
	color: #fff;
	margin: 0 auto;
	font-weight: 400;
	text-align: center;
}
.highlight-name {
	color: #0e90d2;
	font-size: 14px;
	font-weight: 600;
	transition: all 0.3s;
	margin-right: 10px;
}
.highlight-name:hover {
	color: #ffffff;
}
footer a {
	text-decoration: none;
}
</style>
