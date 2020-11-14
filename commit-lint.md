### commit message

- type: commit 的类型
- feat: 开发新的功能
- fix: 修复 bug
- refactor: 代码重构
- docs: 文档修改
- style: 代码格式修改, 注意不是 css 修改
- test: 测试用例修改
- perf: 改善性能
- build: 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）
- chore: 其他修改, 比如构建流程, 依赖管理.
- revert: 代码回退

commit 标准格式:

- scope: commit 影响的范围, 比如: route, component, utils, build...
- subject: commit 的概述
- body: commit 具体修改内容
- footer: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.

```js
   'use strict'
   module.exports = {
   types: [
       {
       value: 'feat✨'
       name: '✨  feat:     A new feature'
       },
       {
       value: 'fix🐞',
       name: '🐞  fix:      A bug fix'
       },
       {
       value: 'refactor🛠',
       name:
           '🛠  refactor: A code change that neither fixes a bug nor adds a feature'
       },
       {
       value: 'docs📚',
       name: '📚  docs:     Documentation only changes'
       },
       {
       value: 'test🏁',
       name: '🏁  test:     Add missing tests or correcting existing tests'
       },
       {
       value: 'chore🗯',
       name:
           "🗯  chore:    Changes that don't modify src or test files. Such as updating build tasks, package manager"
       },
       {
       value: 'style💅',
       name:
           '💅  style:    Code Style, Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)'
       },
       {
       value: 'revert⏪',
       name: '⏪  revert:   Revert to a commit'
       }
   ],

   scopes: [],

   allowCustomScopes: true,
   allowBreakingChanges: ['feat', 'fix']
   }
```

对应的中文版本：

```js
module.exports = {
	types: [
		{ value: 'feat✨', name: '特性: 一个新的特性' },
		{ value: 'fix🐞', name: '修复: 修复一个Bug' },
		{ value: 'docs📚', name: '文档: 变更的只有文档' },
		{ value: 'style💅', name: '格式: 空格, 分号等格式修复' },
		{ value: 'refactor🛠', name: '重构: 代码重构，注意和特性、修复区分开' },
		{ value: 'perf🐎', name: '性能: 提升性能' },
		{ value: 'test🏁', name: '测试: 添加一个测试' },
		{ value: 'revert⏪', name: '回滚: 代码回退' },
		{ value: 'chore🗯', name: '工具:开发工具变动(构建、脚手架工具等)' }
	],
	messages: {
		type: '选择一种你的提交类型:',
		customScope: '请输入修改范围(可选):',
		subject: '短说明:',
		body: '长说明，使用"|"换行(可选)：',
		footer: '关联关闭的issue，例如：#31, #34(可选):',
		confirmCommit: '确定提交说明?'
	},
	allowCustomScopes: true,
	allowBreakingChanges: ['特性', '修复'],
	subjectLimit: 100
}
```
