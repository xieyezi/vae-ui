import { App } from 'vue'

// import { default as VaeAffix } from 'vae-ui/affix'
// import { default as VaeAnchor } from 'vae-ui/anchor'
// import { default as VaeAutoComplete } from 'vae-ui/auto-complete'
// import { default as VaeAlert } from 'vae-ui/alert'
// import { default as VaeAvatar } from 'vae-ui/avatar'
// import { default as VaeBackTop } from 'vae-ui/back-top'
// import { default as VaeBadge } from 'vae-ui/badge'
// import { default as VaeBreadcrumb } from 'vae-ui/breadcrumb'
import { default as VaeButton } from 'vae-ui/button'
// import { default as VaeCalendar } from 'vae-ui/calendar'
// import { default as VaeCard } from 'vae-ui/card'
// import { default as VaeCollapse } from 'vae-ui/collapse'
// import { default as VaeCarousel } from 'vae-ui/carousel'
// import { default as VaeCascader } from 'vae-ui/cascader'
// import { default as VaeCheckbox } from 'vae-ui/checkbox'
// import { default as VaeCol } from 'vae-ui/col'
// import { default as VaeDatePicker } from 'vae-ui/date-picker'
// import { default as VaeDivider } from 'vae-ui/divider'
// import { default as VaeDropdown } from 'vae-ui/dropdown'
// import { default as VaeForm } from 'vae-ui/form'
// import { default as VaeIcon } from 'vae-ui/icon'
// import { default as VaeInput } from 'vae-ui/input'
// import { default as VaeInputNumber } from 'vae-ui/input-number'
// import { default as VaeLayout } from 'vae-ui/layout'
// import { default as VaeList } from 'vae-ui/list'
// import { default as VaeLocaleProvider } from 'vae-ui/locale-provider'
// import { default as Vaemessage } from 'vae-ui/message'
// import { default as VaeMenu } from 'vae-ui/menu'
// import { default as VaeMentions } from 'vae-ui/mentions'
// import { default as VaeModal } from 'vae-ui/modal'
// import { default as Vaenotification } from 'vae-ui/notification'
// import { default as VaePagination } from 'vae-ui/pagination'
// import { default as VaePopconfirm } from 'vae-ui/popconfirm'
// import { default as VaePopover } from 'vae-ui/popover'
// import { default as VaeProgress } from 'vae-ui/progress'
// import { default as VaeRadio } from 'vae-ui/radio'
// import { default as VaeRate } from 'vae-ui/rate'
// import { default as VaeRow } from 'vae-ui/row'
// import { default as VaeSelect } from 'vae-ui/select'
// import { default as VaeSlider } from 'vae-ui/slider'
// import { default as VaeSpin } from 'vae-ui/spin'
// import { default as VaeStatistic } from 'vae-ui/statistic'
// import { default as VaeSteps } from 'vae-ui/steps'
// import { default as VaeSwitch } from 'vae-ui/switch'
// import { default as VaeTable } from 'vae-ui/table'
// import { default as VaeTransfer } from 'vae-ui/transfer'
// import { default as VaeTree } from 'vae-ui/tree'
// import { default as VaeTreeSelect } from 'vae-ui/tree-select'
// import { default as VaeTabs } from 'vae-ui/tabs'
// import { default as VaeTag } from 'vae-ui/tag'
// import { default as VaeTimePicker } from 'vae-ui/time-picker'
// import { default as VaeTimeline } from 'vae-ui/timeline'
// import { default as VaeTooltip } from 'vae-ui/tooltip'
// // import { default as VaeMention } from 'vae-ui/mention'
// import { default as VaeUpload } from 'vae-ui/upload'
// import { default as Vaeversion } from 'vae-ui/version'
// import { default as VaeDrawer } from 'vae-ui/drawer'
// import { default as VaeSkeleton } from 'vae-ui/skeleton'
// import { default as VaeComment } from 'vae-ui/comment'
// // import { default as VaeColorPicker } from 'vae-ui/color-picker';
// import { default as VaeConfigProvider } from 'vae-ui/config-provider'
// import { default as VaeEmpty } from 'vae-ui/empty'
// import { default as VaeResult } from 'vae-ui/result'
// import { default as VaeDescriptions } from 'vae-ui/descriptions'
// import { default as VaePageHeader } from 'vae-ui/page-header'
// import { default as VaeSpace } from 'vae-ui/space'

const components = [
	// Affix,
	// Anchor,
	// AutoComplete,
	// Alert,
	// Avatar,
	// BackTop,
	// Badge,
	// Breadcrumb,
	VaeButton
	// Calendar,
	// Card,
	// Collapse,
	// Carousel,
	// Cascader,
	// Checkbox,
	// Col,
	// DatePicker,
	// Divider,
	// Dropdown,
	// Form,
	// Icon,
	// Input,
	// InputNumber,
	// Layout,
	// List,
	// LocaleProvider,
	// Menu,
	// Mentions,
	// Modal,
	// Pagination,
	// Popconfirm,
	// Popover,
	// Progress,
	// Radio,
	// Rate,
	// Row,
	// Select,
	// Slider,
	// Spin,
	// Statistic,
	// Steps,
	// Switch,
	// Table,
	// Transfer,
	// Tree,
	// TreeSelect,
	// Tabs,
	// Tag,
	// TimePicker,
	// Timeline,
	// Tooltip,
	// Upload,
	// Drawer,
	// Skeleton,
	// Comment,
	// // ColorPicker,
	// ConfigProvider,
	// Empty,
	// Result,
	// Descriptions,
	// PageHeader,
	// Space
]

const install = function (app: App) {
	components.forEach((component: any) => {
		app.use(component)
	})
	// app.config.globalProperties.$message = message
	// app.config.globalProperties.$notification = notification
	// app.config.globalProperties.$info = Modal.info
	// app.config.globalProperties.$success = Modal.success
	// app.config.globalProperties.$error = Modal.error
	// app.config.globalProperties.$warning = Modal.warning
	// app.config.globalProperties.$confirm = Modal.confirm
	// app.config.globalProperties.$destroyAll = Modal.destroyAll
	return app
}

export {
	// version,
	// install,
	// message,
	// notification,
	// Affix,
	// Anchor,
	// AutoComplete,
	// Alert,
	// Avatar,
	// BackTop,
	// Badge,
	// Breadcrumb,
	VaeButton
	// Calendar,
	// Card,
	// Collapse,
	// Carousel,
	// Cascader,
	// Checkbox,
	// Col,
	// DatePicker,
	// Divider,
	// Dropdown,
	// Form,
	// Icon,
	// Input,
	// InputNumber,
	// Layout,
	// List,
	// LocaleProvider,
	// Menu,
	// Mentions,
	// Modal,
	// Pagination,
	// Popconfirm,
	// Popover,
	// Progress,
	// Radio,
	// Rate,
	// Row,
	// Select,
	// Slider,
	// Spin,
	// Statistic,
	// Steps,
	// Switch,
	// Table,
	// Transfer,
	// Tree,
	// TreeSelect,
	// Tabs,
	// Tag,
	// TimePicker,
	// Timeline,
	// Tooltip,
	// Upload,
	// Drawer,
	// Skeleton,
	// Comment,
	// // ColorPicker,
	// ConfigProvider,
	// Empty,
	// Result,
	// Descriptions,
	// PageHeader,
	// Space
}

export default {
	// version,
	install
}
