import {
	i as n,
	r as s,
	o as a,
	c as t,
	a as p,
	w as o,
	F as e,
	b as c,
	d as u,
	e as l,
	f as k,
	t as i,
	g as r,
	h as d
} from './index.e5ea53c9.js'
var g = {
	methods: {
		open() {
			this.$message('这是一条消息提示')
		},
		openVn() {
			this.$message({
				message: n('p', null, [n('span', null, '内容可以是 '), n('i', { style: 'color: teal' }, 'VNode')])
			})
		}
	}
}
const m = c('打开消息提示'),
	v = c('VNode')
g.render = function (n, c, u, l, k, i) {
	const r = s('vae-button')
	return (
		a(),
		t(
			e,
			null,
			[
				p(r, { plain: !0, onClick: n.open }, { default: o(() => [m]), _: 1 }, 8, ['onClick']),
				p(r, { plain: !0, onClick: n.openVn }, { default: o(() => [v]), _: 1 }, 8, ['onClick'])
			],
			64
		)
	)
}
var h = {
	methods: {
		open1() {
			this.$message('这是一条消息提示')
		},
		open2() {
			this.$message({ message: '恭喜你，这是一条成功消息', type: 'success' })
		},
		open3() {
			this.$message({ message: '警告哦，这是一条警告消息', type: 'warning' })
		},
		open4() {
			this.$message.error('错了哦，这是一条错误消息')
		}
	}
}
const _ = c('成功'),
	f = c('警告'),
	E = c('消息'),
	M = c('错误')
h.render = function (n, c, u, l, k, i) {
	const r = s('vae-button')
	return (
		a(),
		t(
			e,
			null,
			[
				p(r, { plain: !0, onClick: n.open2 }, { default: o(() => [_]), _: 1 }, 8, ['onClick']),
				p(r, { plain: !0, onClick: n.open3 }, { default: o(() => [f]), _: 1 }, 8, ['onClick']),
				p(r, { plain: !0, onClick: n.open1 }, { default: o(() => [E]), _: 1 }, 8, ['onClick']),
				p(r, { plain: !0, onClick: n.open4 }, { default: o(() => [M]), _: 1 }, 8, ['onClick'])
			],
			64
		)
	)
}
var q = {
	methods: {
		open1() {
			this.$message({ showClose: !0, message: '这是一条消息提示' })
		},
		open2() {
			this.$message({ showClose: !0, message: '恭喜你，这是一条成功消息', type: 'success' })
		},
		open3() {
			this.$message({ showClose: !0, message: '警告哦，这是一条警告消息', type: 'warning' })
		},
		open4() {
			this.$message({ showClose: !0, message: '错了哦，这是一条错误消息', type: 'error' })
		}
	}
}
const y = c('消息'),
	w = c('成功'),
	C = c('警告'),
	b = c('错误')
