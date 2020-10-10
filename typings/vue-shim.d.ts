declare module '*.vue' {
	import { defineComponent } from 'vue'
	const component: ReturnType<typeof defineComponent>
	export default component
}

declare module '*.md' {
	const str: string
	export default str
}
