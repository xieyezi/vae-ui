const path = require('path')
import type { UserConfig } from 'vite'
import vitePluginVuedoc from 'vite-plugin-vuedoc'

const config: UserConfig = {
	alias: {
		// 键必须以斜线开始和结束
		'/@vae-ui/': path.resolve(__dirname, './packages')
		// '/@components/': path.resolve(__dirname, './src/components')
	},
	plugins: [vitePluginVuedoc()]
}

export default config
