import fs from 'fs-extra'
import { md } from './plugins/md'
import { baseParse } from '@vue/compiler-core'

export default {
	base: './',
	assetsDir: 'assets',
	plugins: [md()]
	// vueCustomBlockTransforms: {
	//   demo: (options) => {
	//     console.log(options)
	//     const { code, path } = options
	//     const file = fs.readFileSync(path).toString()
	//     const parsed = baseParse(file).children.find((n) => n.tag === 'demo')
	//     const title = parsed.children[0].content
	//     const main = file.split(parsed.loc.source).join('').trim()
	//     return `export default function (Component) {
	//       Component.__sourceCode = ${JSON.stringify(main)}
	//       Component.__sourceCodeTitle = ${JSON.stringify(title)}
	//     }`.trim()
	//   },
	// },
}
