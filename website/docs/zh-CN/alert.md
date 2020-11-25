## Alert 警告提示

用于页面中展示重要的提示信息。

### 基础用法

页面中的非浮层元素，不会自动消失。
Alert 组件提供四种主题，由 type 属性指定，默认值为 info。

```vue
<template>
	<vae-alert message="消息提示的文案" />
	<vae-alert type="success" message="成功提示的文案" />
	<vae-alert type="warning" message="警告提示的文案" />
	<vae-alert type="error" message="错误提示的文案" />
</template>
```

### 自定义关闭按钮

自定义关闭按钮为文字或其他符号。
在 Alert 组件中，你可以设置是否可关闭，关闭按钮的文本以及关闭时的回调函数。closable 属性决定是否可关闭，接受 boolean，默认为 true。你可以设置 close-text 属性来代替右侧的关闭图标，注意：close-text 必须为文本。设置 close 事件来设置关闭时的回调。

```vue
<template>
	<vae-alert message="不可关闭的 alert" />
	<vae-alert type="warning" message="设置了回调的 alert" close-text="关闭" @close="hello" />
	<vae-alert type="success" message="设置了回调的 alert" @close="hello" />
</template>
<script>
export default {
	methods: {
		hello() {
			alert('Hello World!')
		}
	}
}
</script>
```

### 带有 icon

表示某种状态时提升可读性。

```vue
<template>
	<vae-alert message="消息提示的文案" show-icon />
	<vae-alert type="success" message="成功提示的文案" show-icon />
	<vae-alert type="warning" message="警告提示的文案" show-icon />
	<vae-alert type="error" message="错误提示的文案" show-icon />
</template>
<script></script>
```

### 带有辅助性文字介绍

包含标题和内容，解释更详细的警告。

```vue
<template>
	<vae-alert
		title="带辅助性文字介绍"
		message="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
	/>
</template>
<script></script>
```

### 带有 icon 和辅助性文字介绍

```vue
<template>
	<vae-alert
		type="success"
		title="成功提示的文案"
		message="文字说明文字说明文字说明文字说明文字说明文字说明"
		show-icon
	/>
	<vae-alert title="消息提示的文案" message="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon />
	<vae-alert
		type="warning"
		title="警告提示的文案"
		message="文字说明文字说明文字说明文字说明文字说明文字说明"
		show-icon
	/>
	<vae-alert type="error" title="错误提示的文案" message="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon />
</template>
<script></script>
```

### Attributes

| 参数       | 说明               | 类型    | 可选值                     | 默认值 |
| ---------- | ------------------ | ------- | -------------------------- | ------ |
| title      | 标题               | string  | —                          | —      |
| message    | 辅助性文字         | string  | —                          | —      |
| type       | 主题               | string  | success/warning/info/error | info   |
| closable   | 是否可关闭         | boolean | —                          | true   |
| show-icon  | 是否显示图标       | boolean | —                          | false  |
| close-text | 关闭按钮自定义文本 | string  | —                          | —      |
