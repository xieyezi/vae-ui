const path = require('path')
import type { UserConfig } from 'vite'
import vitePluginVuedoc, { VueDocPluginOptions } from 'vite-plugin-vuedoc'

const options: VueDocPluginOptions = {
	wrapperClass: 'markdown-container',
	previewClass: 'template-container',
	markdownPlugins: []
}

const config: UserConfig = {
	alias: {
		// 键必须以斜线开始和结束
		'/vae-ui/': path.resolve(__dirname, './packages')
		// '/@components/': path.resolve(__dirname, './src/components')
	},
	resolvers: [
		{
			alias(id: string) {
				return id.replace(/^vae-ui\//, '/vae-ui/') // add slash to particular id, then vite won't resolve it as a module
			}
		}
	],
	plugins: [vitePluginVuedoc(options)]
}

export default config
