module.exports = {
	root: true,
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			tsx: true
		}
	},
	env: {
		node: true
	},
	plugins: ['@typescript-eslint'],
	extends: ['plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		// vue
		'vue/no-parsing-error': 'off'
	}
}
