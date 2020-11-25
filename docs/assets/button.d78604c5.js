import {
	r as t,
	o as a,
	c as n,
	a as s,
	w as e,
	F as o,
	b as p,
	d,
	e as c,
	f as l,
	t as u,
	g as i,
	h as r
} from './index.da2207be.js'
const k = p('你好'),
	g = p('你好'),
	h = p('你好123'),
	v = p('你好')
const m = {
		render: function (p, d) {
			const c = t('vae-button')
			return (
				a(),
				n(
					o,
					null,
					[
						s(c, null, { default: e(() => [k]), _: 1 }),
						s(c, { theme: 'link' }, { default: e(() => [g]), _: 1 }),
						s(c, { theme: 'text' }, { default: e(() => [h]), _: 1 }),
						s(c, { theme: 'text', size: 'big' }, { default: e(() => [v]), _: 1 })
					],
					64
				)
			)
		}
	},
	b = d({
		components: { VUEDEMO_0: m },
		setup(t) {
			const a = c(),
				n = [a],
				s = l({ VUEDEMO_0Height: 0 })
			return {
				toggleCode: (t) => {
					const a = 'VUEDEMO_' + t
					0 === s[a + 'Height']
						? (s[a + 'Height'] = (n[t].value ? n[t].value.offsetHeight : 0) || 0)
						: (s[a + 'Height'] = 0)
				},
				...u(s),
				VUEDEMO_0Ref: a
			}
		}
	})
b.matter = {}
const f = { class: 'vuedoc markdown-container' },
	_ = r(
		'<h2>Button 按钮</h2><p>常用的操作按钮。</p><h3>基础用法</h3><p>基础的按钮用法。</p><blockquote><p>demo 使用<code>type</code>、<code>plain</code>、<code>round</code>和<code>circle</code>属性来定义 Button 的样式。</p></blockquote><pre style="display:none;"></pre>',
		6
	),
	E = { class: 'vuedoc-demo template-container' },
	q = { class: 'vuedoc-demo__inner' },
	y = { class: 'vuedoc-demo__preview' },
	x = { ref: 'VUEDEMO_0Ref', class: 'vuedoc-demo__sourceref' },
	D = r(
		'<pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vae-button</span><span class="token punctuation">&gt;</span></span>你好<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vae-button</span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vae-button</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>link<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>你好<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vae-button</span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vae-button</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>你好123<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vae-button</span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vae-button</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>big<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>你好<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vae-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre>',
		1
	),
	M = r(
		'<h3>Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>size</td><td>尺寸</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>type</td><td>类型</td><td>string</td><td>primary / success / warning / danger / info / text</td><td>—</td></tr><tr><td>plain</td><td>是否朴素按钮</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>round</td><td>是否圆角按钮</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>circle</td><td>是否圆形按钮</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>loading</td><td>是否加载中状态</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>是否禁用状态</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>icon</td><td>图标类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>autofocus</td><td>是否默认聚焦</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>native-type</td><td>原生 type 属性</td><td>string</td><td>button / submit / reset</td><td>button</td></tr></tbody></table>',
		2
	)
b.render = function (e, o, p, d, c, l) {
	const u = t('VUEDEMO_0')
	return (
		a(),
		n('div', f, [
			_,
			s('div', E, [
				s('div', q, [
					s('div', y, [s(u)]),
					s(
						'div',
						{ style: { height: e.VUEDEMO_0Height + 'px' }, class: 'vuedoc-demo__source' },
						[s('div', x, [D], 512)],
						4
					),
					s(
						'div',
						{ class: 'vuedoc-demo__footer', onClick: o[1] || (o[1] = (t) => e.toggleCode(0)) },
						i(e.VUEDEMO_0Height > 0 ? 'hidden' : 'show'),
						1
					)
				])
			]),
			M
		])
	)
}
export default b
