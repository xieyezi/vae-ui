import { App } from 'vue'
import Button from './src/button.vue'
// import ButtonGroup from './src/button-group.vue'

Button.install = function (app: App): void {
	app.component(Button.name, Button)
	// app.component(ButtonGroup.name, ButtonGroup)
}

export default Button
