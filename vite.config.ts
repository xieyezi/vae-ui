import path from 'path'
import type { UserConfig } from 'vite'
import vitePluginVuedoc, { VueDocPluginOptions } from 'vite-plugin-vuedoc'

const options: VueDocPluginOptions = {
	wrapperClass: 'markdown-container',
	previewClass: 'template-container',
	markdownPlugins: []
}

const config: UserConfig = {
	alias: {
		'/vae-ui/': path.resolve(__dirname, './packages')
	},
	resolvers: [
		{
			// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
			alias(id: string) {
				return id.replace(/^vae-ui\//, '/vae-ui/') // add slash to particular id, then vite won't resolve it as a module
			}
		}
	],
	plugins: [vitePluginVuedoc(options)]
}

export default config
