## Button 按钮

常用的操作按钮。

### 基础用法

基础的按钮用法。

> demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```vue
<template>
	<vae-button>你好</vae-button>
	<vae-button theme="link">你好</vae-button>
	<vae-button theme="text">你好123</vae-button>
	<vae-button theme="text" size="big">你好</vae-button>
</template>
```

### Attributes

| 参数        | 说明           | 类型    | 可选值                                             | 默认值 |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------ |
| size        | 尺寸           | string  | medium / small / mini                              | —      |
| type        | 类型           | string  | primary / success / warning / danger / info / text | —      |
| plain       | 是否朴素按钮   | boolean | —                                                  | false  |
| round       | 是否圆角按钮   | boolean | —                                                  | false  |
| circle      | 是否圆形按钮   | boolean | —                                                  | false  |
| loading     | 是否加载中状态 | boolean | —                                                  | false  |
| disabled    | 是否禁用状态   | boolean | —                                                  | false  |
| icon        | 图标类名       | string  | —                                                  | —      |
| autofocus   | 是否默认聚焦   | boolean | —                                                  | false  |
| native-type | 原生 type 属性 | string  | button / submit / reset                            | button |
