<template>
	<router-view />
</template>

<script lang="ts">
import { ref, provide } from 'vue'
import router from './router'

const width = document.documentElement.clientWidth
const menuVisible = ref(width <= 500 ? false : true)
provide('menuVisible', menuVisible)

router.afterEach(() => {
	if (width <= 500) {
		menuVisible.value = false
	}
})

export default {
	name: 'App',
	components: {}
}
</script>
