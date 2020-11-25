<template>
	<transition name="vae-alert-fade">
		<div v-show="visible" class="vae-alert" :class="classes">
			<i v-if="showIcon" :class="[typeClass, isBigIcon]"></i>
			<div class="vae-alert-content">
				<p class="vae-alert-title">
					{{ title }}
				</p>
				<p class="vae-alert-message">{{ message }}{{ closable }}</p>
				<i
					v-show="closable"
					class="vae-alert-closebtn"
					:class="closeText ? 'is-customed' : 'el-icon-close'"
					@click="close"
					>{{ closeText }}</i
				>
			</div>
		</div>
	</transition>
</template>

<script lang="ts">
import { defineComponent, computed, ref, PropType } from 'vue'
const TYPE_CLASSES_MAP = { success: 'el-icon-success', warning: 'el-icon-warning', error: 'el-icon-error' }
// eslint-ignore-nextline
export default defineComponent({
	// eslint-ignore-nextline
	// eslint-ignore-nextline
	name: 'VaeAlert', // eslint-ignore-nextline
	props: {
		title: {
			type: String,
			default: ''
		},
		message: {
			type: String,
			default: ''
		},
		type: {
			type: String as PropType<'success' | 'info' | 'error' | 'warning'>,
			default: 'info'
		},
		closable: {
			type: Boolean,
			default: true
		},
		showIcon: Boolean,
		closeText: {
			type: String,
			default: ''
		}
	},
	emits: ['close'],
	setup(props, ctx) {
		const visible = ref(true)
		const classes = computed(() => `vae-type-${props.type}`)
		const typeClass = computed(() => TYPE_CLASSES_MAP[props.type] || 'el-icon-info')
		const isBigIcon = computed(() => (props.title ? 'isBigIcon' : ''))

		const close = (evt) => {
			visible.value = false
			ctx.emit('close', evt)
		}
		return {
			visible,
			classes,
			typeClass,
			isBigIcon,
			close
		}
	}
})
</script>

<style lang="scss">
$h: 60px;
$gray: #f4f4f5;
$grayfont: #909399;
$red: #fde9ef;
$redfont: #f56c6c;
$yellow: #fff9e6;
$yellowfont: #e6a23c;
$green: #edfae1;
$greenfont: #67c23a;
$color: #333;

.vae-alert {
	width: 100%;
	padding: 20px;
	margin: 20px;
	color: $color;
	box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.06), 0 4px 8px 0 rgba(0, 0, 0, 0.06);
	border-radius: 6px;
	opacity: 1;
	overflow: hidden;
	opacity: 1;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-transition: opacity 0.2s;
	transition: opacity 0.2s;
	position: relative;
	&.vae-type-info {
		background: $gray;
		color: $grayfont;
	}
	&.vae-type-success {
		background: $green;
		color: $greenfont;
	}
	&.vae-type-warning {
		background: $yellow;
		color: $yellowfont;
	}
	&.vae-type-error {
		background: $red;
		color: $redfont;
	}
	> .isBigIcon {
		font-size: 28px;
	}
	> .vae-alert-content {
		> .vae-alert-title {
			font-weight: bolder;
		}
		> .vae-alert-closebtn {
			font-size: 12px;
			opacity: 1;
			position: absolute;
			top: 12px;
			right: 15px;
			cursor: pointer;
		}
		> .is-customed {
			font-style: normal;
			font-size: 16px;
			top: 9px;
		}
	}
}

.vae-alert-fade-enter,
.vae-alert-fade-leave-active {
	opacity: 0;
	transform: translate(-50%, -100%);
}
</style>
