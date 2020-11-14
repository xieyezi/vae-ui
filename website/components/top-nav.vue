<template>
	<div class="nav-container">
		<vae-button theme="link">语言</vae-button>
		<vae-button theme="link">搜索</vae-button>
		<vae-button theme="link">...</vae-button>
	</div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>
.nav-container {
	position: fixed;
	top: 20px;
	right: 15px;
	display: flex;
	justify-content: space-around;
	width: 200px;
}
</style>
