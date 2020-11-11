declare module '*.vue' {
	import { defineComponent } from 'vue'
	const component: ReturnType<typeof defineComponent>
	export default component
}
declare type ComponentSize = 'large' | 'medium' | 'small' | 'mini'
declare module '*.md' {
	const str: string
	export default str
}
