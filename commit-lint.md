### 代码提交说明

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

### 示例

```
git add .

yarn commit

```

```
? 选择一种你的提交类型: 特性: 一个新的特性
? 请输入修改范围(可选):
? 短说明: 增加代码提交说明文档
? 长说明，使用"|"换行(可选)：
? 关联关闭的issue，例如：#31, #34(可选):

###--------------------------------------------------------###
feat: 增加代码提交说明文档
###--------------------------------------------------------###

? 确定提交说明? Yes
warning package.json: No license field
husky > pre-commit (node v12.13.0)
✔ Preparing...
✔ Running tasks...
✔ Applying modifications...
✔ Cleaning up...
warning package.json: No license field
husky > commit-msg (node v12.13.0)
[dev 6136168] feat: 增加代码提交说明文档
 1 file changed, 97 insertions(+)
 create mode 100644 commit-lint.md
```