q.render = function (n, c, u, l, k, i) {
	const r = s('vae-button')
	return (
		a(),
		t(
			e,
			null,
			[
				p(r, { plain: !0, onClick: n.open1 }, { default: o(() => [y]), _: 1 }, 8, ['onClick']),
				p(r, { plain: !0, onClick: n.open2 }, { default: o(() => [w]), _: 1 }, 8, ['onClick']),
				p(r, { plain: !0, onClick: n.open3 }, { default: o(() => [C]), _: 1 }, 8, ['onClick']),
				p(r, { plain: !0, onClick: n.open4 }, { default: o(() => [b]), _: 1 }, 8, ['onClick'])
			],
			64
		)
	)
}
var V = {
	methods: {
		openCenter() {
			this.$message({ message: '居中的文字', center: !0 })
		}
	}
}
const U = c('文字居中')
V.render = function (n, p, e, c, u, l) {
	const k = s('vae-button')
	return a(), t(k, { plain: !0, onClick: n.openCenter }, { default: o(() => [U]), _: 1 }, 8, ['onClick'])
}
var H = {
	methods: {
		openHTML() {
			this.$message({ dangerouslyUseHTMLString: !0, message: '<strong>这是 <i>HTML</i> 片段</strong>' })
		}
	}
}
const O = c('使用 HTML 片段')
H.render = function (n, p, e, c, u, l) {
	const k = s('vae-button')
	return a(), t(k, { plain: !0, onClick: n.openHTML }, { default: o(() => [O]), _: 1 }, 8, ['onClick'])
}
const D = u({
	components: { VUEDEMO_0: g, VUEDEMO_1: h, VUEDEMO_2: q, VUEDEMO_3: V, VUEDEMO_4: H },
	setup(n) {
		const s = l(),
			a = l(),
			t = l(),
			p = l(),
			o = l(),
			e = [s, a, t, p, o],
			c = k({ VUEDEMO_0Height: 0, VUEDEMO_1Height: 0, VUEDEMO_2Height: 0, VUEDEMO_3Height: 0, VUEDEMO_4Height: 0 })
		return {
			toggleCode: (n) => {
				const s = 'VUEDEMO_' + n
				0 === c[s + 'Height']
					? (c[s + 'Height'] = (e[n].value ? e[n].value.offsetHeight : 0) || 0)
					: (c[s + 'Height'] = 0)
			},
			...i(c),
			VUEDEMO_0Ref: s,
			VUEDEMO_1Ref: a,
			VUEDEMO_2Ref: t,
			VUEDEMO_3Ref: p,
			VUEDEMO_4Ref: o
		}
	}
})
D.matter = {}
const $ = { class: 'vuedoc markdown-container' },
	L = p('h2', null, 'Message 消息提示', -1),
	T = p('p', null, '常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。', -1),
	x = p('h3', null, '基础用法', -1),
	N = p('p', null, '从顶部出现，3 秒后自动消失。', -1),
	R = p(
		'p',
		null,
		[
			c(
				'Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释，文末有 options 列表，可以结合 Notification 的文档理解它们。Element Plus 注册了一个'
			),
			p('code', null, '$message'),
			c('方法用于调用，Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。')
		],
		-1
	),
	j = p('pre', { style: { display: 'none' } }, null, -1),
	S = { class: 'vuedoc-demo template-container' },
	P = { class: 'vuedoc-demo__inner' },
	A = { class: 'vuedoc-demo__preview' },
	F = { ref: 'VUEDEMO_0Ref', class: 'vuedoc-demo__sourceref' },
	X = d(
		'<pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vae-button</span> <span class="token attr-name">:plain</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>打开消息提示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vae-button</span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vae-button</span> <span class="token attr-name">:plain</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>openVn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>VNode<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vae-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> h <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n\tmethods<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token string">&#39;这是一条消息提示&#39;</span><span class="token punctuation">)</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n\t\t<span class="token function">openVn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\t\t\t\tmessage<span class="token operator">:</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;内容可以是 &#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;i&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> style<span class="token operator">:</span> <span class="token string">&#39;color: teal&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;VNode&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n\t\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre>',
		1
	),
	z = d(
		'<h3>不同状态</h3><p>用来显示「成功、警告、消息、错误」类的操作反馈。</p><p>当需要自定义更多属性时，Message 也可以接收一个对象为参数。比如，设置<code>type</code>字段可以定义不同的状态，默认为<code>info</code>。此时正文内容以<code>message</code>的值传入。同时，我们也为 Message 的各种 type 注册了方法，可以在不传入<code>type</code>字段的情况下像<code>open4</code>那样直接调用。</p><pre style="display:none;"></pre>',
		4
	),
	B = { class: 'vuedoc-demo template-container' },
	G = { class: 'vuedoc-demo__inner' },
	I = { class: 'vuedoc-demo__preview' },
	J = { ref: 'VUEDEMO_1Ref', class: 'vuedoc-demo__sourceref' },
	K = d(
		'<pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vae-button</span> <span class="token attr-name">:plain</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>成功<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vae-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vae-button</span> <span class="token attr-name">:plain</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>警告<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vae-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vae-button</span> <span class="token attr-name">:plain</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>消息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vae-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vae-button</span> <span class="token attr-name">:plain</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>错误<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vae-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token function">open1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token string">&#39;这是一条消息提示&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token function">open2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          message<span class="token operator">:</span> <span class="token string">&#39;恭喜你，这是一条成功消息&#39;</span><span class="token punctuation">,</span>\n          type<span class="token operator">:</span> <span class="token string">&#39;success&#39;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n      <span class="token function">open3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          message<span class="token operator">:</span> <span class="token string">&#39;警告哦，这是一条警告消息&#39;</span><span class="token punctuation">,</span>\n          type<span class="token operator">:</span> <span class="token string">&#39;warning&#39;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n      <span class="token function">open4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;错了哦，这是一条错误消息&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre>',
		1
	),
	Q = p('h3', null, '可关闭', -1),
	W = p('p', null, '可以添加关闭按钮。', -1),
	Y = p(
		'p',
		null,
		[
			c('默认的 Message 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用'),
			p('code', null, 'showClose'),
			c('字段。此外，和 Notification 一样，Message 拥有可控的'),
			p('code', null, 'duration'),
			c('，设置'),
			p('code', null, '0'),
			c('为不会被自动关闭，默认为 3000 毫秒。')
		],
		-1
	),
	Z = p('pre', { style: { display: 'none' } }, null, -1),
	nn = { class: 'vuedoc-demo template-container' },
	sn = { class: 'vuedoc-demo__inner' },
	an = { class: 'vuedoc-demo__preview' },
	tn = { ref: 'VUEDEMO_2Ref', class: 'vuedoc-demo__sourceref' },
	pn = d(
		'<pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vae-button</span> <span class="token attr-name">:plain</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>消息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vae-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vae-button</span> <span class="token attr-name">:plain</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>成功<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vae-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vae-button</span> <span class="token attr-name">:plain</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>警告<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vae-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vae-button</span> <span class="token attr-name">:plain</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>错误<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vae-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token function">open1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          showClose<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n          message<span class="token operator">:</span> <span class="token string">&#39;这是一条消息提示&#39;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n      <span class="token function">open2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          showClose<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n          message<span class="token operator">:</span> <span class="token string">&#39;恭喜你，这是一条成功消息&#39;</span><span class="token punctuation">,</span>\n          type<span class="token operator">:</span> <span class="token string">&#39;success&#39;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n      <span class="token function">open3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          showClose<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n          message<span class="token operator">:</span> <span class="token string">&#39;警告哦，这是一条警告消息&#39;</span><span class="token punctuation">,</span>\n          type<span class="token operator">:</span> <span class="token string">&#39;warning&#39;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n      <span class="token function">open4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          showClose<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n          message<span class="token operator">:</span> <span class="token string">&#39;错了哦，这是一条错误消息&#39;</span><span class="token punctuation">,</span>\n          type<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre>',
		1
	),
	on = p('h3', null, '文字居中', -1),
	en = p('p', null, [c('使用 '), p('code', null, 'center'), c(' 属性让文字水平居中。')], -1),
	cn = p('pre', { style: { display: 'none' } }, null, -1),
	un = { class: 'vuedoc-demo template-container' },
	ln = { class: 'vuedoc-demo__inner' },
	kn = { class: 'vuedoc-demo__preview' },
	rn = { ref: 'VUEDEMO_3Ref', class: 'vuedoc-demo__sourceref' },
	dn = d(
		'<pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vae-button</span> <span class="token attr-name">:plain</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>openCenter<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>文字居中<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vae-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n\tmethods<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token function">openCenter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\t\t\t\tmessage<span class="token operator">:</span> <span class="token string">&#39;居中的文字&#39;</span><span class="token punctuation">,</span>\n\t\t\t\tcenter<span class="token operator">:</span> <span class="token boolean">true</span>\n\t\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre>',
		1
	),
	gn = p('h3', null, '使用 HTML 片段', -1),
	mn = p('p', null, [p('code', null, 'message'), c(' 属性支持传入 HTML 片段')], -1),
	vn = p(
		'p',
		null,
		[
			c('将'),
			p('code', null, 'dangerouslyUseHTMLString'),
			c('属性设置为 true，'),
			p('code', null, 'message'),
			c(' 就会被当作 HTML 片段处理。')
		],
		-1
	),
	hn = p('pre', { style: { display: 'none' } }, null, -1),
	_n = { class: 'vuedoc-demo template-container' },
	fn = { class: 'vuedoc-demo__inner' },
	En = { class: 'vuedoc-demo__preview' },
	Mn = { ref: 'VUEDEMO_4Ref', class: 'vuedoc-demo__sourceref' },
	qn = d(
		'<pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vae-button</span> <span class="token attr-name">:plain</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>openHTML<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>使用 HTML 片段<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vae-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n\tmethods<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token function">openHTML</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\t\t\t\tdangerouslyUseHTMLString<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\t\t\t\tmessage<span class="token operator">:</span> <span class="token string">&#39;&lt;strong&gt;这是 &lt;i&gt;HTML&lt;/i&gt; 片段&lt;/strong&gt;&#39;</span>\n\t\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre>',
		1
	),
	yn = d(
		'<p>warning <code>message</code> 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS 攻击</a>。因此在 <code>dangerouslyUseHTMLString</code> 打开的情况下，请确保 <code>message</code> 的内容是可信的，<strong>永远不要</strong>将用户提交的内容赋值给 <code>message</code> 属性。</p><h3>全局方法</h3><p>Element Plus 为 Vue.prototype 添加了全局方法 $message。因此在 vue instance 中可以采用本页面中的方式调用 <code>Message</code>。</p><h3>单独引用</h3><p>单独引入 <code>Message</code>：</p><pre><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> Message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>\n</code></pre><p>此时调用方法为 <code>Message(options)</code>。我们也为每个 type 定义了各自的方法，如 <code>Message.success(options)</code>。并且可以调用 <code>Message.closeAll()</code> 手动关闭所有实例。</p><h3>Options</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>message</td><td>消息文字</td><td>string / VNode</td><td>—</td><td>—</td></tr><tr><td>type</td><td>主题</td><td>string</td><td>success/warning/info/error</td><td>info</td></tr><tr><td>iconClass</td><td>自定义图标的类名，会覆盖 <code>type</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>dangerouslyUseHTMLString</td><td>是否将 message 属性作为 HTML 片段处理</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>customClass</td><td>自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>duration</td><td>显示时间, 毫秒。设为 0 则不会自动关闭</td><td>number</td><td>—</td><td>3000</td></tr><tr><td>showClose</td><td>是否显示关闭按钮</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>center</td><td>文字是否居中</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>onClose</td><td>关闭时的回调函数, 参数为被关闭的 message 实例</td><td>function</td><td>—</td><td>—</td></tr><tr><td>offset</td><td>Message 距离窗口顶部的偏移量</td><td>number</td><td>—</td><td>20</td></tr></tbody></table><h3>方法</h3><p>调用 <code>Message</code> 或 <code>this.$message</code> 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 <code>close</code> 方法。</p><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>close</td><td>关闭当前的 Message</td></tr></tbody></table>',
		12
	)
