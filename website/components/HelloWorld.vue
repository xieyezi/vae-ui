<template>
	<h1>{{ msg }}</h1>
	<Button @click="count++">count is: {{ count }}</Button>
	<p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
import Button from '../../packages/button'
export default {
	name: 'HelloWorld',
	components: {
		Button
	},
	props: {
		msg: String
	},
	data() {
		return {
			count: 0
		}
	}
}
</script>
