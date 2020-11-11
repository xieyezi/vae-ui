// import { md } from './plugins/md'
// vite.config.ts
// export default {
// 	base: './',
// 	assetsDir: 'assets',
// 	plugins: [md()]
// }
import type { UserConfig } from 'vite'
import vitePluginVuedoc from 'vite-plugin-vuedoc'

const config: UserConfig = {
	// base: './',
	// assetsDir: 'assets',
	plugins: [vitePluginVuedoc()]
}

export default config