D.render = function (n, o, e, c, u, l) {
	const k = s('VUEDEMO_0'),
		i = s('VUEDEMO_1'),
		d = s('VUEDEMO_2'),
		g = s('VUEDEMO_3'),
		m = s('VUEDEMO_4')
	return (
		a(),
		t('div', $, [
			L,
			T,
			x,
			N,
			R,
			j,
			p('div', S, [
				p('div', P, [
					p('div', A, [p(k)]),
					p(
						'div',
						{ style: { height: n.VUEDEMO_0Height + 'px' }, class: 'vuedoc-demo__source' },
						[p('div', F, [X], 512)],
						4
					),
					p(
						'div',
						{ class: 'vuedoc-demo__footer', onClick: o[1] || (o[1] = (s) => n.toggleCode(0)) },
						r(n.VUEDEMO_0Height > 0 ? 'hidden' : 'show'),
						1
					)
				])
			]),
			z,
			p('div', B, [
				p('div', G, [
					p('div', I, [p(i)]),
					p(
						'div',
						{ style: { height: n.VUEDEMO_1Height + 'px' }, class: 'vuedoc-demo__source' },
						[p('div', J, [K], 512)],
						4
					),
					p(
						'div',
						{ class: 'vuedoc-demo__footer', onClick: o[2] || (o[2] = (s) => n.toggleCode(1)) },
						r(n.VUEDEMO_1Height > 0 ? 'hidden' : 'show'),
						1
					)
				])
			]),
			Q,
			W,
			Y,
			Z,
			p('div', nn, [
				p('div', sn, [
					p('div', an, [p(d)]),
					p(
						'div',
						{ style: { height: n.VUEDEMO_2Height + 'px' }, class: 'vuedoc-demo__source' },
						[p('div', tn, [pn], 512)],
						4
					),
					p(
						'div',
						{ class: 'vuedoc-demo__footer', onClick: o[3] || (o[3] = (s) => n.toggleCode(2)) },
						r(n.VUEDEMO_2Height > 0 ? 'hidden' : 'show'),
						1
					)
				])
			]),
			on,
			en,
			cn,
			p('div', un, [
				p('div', ln, [
					p('div', kn, [p(g)]),
					p(
						'div',
						{ style: { height: n.VUEDEMO_3Height + 'px' }, class: 'vuedoc-demo__source' },
						[p('div', rn, [dn], 512)],
						4
					),
					p(
						'div',
						{ class: 'vuedoc-demo__footer', onClick: o[4] || (o[4] = (s) => n.toggleCode(3)) },
						r(n.VUEDEMO_3Height > 0 ? 'hidden' : 'show'),
						1
					)
				])
			]),
			gn,
			mn,
			vn,
			hn,
			p('div', _n, [
				p('div', fn, [
					p('div', En, [p(m)]),
					p(
						'div',
						{ style: { height: n.VUEDEMO_4Height + 'px' }, class: 'vuedoc-demo__source' },
						[p('div', Mn, [qn], 512)],
						4
					),
					p(
						'div',
						{ class: 'vuedoc-demo__footer', onClick: o[5] || (o[5] = (s) => n.toggleCode(4)) },
						r(n.VUEDEMO_4Height > 0 ? 'hidden' : 'show'),
						1
					)
				])
			]),
			yn
		])
	)
}
export default D
