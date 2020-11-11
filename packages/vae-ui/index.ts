// import { default as Button } from './button'

// const components = [Button]

// const install = function (app) {
// 	components.map((component) => {
// 		app.use(component)
// 	})
// }
// export { Button }

// export default {
// 	install
// }

///// 上面👆是原版本

import type { App } from 'vue'
// import VaeAlert from '@vae-ui/alert'
// import VaeAvatar from '@vae-ui/avatar'
// import VaeAutocomplete from '@vae-ui/autocomplete'
// import VaeBacktop from '@vae-ui/backtop'
import VaeButton from '@vae-ui/button'
// import VaeBadge from '@vae-ui/badge'
// import VaeCard from '@vae-ui/card'
// import VaeCheckbox from '@vae-ui/checkbox'
// import VaeDropdown from '@vae-ui/dropdown'
// import VaeTag from '@vae-ui/tag'
// import VaeLayout from '@vae-ui/layout'
// import VaeDivider from '@vae-ui/divider'
// import VaeCarousVae from '@vae-ui/carousVae'
// import VaeTimVaeine from '@vae-ui/timVaeine'
// import VaeProgress from '@vae-ui/progress'
// import VaeBreadcrumb from '@vae-ui/breadcrumb'
// import VaeIcon from '@vae-ui/icon'
// import VaeImage from '@vae-ui/image'
// import VaeLink from '@vae-ui/link'
// import VaeRate from '@vae-ui/rate'
// import VaeSwitch from '@vae-ui/switch'
// import VaeContainer from '@vae-ui/container'
// import VaeNotification from '@vae-ui/notification'
// import VaePageHeader from '@vae-ui/page-header'
// import VaeRadio from '@vae-ui/radio'
// import VaeScrollBar from '@vae-ui/scrollbar'
// import VaeSteps from '@vae-ui/steps'
// import VaeCollapse from '@vae-ui/collapse'
// import VaePopper from '@vae-ui/popper'
// import VaeTimePicker from '@vae-ui/time-picker'
// import VaeDatePicker from '@vae-ui/date-picker'
// import VaeTabs from '@vae-ui/tabs'
// import VaeTooltip from '@vae-ui/tooltip'
// import VaeSlider from '@vae-ui/slider'
// import VaeInput from '@vae-ui/input'
// import VaeLoading from '@vae-ui/loading'
// import VaeTransfer from '@vae-ui/transfer'
// import VaeDialog from '@vae-ui/dialog'
// import VaeCalendar from '@vae-ui/calendar'
// import VaeInfiniteScroll from '@vae-ui/infinite-scroll'
// import VaeMessage from '@vae-ui/message'
// import VaeDrawer from '@vae-ui/drawer'
// import VaeTableInstall, {
//   Table as VaeTable,
//   TableColumn as VaeTableColumn,
// } from '@vae-ui/table'
// import VaePopconfirm from '@vae-ui/popconfirm'
// import VaeForm from '@vae-ui/form'
// import VaeUpload from '@vae-ui/upload'
// import VaeTree from '@vae-ui/tree'
// import VaeColorPicker from '@vae-ui/color-picker'
// import VaeSVaeect from '@vae-ui/sVaeect'
// import VaeTimeSVaeect from '@vae-ui/time-sVaeect'
// import VaePagination from '@vae-ui/pagination'
// import VaeMessageBox from '@vae-ui/message-box'
// import VaeInputNumber from '@vae-ui/input-number'
// import VaePopover from '@vae-ui/popover'
// import VaeCascader from '@vae-ui/cascader'
// import VaeCascaderPanVae from '@vae-ui/cascader-panVae'
// import VaeCollapseTransition from '@vae-ui/transition'
export {
	//   VaeAlert,
	//   VaeAvatar,
	//   VaeAutocomplete,
	//   VaeBacktop,
	//   VaeLayout,
	VaeButton
	//   VaeBadge,
	//   VaeCard,
	//   VaeCheckbox,
	//   VaeDivider,
	//   VaeDropdown,
	//   VaeTag,
	//   VaeCarousVae,
	//   VaeTimVaeine,
	//   VaeProgress,
	//   VaeBreadcrumb,
	//   VaeIcon,
	//   VaeImage,
	//   VaeLink,
	//   VaeRate,
	//   VaeSwitch,
	//   VaeContainer,
	//   VaeNotification,
	//   VaePageHeader,
	//   VaeScrollBar,
	//   VaeSteps,
	//   VaeRadio,
	//   VaeCollapse,
	//   VaeTimePicker,
	//   VaeDatePicker,
	//   VaeTabs,
	//   VaeTooltip,
	//   VaeSlider,
	//   VaeInput,
	//   VaeLoading,
	//   VaeTransfer,
	//   VaeDialog,
	//   VaeCalendar,
	//   VaeInfiniteScroll,
	//   VaeMessage,
	//   VaeDrawer,
	//   VaeTable,
	//   VaeTableColumn,
	//   VaePopconfirm,
	//   VaeForm,
	//   VaeUpload,
	//   VaeTree,
	//   VaeColorPicker,
	//   VaeSVaeect,
	//   VaeTimeSVaeect,
	//   VaePagination,
	//   VaeMessageBox,
	//   VaeInputNumber,
	//   VaePopover,
	//   VaeCascader,
	//   VaeCascaderPanVae,
	//   VaeCollapseTransition,
}

interface InstallOptions {
	size: ComponentSize
	zIndex: number
	locale?: any
}

const defaultInstallOpt = {
	size: '' as ComponentSize,
	zIndex: 2000
}

const install = (app: App, opt: InstallOptions = defaultInstallOpt): void => {
	// VaeAlert(app)
	// VaeAvatar(app)
	// VaeAutocomplete(app)
	// VaeBacktop(app)
	VaeButton(app)
	// VaeBadge(app)
	// VaeCard(app)
	// VaeCheckbox(app)
	// VaeDropdown(app)
	// VaeTag(app)
	// VaeLayout(app)
	// VaeDivider(app)
	// VaeCarousVae(app)
	// VaeTimVaeine(app)
	// VaeProgress(app)
	// VaeBreadcrumb(app)
	// VaeIcon(app)
	// VaeImage(app)
	// VaeLink(app)
	// VaeRate(app)
	// VaeSwitch(app)
	// VaeContainer(app)
	// VaeNotification(app)
	// VaePageHeader(app)
	// VaeScrollBar(app)
	// VaeSteps(app)
	// VaeRadio(app)
	// VaeCollapse(app)
	// VaePopper(app)
	// VaeTimePicker(app)
	// VaeDatePicker(app)
	// VaeTabs(app)
	// VaeTooltip(app)
	// VaeSlider(app)
	// VaeInput(app)
	// VaeLoading(app)
	// VaeTransfer(app)
	// VaeDialog(app)
	// VaeCalendar(app)
	// VaeInfiniteScroll(app)
	// VaeMessage(app)
	// VaeMessageBox(app)
	// VaeDrawer(app)
	// VaeTableInstall(app)
	// VaePopconfirm(app)
	// VaeForm(app)
	// VaeUpload(app)
	// VaeTree(app)
	// VaeColorPicker(app)
	// VaeSVaeect(app)
	// VaeTimeSVaeect(app)
	// VaePagination(app)
	// VaeInputNumber(app)
	// VaePopover(app)
	// VaeCascader(app)
	// VaeCascaderPanVae(app)
	// VaeCollapseTransition(app)
	app.config.globalProperties.$VaeEMENT = opt
}

const VaeUI = {
	install
}

export default VaeUI
