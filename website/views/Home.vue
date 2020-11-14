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
					<a href="https://www.npmjs.com/package/rsuite" target="_blank" rel="noopener noreferrer">
						<img alt="npm" src="https://badge.fury.io/js/rsuite.svg" />
					</a>
					<a href="https://gitee.com/rsuite/rsuite" target="_blank" rel="noopener noreferrer">
						<img src="https://gitee.com/rsuite/rsuite/badge/star.svg?theme=gvp" alt="star" />
					</a>

					<a href="https://github.com/rsuite/rsuite" target="_blank" rel="noopener noreferrer">
						<img alt="GitHub stars" src="https://img.shields.io/github/stars/rsuite/rsuite?style=social" />
					</a>
				</p>
				<div class="toolbar">
					<vae-button>开始使用</vae-button>
					<vae-button>组件</vae-button>
				</div>
			</div>
			<div class="right">
				<img width="300" src="https://i.loli.net/2020/11/12/v2rnIaSzwUkuN5y.png" />
			</div>
		</section>
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
		color: #ed635e;
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
		text-align: center;
	}
}
</style>
